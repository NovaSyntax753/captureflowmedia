"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { WorkVideo, WorkVideoInput } from "@/app/admin/work/types";

type VideoFormState = {
  title: string;
  description: string;
  video_url: string;
  thumbnail_url: string;
  category: string;
  display_order: string;
  is_pinned: boolean;
};

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

function toPayload(form: VideoFormState): WorkVideoInput {
  return {
    title: form.title.trim(),
    description: form.description.trim() ? form.description.trim() : null,
    video_url: form.video_url.trim(),
    thumbnail_url: form.thumbnail_url.trim() ? form.thumbnail_url.trim() : null,
    category: form.category.trim() ? form.category.trim() : null,
    display_order: Number.isFinite(Number(form.display_order)) ? Number(form.display_order) : 0,
    is_pinned: form.is_pinned,
  };
}

export default function AdminWorkPage() {
  const [authChecked, setAuthChecked] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [videos, setVideos] = useState<WorkVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<VideoFormState>(emptyForm);

  useEffect(() => {
    const storedAuth = window.localStorage.getItem("cfm_admin_auth");

    if (storedAuth) {
      try {
        const parsed = JSON.parse(storedAuth) as { token?: string };
        if (typeof parsed.token === "string" && parsed.token.length > 0) {
          setAuthToken(parsed.token);
        }
      } catch {
        window.localStorage.removeItem("cfm_admin_auth");
      }
    }

    setAuthChecked(true);
  }, []);

  useEffect(() => {
    if (!authToken) {
      return;
    }

    const controller = new AbortController();

    const loadVideos = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch("/api/admin/videos", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to load videos");
        }

        const data = (await response.json()) as WorkVideo[];
        setVideos(data);
      } catch (requestError) {
        if (!controller.signal.aborted) {
          setError(requestError instanceof Error ? requestError.message : "Failed to load videos");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void loadVideos();

    return () => controller.abort();
  }, [authToken]);

  const persistAuth = (token: string) => {
    window.localStorage.setItem("cfm_admin_auth", JSON.stringify({ token }));
    setAuthToken(token);
  };

  const clearAuth = () => {
    window.localStorage.removeItem("cfm_admin_auth");
    setAuthToken(null);
    setVideos([]);
    setForm(emptyForm);
    setEditingId(null);
  };

  const refreshVideos = async () => {
    if (!authToken) {
      return;
    }

    const response = await fetch("/api/admin/videos", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to refresh videos");
    }

    const data = (await response.json()) as WorkVideo[];
    setVideos(data);
    window.localStorage.setItem("cfm_work_videos_updated", String(Date.now()));
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError("");

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: loginPassword }),
      });

      if (!response.ok) {
        throw new Error("Invalid password");
      }

      const data = (await response.json()) as { token: string };
      persistAuth(data.token);
      setLoginPassword("");
    } catch (loginRequestError) {
      setLoginError(loginRequestError instanceof Error ? loginRequestError.message : "Login failed");
    }
  };

  const handleEdit = (video: WorkVideo) => {
    setEditingId(video.id);
    setForm(toFormState(video));
  };

  const handleAddNew = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!authToken) {
      return;
    }

    if (!form.title.trim() || !form.video_url.trim()) {
      setError("Title and video URL are required.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const payload = toPayload(form);
      const response = await fetch(editingId ? `/api/admin/videos/${editingId}` : "/api/admin/videos", {
        method: editingId ? "PUT" : "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to save video");
      }

      setEditingId(null);
      setForm(emptyForm);
      await refreshVideos();
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Failed to save video");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!authToken || !window.confirm("Delete this video? This cannot be undone.")) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/videos/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete video");
      }

      await refreshVideos();
      if (editingId === id) {
        handleAddNew();
      }
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : "Failed to delete video");
    }
  };

  const handleTogglePin = async (video: WorkVideo) => {
    if (!authToken) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/videos/${video.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...video,
          is_pinned: !video.is_pinned,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update pin status");
      }

      await refreshVideos();
    } catch (pinError) {
      setError(pinError instanceof Error ? pinError.message : "Failed to update pin status");
    }
  };

  if (!authChecked) {
    return <div className="min-h-screen bg-black text-white" />;
  }

  if (!authToken) {
    return (
      <main className="min-h-screen bg-black text-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[70vh] max-w-md items-center justify-center">
          <form onSubmit={handleLogin} className="w-full rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 shadow-2xl shadow-green-500/5">
            <p className="text-sm uppercase tracking-[0.3em] text-[#53c926]">Admin Access</p>
            <h1 className="mt-3 text-3xl font-bold">Work Video Manager</h1>
            <p className="mt-2 text-sm text-white/70">Enter the admin password to manage the work gallery.</p>
            <label className="mt-6 block text-sm font-medium text-white/80">
              Password
              <input
                type="password"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[#53c926]"
                placeholder="Enter password"
              />
            </label>
            {loginError ? <p className="mt-3 text-sm text-red-400">{loginError}</p> : null}
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-[#53c926] px-5 py-3 font-semibold text-black transition hover:bg-white"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#53c926]">Admin Workspace</p>
            <h1 className="mt-2 text-4xl font-bold">Work Video Management</h1>
            <p className="mt-2 max-w-2xl text-sm text-white/70">Add, edit, pin, and remove the videos that appear on the public Work page.</p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleAddNew}
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#53c926] hover:text-[#53c926]"
            >
              Add New Video
            </button>
            <button
              type="button"
              onClick={clearAuth}
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#53c926]"
            >
              Sign Out
            </button>
          </div>
        </div>

        {error ? <p className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p> : null}

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Existing Videos</h2>
              <span className="text-sm text-white/60">{loading ? "Loading..." : `${videos.length} total`}</span>
            </div>

            <div className="space-y-4">
              {videos.map((video) => (
                <article key={video.id} className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-4 shadow-lg shadow-black/30">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="h-24 w-full overflow-hidden rounded-2xl border border-white/10 bg-black sm:h-28 sm:w-20 sm:flex-shrink-0">
                      {video.thumbnail_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={video.thumbnail_url} alt={video.title} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.3em] text-white/30">No thumbnail</div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-lg font-semibold">{video.title}</h3>
                        {video.is_pinned ? <span className="rounded-full bg-[#53c926] px-3 py-1 text-xs font-semibold text-black">Pinned</span> : null}
                      </div>
                      <p className="mt-1 text-sm text-white/60">{video.category || "Uncategorized"} · Order {video.display_order}</p>
                      <p className="mt-2 line-clamp-2 text-sm text-white/70">{video.description || "No description provided."}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      <button
                        type="button"
                        onClick={() => handleEdit(video)}
                        className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-[#53c926] hover:text-[#53c926]"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTogglePin(video)}
                        className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-[#53c926] hover:text-[#53c926]"
                      >
                        {video.is_pinned ? "Unpin" : "Pin"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(video.id)}
                        className="rounded-full border border-red-500/30 px-4 py-2 text-sm font-medium text-red-200 transition hover:border-red-400 hover:text-red-100"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {!videos.length && !loading ? (
                <div className="rounded-3xl border border-dashed border-white/15 bg-[#0a0a0a] p-8 text-center text-white/60">
                  No videos found. Add the first one using the form.
                </div>
              ) : null}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 shadow-2xl shadow-green-500/5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#53c926]">{editingId ? "Edit Video" : "Add Video"}</p>
                <h2 className="mt-2 text-2xl font-semibold">{editingId ? "Update the selected item" : "Create a new work video"}</h2>
              </div>
              {editingId ? (
                <button
                  type="button"
                  onClick={handleAddNew}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-[#53c926] hover:text-[#53c926]"
                >
                  New Entry
                </button>
              ) : null}
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label className="block text-sm font-medium text-white/80">
                Title
                <input
                  type="text"
                  value={form.title}
                  onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[#53c926]"
                />
              </label>

              <label className="block text-sm font-medium text-white/80">
                Description
                <textarea
                  value={form.description}
                  onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[#53c926]"
                />
              </label>

              <label className="block text-sm font-medium text-white/80">
                Video URL
                <input
                  type="text"
                  value={form.video_url}
                  onChange={(event) => setForm((current) => ({ ...current, video_url: event.target.value }))}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[#53c926]"
                />
              </label>

              <label className="block text-sm font-medium text-white/80">
                Thumbnail URL
                <input
                  type="text"
                  value={form.thumbnail_url}
                  onChange={(event) => setForm((current) => ({ ...current, thumbnail_url: event.target.value }))}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[#53c926]"
                />
              </label>

              <label className="block text-sm font-medium text-white/80">
                Category
                <input
                  type="text"
                  value={form.category}
                  onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[#53c926]"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-white/80">
                  Display Order
                  <input
                    type="number"
                    value={form.display_order}
                    onChange={(event) => setForm((current) => ({ ...current, display_order: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[#53c926]"
                  />
                </label>

                <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm font-medium text-white/80">
                  <input
                    type="checkbox"
                    checked={form.is_pinned}
                    onChange={(event) => setForm((current) => ({ ...current, is_pinned: event.target.checked }))}
                    className="h-4 w-4 accent-[#53c926]"
                  />
                  Is Pinned
                </label>
              </div>

              <button
                type="submit"
                disabled={saving}
                className="w-full rounded-full bg-[#53c926] px-5 py-3 font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Saving..." : editingId ? "Save Changes" : "Create Video"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
