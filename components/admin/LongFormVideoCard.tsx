"use client";

import type { LongFormVideo } from "@/app/admin/long-form/types";

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/,
    /youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = pattern.exec(url);
    if (match) return match[1];
  }
  return null;
}

type Props = {
  video: LongFormVideo;
  isEditing: boolean;
  onEdit: (video: LongFormVideo) => void;
  onDelete: (id: string) => void;
};

export default function LongFormVideoCard({ video, isEditing, onEdit, onDelete }: Props) {
  const ytId = extractYouTubeId(video.youtube_url);
  const thumbnailSrc =
    video.thumbnail_url ||
    (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : null);

  return (
    <article
      className={`rounded-2xl border bg-[#0e0e0e] transition-all duration-200 overflow-hidden ${
        isEditing
          ? "border-[#53c926]/40 shadow-[0_0_0_1px_rgba(83,201,38,0.15)]"
          : "border-white/[0.06] hover:border-white/[0.12]"
      }`}
    >
      {/* Thumbnail / embed */}
      <div className="aspect-video w-full overflow-hidden bg-black relative">
        {thumbnailSrc ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailSrc}
              alt={video.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {ytId && (
              <a
                href={`https://www.youtube.com/watch?v=${ytId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-200"
                aria-label="Watch on YouTube"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 shadow-lg">
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
            )}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-white/20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.361a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2">{video.title}</h3>
          {ytId && (
            <span className="shrink-0 rounded-md bg-red-600/15 border border-red-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-red-400 uppercase tracking-wide">
              YT
            </span>
          )}
        </div>
        {video.description && (
          <p className="mt-1.5 text-xs text-white/40 line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        )}
        <p className="mt-2 text-[10px] text-white/25">Order #{video.display_order}</p>
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
        {ytId && (
          <a
            href={`https://www.youtube.com/watch?v=${ytId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-1.5 text-xs font-medium text-white/30 hover:text-white/70 hover:bg-white/[0.06] transition-colors"
          >
            Watch ↗
          </a>
        )}
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
