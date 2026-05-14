"use client";

import { useRef, useState, type FormEvent } from "react";

export type VideoFormState = {
  title: string;
  description: string;
  video_url: string;
  thumbnail_url: string;
  category: string;
  display_order: string;
  is_pinned: boolean;
};

type Props = {
  form: VideoFormState;
  editingId: string | null;
  saving: boolean;
  authToken: string | null;
  onChange: (form: VideoFormState) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
};

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold uppercase tracking-wider text-white/40">
        {label}
        {hint && (
          <span className="ml-1.5 text-[10px] normal-case tracking-normal text-white/25 font-normal">
            {hint}
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/20 outline-none transition-all focus:border-[#53c926]/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-[#53c926]/15";

export default function VideoForm({
  form,
  editingId,
  saving,
  authToken,
  onChange,
  onSubmit,
  onReset,
}: Props) {
  const set = (patch: Partial<VideoFormState>) => onChange({ ...form, ...patch });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("video/")) {
      setUploadError("Please select a video file.");
      e.target.value = "";
      return;
    }

    setUploadError("");
    setUploading(true);
    setUploadProgress(10);
    setUploadedFileName(file.name);

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Simulate progress while uploading (XHR would give real progress,
      // but fetch is simpler here — we fake intermediate steps)
      const progressInterval = setInterval(() => {
        setUploadProgress((p) => (p < 85 ? p + 5 : p));
      }, 300);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken ?? ""}`,
        },
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Upload failed");
      }

      const data = (await res.json()) as { url: string };
      set({ video_url: data.url });
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Upload failed");
      setUploadedFileName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } finally {
      setUploading(false);
      setTimeout(() => setUploadProgress(0), 800);
    }
  };

  const clearUpload = () => {
    setUploadedFileName("");
    setUploadError("");
    setUploadProgress(0);
    set({ video_url: "" });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="rounded-2xl border border-white/[0.07] bg-[#0e0e0e] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#53c926] font-semibold">
            {editingId ? "Editing" : "New Entry"}
          </p>
          <h2 className="mt-0.5 text-base font-semibold text-white">
            {editingId ? "Update video" : "Add a video"}
          </h2>
        </div>
        {editingId && (
          <button
            type="button"
            onClick={onReset}
            className="rounded-lg px-3 py-1.5 text-xs font-medium text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            + New
          </button>
        )}
      </div>

      <form onSubmit={onSubmit} className="p-6 space-y-5">
        <Field label="Title" hint="required">
          <input
            type="text"
            value={form.title}
            onChange={(e) => set({ title: e.target.value })}
            placeholder="e.g. Brand Promo Reel"
            className={inputCls}
            required
          />
        </Field>

        <Field label="Description" hint="optional">
          <textarea
            value={form.description}
            onChange={(e) => set({ description: e.target.value })}
            rows={3}
            placeholder="Brief description of this video..."
            className={inputCls + " resize-none"}
          />
        </Field>

        {/* Video URL + Upload from PC */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-white/40">
            Video URL
            <span className="ml-1.5 text-[10px] normal-case tracking-normal text-white/25 font-normal">
              required — paste a link or upload from your PC
            </span>
          </label>

          {/* URL text input */}
          <input
            type="text"
            value={form.video_url}
            onChange={(e) => set({ video_url: e.target.value })}
            placeholder="https://youtube.com/... or Vimeo / CDN link"
            className={inputCls}
            required
          />

          {/* Divider */}
          <div className="flex items-center gap-3 pt-1">
            <div className="flex-1 h-px bg-white/[0.05]" />
            <span className="text-[10px] text-white/20 uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </div>

          {/* Upload zone */}
          <div
            className={`relative rounded-xl border transition-all duration-200 ${
              uploading
                ? "border-[#53c926]/30 bg-[#53c926]/[0.04]"
                : uploadedFileName
                  ? "border-[#53c926]/25 bg-[#53c926]/[0.03]"
                  : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.03]"
            }`}
          >
            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              id="video-file-upload"
              type="file"
              accept="video/*"
              className="sr-only"
              onChange={handleFileChange}
              disabled={uploading}
            />

            {uploadedFileName ? (
              /* Uploaded state */
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#53c926]/15">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#53c926" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium text-[#53c926]">{uploadedFileName}</p>
                  <p className="text-[10px] text-white/30">Uploaded — URL filled in above</p>
                </div>
                <button
                  type="button"
                  onClick={clearUpload}
                  className="shrink-0 rounded-lg p-1.5 text-white/30 hover:text-white hover:bg-white/[0.06] transition-colors"
                  title="Remove"
                >
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              /* Default pick state */
              <label
                htmlFor="video-file-upload"
                className={`flex items-center gap-3 px-4 py-3.5 cursor-pointer ${uploading ? "pointer-events-none" : ""}`}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                  {uploading ? (
                    <svg className="animate-spin text-[#53c926]" width="14" height="14" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-white/40">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/60">
                    {uploading ? "Uploading..." : "Upload from PC"}
                  </p>
                  <p className="text-[10px] text-white/25">
                    {uploading ? "Please wait, uploading to storage" : "MP4, MOV, WebM — uploaded to Supabase Storage"}
                  </p>
                </div>
                {!uploading && (
                  <span className="ml-auto shrink-0 rounded-lg border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/50">
                    Browse
                  </span>
                )}
              </label>
            )}

            {/* Progress bar */}
            {uploading && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-xl bg-white/[0.05]">
                <div
                  className="h-full bg-[#53c926] transition-all duration-300 ease-out"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}
          </div>

          {/* Upload error */}
          {uploadError && (
            <div className="flex items-start gap-2 rounded-lg border border-red-500/20 bg-red-500/[0.07] px-3 py-2.5">
              <svg className="mt-0.5 shrink-0 text-red-400" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs text-red-300 leading-relaxed">{uploadError}</p>
            </div>
          )}
        </div>

        <Field label="Thumbnail URL" hint="optional">
          <input
            type="text"
            value={form.thumbnail_url}
            onChange={(e) => set({ thumbnail_url: e.target.value })}
            placeholder="https://..."
            className={inputCls}
          />
          {form.thumbnail_url && (
            <div className="mt-2 h-20 w-full overflow-hidden rounded-xl border border-white/[0.06]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={form.thumbnail_url}
                alt="Thumbnail preview"
                className="h-full w-full object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          )}
        </Field>

        <Field label="Category" hint="optional">
          <input
            type="text"
            value={form.category}
            onChange={(e) => set({ category: e.target.value })}
            placeholder="e.g. Reels, Ads, Brand Films"
            className={inputCls}
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Display Order">
            <input
              type="number"
              value={form.display_order}
              onChange={(e) => set({ display_order: e.target.value })}
              className={inputCls}
              min={0}
            />
          </Field>

          <Field label="Pin to top">
            <button
              type="button"
              onClick={() => set({ is_pinned: !form.is_pinned })}
              className={`w-full h-[42px] rounded-xl border text-sm font-medium transition-all ${
                form.is_pinned
                  ? "border-[#53c926]/40 bg-[#53c926]/10 text-[#53c926]"
                  : "border-white/[0.08] bg-white/[0.03] text-white/40 hover:text-white hover:border-white/[0.15]"
              }`}
            >
              {form.is_pinned ? "📌 Pinned" : "Pin"}
            </button>
          </Field>
        </div>

        <button
          type="submit"
          disabled={saving || uploading}
          className="w-full rounded-xl bg-[#53c926] px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-[#61e02e] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin" width="14" height="14" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Saving...
            </span>
          ) : uploading ? (
            "Upload in progress..."
          ) : editingId ? (
            "Save Changes"
          ) : (
            "Create Video"
          )}
        </button>
      </form>
    </div>
  );
}
