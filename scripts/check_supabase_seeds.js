const fs = require('fs');
const path = require('path');

// Load .env.local manually so this script doesn't require extra deps
const envPath = path.join(process.cwd(), '.env.local');
let envRaw = '';
try {
  envRaw = fs.readFileSync(envPath, 'utf8');
} catch (e) {
  // proceed; envRaw may be empty
}

const env = {};
envRaw.split(/\r?\n/).forEach(line => {
  const m = line.match(/^([^=\s]+)=(.*)$/);
  if (m) env[m[1]] = m[2];
});

const url = env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
  process.exit(1);
}

const endpoint = `${url.replace(/\/$/, '')}/rest/v1/work_videos?select=*&order=is_pinned.desc,display_order.asc,created_at.asc`;

(async () => {
  try {
    const res = await fetch(endpoint, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        Accept: 'application/json',
      },
    });

    console.log('HTTP', res.status, res.statusText);

    const text = await res.text();
    try {
      const json = JSON.parse(text);
      console.log('Result count:', Array.isArray(json) ? json.length : 'N/A');
      console.log(JSON.stringify(json, null, 2));
    } catch (err) {
      console.log('Non-JSON response:', text.slice(0, 1000));
    }
  } catch (err) {
    console.error('Fetch error:', err);
    process.exit(1);
  }
})();
