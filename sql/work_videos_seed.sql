-- Create table for work_videos (run in Supabase SQL editor)
create table if not exists public.work_videos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  video_url text not null,
  thumbnail_url text,
  category text,
  is_pinned boolean default false,
  display_order integer default 0,
  created_at timestamptz default now()
);

-- Optional: grant anon select (and insert/update/delete for admin service role should be handled via RLS)
-- grant select on public.work_videos to anon;

-- Seed rows (based on current fallbackVideos in the app)
insert into public.work_videos (title, description, video_url, thumbnail_url, category, is_pinned, display_order)
values
  ('Video 16.1', null, '/video16.1.mp4', null, 'Work', false, 1),
  ('Video 15', null, '/video15.mp4', null, 'Work', false, 2),
  ('Video 14.1', null, '/video14.1.mp4', null, 'Work', false, 3),
  ('Video 2', null, '/video2.mp4', null, 'Work', false, 4),
  ('Video 3', null, '/video3.mp4', null, 'Work', false, 5),
  ('Video 4', null, '/video4.mp4', null, 'Work', false, 6),
  ('Video 5', null, '/video5.mp4', null, 'Work', false, 7),
  ('Video 6', null, '/video6.mp4', null, 'Work', false, 8),
  ('Video 7', null, '/video7.mp4', null, 'Work', false, 9),
  ('Video 9', null, '/video9.mp4', null, 'Work', false, 10),
  ('Video 10', null, '/video10.mp4', null, 'Work', false, 11),
  ('Video 11', null, '/video11.mp4', null, 'Work', false, 12),
  ('Video 12', null, '/video12.mp4', null, 'Work', false, 13),
  ('Video 13', null, '/video13.mp4', null, 'Work', false, 14)
;

-- If you have RLS policies enabled, either temporarily disable them for seeding or add a policy to allow inserts from the SQL editor or the anon key.
