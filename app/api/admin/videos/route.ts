import { NextRequest, NextResponse } from "next/server";
import {
  insertWorkVideo,
  isAdminAuthorized,
  listWorkVideos,
  normalizeWorkVideoInput,
  unauthorizedResponse,
} from "../_lib";

export async function GET(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return unauthorizedResponse();
  }

  try {
    const videos = await listWorkVideos();
    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to load videos" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return unauthorizedResponse();
  }

  try {
    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;

    if (!body) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const payload = normalizeWorkVideoInput(body);

    if (!payload.title || !payload.video_url) {
      return NextResponse.json({ error: "Title and video URL are required" }, { status: 400 });
    }

    const [video] = (await insertWorkVideo(payload)) as unknown[];
    return NextResponse.json(video, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create video" },
      { status: 500 },
    );
  }
}
