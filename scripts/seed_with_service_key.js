const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');
let envRaw = '';
try {
  envRaw = fs.readFileSync(envPath, 'utf8');
} catch (e) {
  // ignore
}

const env = {};
envRaw.split(/\r?\n/).forEach(line => {
  const m = line.match(/^([^=\s]+)=(.*)$/);
  if (m) env[m[1]] = m[2];
});

const url = (env.SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '').replace(/\/$/, '');
const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY or SUPABASE_URL in .env.local');
  process.exit(1);
}

const entries = [
  { title: 'Video 16.1', description: null, video_url: '/video16.1.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 1 },
  { title: 'Video 15', description: null, video_url: '/video15.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 2 },
  { title: 'Video 14.1', description: null, video_url: '/video14.1.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 3 },
  { title: 'Video 2', description: null, video_url: '/video2.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 4 },
  { title: 'Video 3', description: null, video_url: '/video3.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 5 },
  { title: 'Video 4', description: null, video_url: '/video4.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 6 },
  { title: 'Video 5', description: null, video_url: '/video5.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 7 },
  { title: 'Video 6', description: null, video_url: '/video6.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 8 },
  { title: 'Video 7', description: null, video_url: '/video7.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 9 },
  { title: 'Video 9', description: null, video_url: '/video9.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 10 },
  { title: 'Video 10', description: null, video_url: '/video10.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 11 },
  { title: 'Video 11', description: null, video_url: '/video11.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 12 },
  { title: 'Video 12', description: null, video_url: '/video12.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 13 },
  { title: 'Video 13', description: null, video_url: '/video13.mp4', thumbnail_url: null, category: 'Work', is_pinned: false, display_order: 14 },
];

const endpoint = `${url}/rest/v1/work_videos`;

(async () => {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify(entries),
    });

    const text = await res.text();
    console.log('HTTP', res.status, res.statusText);
    try {
      const json = JSON.parse(text);
      console.log('Inserted:', Array.isArray(json) ? json.length : 1);
      console.log(JSON.stringify(json, null, 2));
    } catch (err) {
      console.log('Response:', text.slice(0, 2000));
    }
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();
