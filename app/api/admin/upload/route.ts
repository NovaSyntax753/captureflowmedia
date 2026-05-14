import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthorized, unauthorizedResponse } from "../_lib";

const BUCKET = "videos";

function getSupabaseConfig() {
  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) throw new Error("Missing Supabase environment variables.");
  return { supabaseUrl: supabaseUrl.replace(/\/$/, ""), supabaseKey };
}

export async function POST(request: NextRequest) {
  if (!isAdminAuthorized(request)) return unauthorizedResponse();

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!file.type.startsWith("video/")) {
      return NextResponse.json({ error: "Only video files are allowed" }, { status: 400 });
    }

    // 500 MB limit
    if (file.size > 500 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large (max 500 MB)" }, { status: 413 });
    }

    const { supabaseUrl, supabaseKey } = getSupabaseConfig();

    // Unique path: videos/<timestamp>-<sanitized-filename>
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filePath = `${Date.now()}-${safeName}`;

    const uploadRes = await fetch(
      `${supabaseUrl}/storage/v1/object/${BUCKET}/${filePath}`,
      {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": file.type,
          "x-upsert": "true",
        },
        body: await file.arrayBuffer(),
      },
    );

    if (!uploadRes.ok) {
      const errText = await uploadRes.text();
      // If bucket doesn't exist, give a clear message
      if (uploadRes.status === 400 && errText.includes("Bucket not found")) {
        return NextResponse.json(
          {
            error:
              'Storage bucket "videos" not found. Create it in your Supabase dashboard: Storage → New bucket → name it "videos" → set it to Public.',
          },
          { status: 400 },
        );
      }
      throw new Error(errText);
    }

    // Build the public URL
    const publicUrl = `${supabaseUrl}/storage/v1/object/public/${BUCKET}/${filePath}`;

    return NextResponse.json({ url: publicUrl });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed" },
      { status: 500 },
    );
  }
}
