-- Migration: Create long_form_videos table
-- Run this in your Supabase SQL editor

create table if not exists long_form_videos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  youtube_url text not null,
  thumbnail_url text,
  display_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table long_form_videos enable row level security;

-- Allow service role full access (used by admin API routes)
create policy "Service role full access to long_form_videos"
  on long_form_videos
  for all
  using (true)
  with check (true);
