"use client";

import type { FormEvent } from "react";

export type LongFormFormState = {
  title: string;
  description: string;
  youtube_url: string;
  thumbnail_url: string;
  display_order: string;
};

type Props = {
  form: LongFormFormState;
  editingId: string | null;
  saving: boolean;
  onChange: (form: LongFormFormState) => void;
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

export default function LongFormVideoForm({
  form,
  editingId,
  saving,
  onChange,
  onSubmit,
  onReset,
}: Props) {
  const set = (patch: Partial<LongFormFormState>) => onChange({ ...form, ...patch });

  return (
    <div className="rounded-2xl border border-white/[0.07] bg-[#0e0e0e] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#53c926] font-semibold">
            {editingId ? "Editing" : "New Entry"}
          </p>
          <h2 className="mt-0.5 text-base font-semibold text-white">
            {editingId ? "Update video" : "Add a long-form video"}
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
            placeholder="e.g. Behind the Scenes — Campaign 2025"
            className={inputCls}
            required
          />
        </Field>

        <Field label="YouTube URL" hint="required — full URL or youtu.be link">
          <input
            type="text"
            value={form.youtube_url}
            onChange={(e) => set({ youtube_url: e.target.value })}
            placeholder="https://youtube.com/watch?v=... or https://youtu.be/..."
            className={inputCls}
            required
          />
          <p className="text-[10px] text-white/25 mt-1">
            The thumbnail will be auto-generated from YouTube if left blank below.
          </p>
        </Field>

        <Field label="Description" hint="optional">
          <textarea
            value={form.description}
            onChange={(e) => set({ description: e.target.value })}
            rows={3}
            placeholder="What is this video about?"
            className={inputCls + " resize-none"}
          />
        </Field>

        <Field label="Custom Thumbnail URL" hint="optional — overrides YouTube auto-thumbnail">
          <input
            type="text"
            value={form.thumbnail_url}
            onChange={(e) => set({ thumbnail_url: e.target.value })}
            placeholder="https://..."
            className={inputCls}
          />
        </Field>

        <Field label="Display Order">
          <input
            type="number"
            value={form.display_order}
            onChange={(e) => set({ display_order: e.target.value })}
            className={inputCls}
            min={0}
          />
        </Field>

        <button
          type="submit"
          disabled={saving}
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
          ) : editingId ? (
            "Save Changes"
          ) : (
            "Add Video"
          )}
        </button>
      </form>
    </div>
  );
}
