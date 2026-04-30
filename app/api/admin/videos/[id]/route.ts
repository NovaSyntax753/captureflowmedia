import { NextRequest, NextResponse } from "next/server";
import {
  deleteWorkVideo,
  isAdminAuthorized,
  normalizeWorkVideoInput,
  updateWorkVideo,
  unauthorizedResponse,
} from "../../_lib";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function PUT(request: NextRequest, context: RouteContext) {
  if (!isAdminAuthorized(request)) {
    return unauthorizedResponse();
  }

  try {
    const { id } = await context.params;
    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;

    if (!body) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const payload = normalizeWorkVideoInput(body);

    if (!payload.title || !payload.video_url) {
      return NextResponse.json({ error: "Title and video URL are required" }, { status: 400 });
    }

    const [video] = (await updateWorkVideo(id, payload)) as unknown[];
    return NextResponse.json(video);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update video" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  if (!isAdminAuthorized(request)) {
    return unauthorizedResponse();
  }

  try {
    const { id } = await context.params;
    await deleteWorkVideo(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete video" },
      { status: 500 },
    );
  }
}
