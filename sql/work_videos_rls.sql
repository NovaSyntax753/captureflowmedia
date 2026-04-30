-- Harden `work_videos` with RLS while keeping public read access.
-- Run this in the Supabase SQL editor after the table exists.

alter table public.work_videos enable row level security;

drop policy if exists "Public can read work videos" on public.work_videos;
create policy "Public can read work videos"
on public.work_videos
for select
to anon
using (true);

-- Service role bypasses RLS automatically, so no insert/update/delete policy is needed.
-- Admin API routes should use SUPABASE_SERVICE_ROLE_KEY on the server.
