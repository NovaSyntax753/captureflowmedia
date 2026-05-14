"use client";

import { useState } from "react";
import type { WorkVideo } from "@/app/admin/work/types";

type Props = {
  video: WorkVideo;
  isEditing: boolean;
  onEdit: (video: WorkVideo) => void;
  onDelete: (id: string) => void;
  onTogglePin: (video: WorkVideo) => void;
};

/** Extract YouTube video ID from any YouTube URL format */
function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = p.exec(url);
    if (m) return m[1];
  }
  return null;
}

/** Resolve the best thumbnail src for a video */
function resolveThumbnail(video: WorkVideo): string | null {
  // 1. Explicit thumbnail URL
  if (video.thumbnail_url) return video.thumbnail_url;

  // 2. Auto-generate from YouTube video URL
  const ytId = extractYouTubeId(video.video_url);
  if (ytId) return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;

  return null;
}

export default function VideoCard({ video, isEditing, onEdit, onDelete, onTogglePin }: Props) {
  const thumbnail = resolveThumbnail(video);
  const [imgFailed, setImgFailed] = useState(false);
  const ytId = extractYouTubeId(video.video_url);

  return (
    <article
      className={`group rounded-2xl border bg-[#0e0e0e] transition-all duration-200 ${
        isEditing
          ? "border-[#53c926]/40 shadow-[0_0_0_1px_rgba(83,201,38,0.15)]"
          : "border-white/[0.06] hover:border-white/[0.12]"
      }`}
    >
      <div className="flex gap-4 p-4">
        {/* Thumbnail */}
        <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border border-white/[0.06] bg-[#111]">
          {thumbnail && !imgFailed ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbnail}
                alt={video.title}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={() => setImgFailed(true)}
              />
              {/* Play overlay on hover if it's a YouTube link */}
              {ytId && (
                <a
                  href={`https://www.youtube.com/watch?v=${ytId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  title="Watch on YouTube"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 shadow">
                    <svg width="10" height="10" fill="white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
              )}
            </>
          ) : (
            /* Fallback: dark placeholder with play icon */
            <div className="flex h-full w-full items-center justify-center">
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-white/20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate text-sm font-semibold text-white">{video.title}</h3>
            {video.is_pinned && (
              <span className="rounded-full bg-[#53c926]/15 border border-[#53c926]/25 px-2 py-0.5 text-[10px] font-semibold text-[#53c926] uppercase tracking-wide">
                Pinned
              </span>
            )}
          </div>
          <div className="mt-1 flex items-center gap-2 text-xs text-white/35">
            {video.category && <span>{video.category}</span>}
            {video.category && <span>·</span>}
            <span>Order #{video.display_order}</span>
          </div>
          {video.description && (
            <p className="mt-1.5 line-clamp-2 text-xs text-white/45 leading-relaxed">
              {video.description}
            </p>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 border-t border-white/[0.05] px-4 py-2.5">
        <button
          type="button"
          onClick={() => onEdit(video)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
            isEditing
              ? "bg-[#53c926]/15 text-[#53c926]"
              : "text-white/50 hover:text-white hover:bg-white/[0.06]"
          }`}
        >
          {isEditing ? "Editing" : "Edit"}
        </button>
        <button
          type="button"
          onClick={() => onTogglePin(video)}
          className="rounded-lg px-3 py-1.5 text-xs font-medium text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors"
        >
          {video.is_pinned ? "Unpin" : "Pin"}
        </button>
        <button
          type="button"
          onClick={() => onDelete(video.id)}
          className="ml-auto rounded-lg px-3 py-1.5 text-xs font-medium text-red-400/60 hover:text-red-300 hover:bg-red-500/[0.08] transition-colors"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
