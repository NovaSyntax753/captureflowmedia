import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthorized, unauthorizedResponse } from "../_lib";
import type { LongFormVideoInput } from "@/app/admin/long-form/types";

function getSupabaseConfig() {
  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) throw new Error("Missing Supabase environment variables.");
  return { supabaseUrl: supabaseUrl.replace(/\/$/, ""), supabaseKey };
}

function supabaseHeaders() {
  const { supabaseKey } = getSupabaseConfig();
  return {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    "Content-Type": "application/json",
  };
}

async function supabaseRequest(path: string, init: RequestInit = {}) {
  const { supabaseUrl } = getSupabaseConfig();
  return fetch(`${supabaseUrl}/rest/v1/${path}`, {
    ...init,
    headers: { ...supabaseHeaders(), ...(init.headers ?? {}) },
    cache: "no-store",
  });
}

function normalizeLongFormInput(payload: Record<string, unknown>): LongFormVideoInput {
  const title = typeof payload.title === "string" ? payload.title.trim() : "";
  const description = typeof payload.description === "string" ? payload.description.trim() : "";
  const youtubeUrl = typeof payload.youtube_url === "string" ? payload.youtube_url.trim() : "";
  const thumbnailUrl =
    typeof payload.thumbnail_url === "string" ? payload.thumbnail_url.trim() : "";
  const displayOrder = Number(payload.display_order ?? 0);

  return {
    title,
    description: description.length > 0 ? description : null,
    youtube_url: youtubeUrl,
    thumbnail_url: thumbnailUrl.length > 0 ? thumbnailUrl : null,
    display_order: Number.isFinite(displayOrder) ? displayOrder : 0,
  };
}

export async function GET(request: NextRequest) {
  if (!isAdminAuthorized(request)) return unauthorizedResponse();

  try {
    const response = await supabaseRequest(
      "long_form_videos?select=id,title,description,youtube_url,thumbnail_url,display_order,created_at&order=display_order.asc,created_at.asc",
    );
    if (!response.ok) throw new Error(await response.text());
    return NextResponse.json(await response.json());
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to load videos" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  if (!isAdminAuthorized(request)) return unauthorizedResponse();

  try {
    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body) return NextResponse.json({ error: "Invalid request body" }, { status: 400 });

    const payload = normalizeLongFormInput(body);
    if (!payload.title || !payload.youtube_url) {
      return NextResponse.json({ error: "Title and YouTube URL are required" }, { status: 400 });
    }

    const response = await supabaseRequest(
      "long_form_videos?select=id,title,description,youtube_url,thumbnail_url,display_order,created_at",
      {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) throw new Error(await response.text());
    const [video] = (await response.json()) as unknown[];
    return NextResponse.json(video, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create video" },
      { status: 500 },
    );
  }
}
