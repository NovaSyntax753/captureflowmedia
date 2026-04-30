# Supabase setup and seeding

Steps to prepare the `work_videos` table and wire environment variables.

1) Create the table and seed rows (recommended: use Supabase SQL editor)

- Open your Supabase project → SQL Editor → New query and run the SQL in `sql/work_videos_seed.sql`.

2) If you prefer seeding via scripts in this repo

- Add the service role key to `.env.local` (DO NOT commit this key):

  SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
  SUPABASE_URL=https://your-project.supabase.co

- Run:

```bash
npm run seed:service
```

3) If you only have the anon key and RLS is enabled

- Either run the SQL in the Supabase SQL editor, or temporarily allow inserts via a policy. To seed from the anon key you must temporarily disable or relax RLS for `work_videos`.

4) Env variables used by this app

- `NEXT_PUBLIC_SUPABASE_URL` — public project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — anon key used by public UI
- `SUPABASE_URL` and `SUPABASE_ANON_KEY` — optional server fallbacks
- `ADMIN_PASSWORD` — admin password for `/api/admin/*` routes
- `SUPABASE_SERVICE_ROLE_KEY` — server-only; required for hardened admin CRUD in production

5) Hardening recommendations (do this before production)

- Enable Row-Level Security (RLS) on `work_videos`.
- Create RLS policies that:
  - Allow `select` for the `anon` role.
- Move admin actions to server-only endpoints that use `SUPABASE_SERVICE_ROLE_KEY` (do not expose this key to the browser).

Suggested SQL is in `sql/work_videos_rls.sql`.
