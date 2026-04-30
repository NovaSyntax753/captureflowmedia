import { NextResponse } from "next/server";
import type { WorkVideoInput } from "@/app/admin/work/types";

function getSupabaseConfig() {
  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables.");
  }

  return { supabaseUrl: supabaseUrl.replace(/\/$/, ""), supabaseKey };
}

export function isAdminAuthorized(request: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return false;
  }

  const authHeader = request.headers.get("authorization") ?? "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : "";

  return token.length > 0 && token === adminPassword;
}

export function unauthorizedResponse() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
    headers: {
      ...supabaseHeaders(),
      ...(init.headers ?? {}),
    },
    cache: "no-store",
  });
}

export function normalizeWorkVideoInput(payload: Record<string, unknown>): WorkVideoInput {
  const title = typeof payload.title === "string" ? payload.title.trim() : "";
  const description = typeof payload.description === "string" ? payload.description.trim() : "";
  const videoUrl = typeof payload.video_url === "string" ? payload.video_url.trim() : "";
  const thumbnailUrl = typeof payload.thumbnail_url === "string" ? payload.thumbnail_url.trim() : "";
  const category = typeof payload.category === "string" ? payload.category.trim() : "";
  const displayOrderValue = Number(payload.display_order ?? 0);

  return {
    title,
    description: description.length > 0 ? description : null,
    video_url: videoUrl,
    thumbnail_url: thumbnailUrl.length > 0 ? thumbnailUrl : null,
    category: category.length > 0 ? category : null,
    is_pinned: Boolean(payload.is_pinned),
    display_order: Number.isFinite(displayOrderValue) ? displayOrderValue : 0,
  };
}

export async function listWorkVideos() {
  const response = await supabaseRequest(
    "work_videos?select=id,title,description,video_url,thumbnail_url,category,is_pinned,display_order,created_at&order=is_pinned.desc,display_order.asc,created_at.asc",
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}

export async function insertWorkVideo(payload: WorkVideoInput) {
  const response = await supabaseRequest(
    "work_videos?select=id,title,description,video_url,thumbnail_url,category,is_pinned,display_order,created_at",
    {
      method: "POST",
      headers: {
        Prefer: "return=representation",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}

export async function updateWorkVideo(id: string, payload: WorkVideoInput) {
  const response = await supabaseRequest(
    `work_videos?id=eq.${encodeURIComponent(id)}&select=id,title,description,video_url,thumbnail_url,category,is_pinned,display_order,created_at`,
    {
      method: "PATCH",
      headers: {
        Prefer: "return=representation",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}

export async function deleteWorkVideo(id: string) {
  const response = await supabaseRequest(`work_videos?id=eq.${encodeURIComponent(id)}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }
}
