"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { WorkVideo } from "@/app/admin/work/types";
import VideoCard from "@/components/admin/VideoCard";
import VideoForm, { type VideoFormState } from "@/components/admin/VideoForm";

function getStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem("cfm_admin_auth");
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { token?: string };
    return typeof parsed.token === "string" && parsed.token.length > 0 ? parsed.token : null;
  } catch {
    return null;
  }
}

const emptyForm: VideoFormState = {
  title: "",
  description: "",
  video_url: "",
  thumbnail_url: "",
  category: "",
  display_order: "0",
  is_pinned: false,
};

function toFormState(video: WorkVideo): VideoFormState {
  return {
    title: video.title,
    description: video.description ?? "",
    video_url: video.video_url,
    thumbnail_url: video.thumbnail_url ?? "",
    category: video.category ?? "",
    display_order: String(video.display_order ?? 0),
    is_pinned: video.is_pinned,
  };
}

export default function AdminWorkPage() {
  const [token, setToken] = useState<string | null>(null);
  const [videos, setVideos] = useState<WorkVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<VideoFormState>(emptyForm);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setToken(getStoredToken());
  }, []);

  useEffect(() => {
    if (!token) return;
    const controller = new AbortController();

    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/admin/videos", {
          headers: { Authorization: `Bearer ${token}` },
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Failed to load videos");
        setVideos((await res.json()) as WorkVideo[]);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err instanceof Error ? err.message : "Failed to load videos");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    void load();
    return () => controller.abort();
  }, [token]);

  const refreshVideos = async () => {
    if (!token) return;
    const res = await fetch("/api/admin/videos", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to refresh videos");
    setVideos((await res.json()) as WorkVideo[]);
  };

  const handleEdit = (video: WorkVideo) => {
    setEditingId(video.id);
    setForm(toFormState(video));
  };

  const handleReset = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) return;

    setSaving(true);
    setError("");

    try {
      const payload = {
        title: form.title.trim(),
        description: form.description.trim() || null,
        video_url: form.video_url.trim(),
        thumbnail_url: form.thumbnail_url.trim() || null,
        category: form.category.trim() || null,
        display_order: Number.isFinite(Number(form.display_order)) ? Number(form.display_order) : 0,
        is_pinned: form.is_pinned,
      };

      const res = await fetch(
        editingId ? `/api/admin/videos/${editingId}` : "/api/admin/videos",
        {
          method: editingId ? "PUT" : "POST",
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) throw new Error("Failed to save video");

      handleReset();
      await refreshVideos();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save video");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!token || !window.confirm("Delete this video? This cannot be undone.")) return;

    setVideos((prev) => prev.filter((v) => v.id !== id));
    if (editingId === id) handleReset();

    try {
      const res = await fetch(`/api/admin/videos/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        await refreshVideos();
        throw new Error("Failed to delete video");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete video");
    }
  };

  const handleTogglePin = async (video: WorkVideo) => {
    if (!token) return;

    setVideos((prev) =>
      prev.map((v) => (v.id === video.id ? { ...v, is_pinned: !v.is_pinned } : v)),
    );

    try {
      const res = await fetch(`/api/admin/videos/${video.id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ ...video, is_pinned: !video.is_pinned }),
      });
      if (!res.ok) {
        await refreshVideos();
        throw new Error("Failed to update pin status");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update pin status");
    }
  };

  const filteredVideos = videos.filter(
    (v) =>
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (v.category ?? "").toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const pinnedCount = videos.filter((v) => v.is_pinned).length;

  return (
    /* Full-height flex column — fills the <main> which is also flex col */
    <div className="flex flex-col h-full min-h-0">

      {/* ── Fixed top bar: header + stats + error ── */}
      <div className="flex-none px-6 pt-8 pb-4 lg:px-10">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#53c926] font-semibold">
          Content Management
        </p>
        <h1 className="mt-1.5 text-2xl font-bold text-white">Work Videos</h1>
        <p className="mt-1 text-sm text-white/40">
          Manage the short-form videos displayed on the public Work page.
        </p>

        {/* Stats strip */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[
            { label: "Total Videos", value: loading ? "—" : String(videos.length) },
            { label: "Pinned", value: loading ? "—" : String(pinnedCount) },
            {
              label: "Categories",
              value: loading
                ? "—"
                : String(new Set(videos.map((v) => v.category).filter(Boolean)).size),
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/[0.06] bg-[#0e0e0e] px-4 py-3"
            >
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="mt-0.5 text-xs text-white/35">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Error banner */}
        {error && (
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.08] px-4 py-3">
            <svg
              className="mt-0.5 shrink-0 text-red-400"
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm text-red-300">{error}</p>
            <button
              onClick={() => setError("")}
              className="ml-auto text-red-400/50 hover:text-red-300"
            >
              ×
            </button>
          </div>
        )}
      </div>

      {/* ── Scrollable body: video list (scrolls) + form (scrolls) ── */}
      <div className="flex-1 min-h-0 px-6 pb-6 lg:px-10">
        <div className="h-full grid gap-6 xl:grid-cols-[1fr_380px]">

          {/* Left: video list — only this scrolls */}
          <section className="flex flex-col min-h-0">
            {/* Search row — fixed within column */}
            <div className="flex-none mb-4 flex items-center gap-3">
              <div className="relative flex-1">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search by title or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-white/[0.07] bg-[#0e0e0e] pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/[0.15] transition-colors"
                />
              </div>
              <span className="shrink-0 text-xs text-white/30">
                {loading ? "Loading..." : `${filteredVideos.length} of ${videos.length}`}
              </span>
            </div>

            {/* Card list — this is the only part that scrolls */}
            <div className="flex-1 overflow-y-auto min-h-0 pr-1 space-y-3">
              {loading &&
                [1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-24 rounded-2xl border border-white/[0.05] bg-[#0e0e0e] animate-pulse"
                  />
                ))}

              {!loading &&
                filteredVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    isEditing={editingId === video.id}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onTogglePin={handleTogglePin}
                  />
                ))}

              {!loading && filteredVideos.length === 0 && (
                <div className="rounded-2xl border border-dashed border-white/[0.08] bg-[#0a0a0a] p-12 text-center">
                  <svg
                    className="mx-auto text-white/15"
                    width="36"
                    height="36"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.2"
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
                  <p className="mt-4 text-sm text-white/30">
                    {searchQuery
                      ? "No videos match your search."
                      : "No videos yet. Add your first one →"}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Right: form panel — independently scrollable */}
          <aside className="overflow-y-auto min-h-0">
            <VideoForm
              form={form}
              editingId={editingId}
              saving={saving}
              authToken={token}
              onChange={setForm}
              onSubmit={handleSubmit}
              onReset={handleReset}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
