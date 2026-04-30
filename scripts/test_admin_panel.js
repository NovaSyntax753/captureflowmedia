
const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');
const envRaw = fs.readFileSync(envPath, 'utf8');
const env = {};
envRaw.split(/\r?\n/).forEach(line => {
  const m = line.match(/^([^=\s]+)=(.*)$/);
  if (m) env[m[1]] = m[2];
});

const port = Number(process.env.PORT || 3000);
const base = `http://localhost:${port}`;

async function run() {
  try {
    const password = env.ADMIN_PASSWORD;
    if (!password) {
      console.error('ADMIN_PASSWORD not set in .env.local');
      process.exit(1);
    }

    console.log('Logging in...');
    let res = await fetch(`${base}/api/admin/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    console.log('Auth HTTP', res.status, res.statusText);
    const authJson = await res.json().catch(() => null);
    console.log('Auth response:', authJson);

    const token = authJson?.token;
    if (!token) {
      console.error('Login failed; cannot continue admin tests');
      process.exit(1);
    }

    console.log('Listing videos...');
    res = await fetch(`${base}/api/admin/videos`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('List HTTP', res.status, res.statusText);
    const initialVideos = await res.json();
    console.log('Initial count:', Array.isArray(initialVideos) ? initialVideos.length : 'n/a');

    const pinnedTarget = Array.isArray(initialVideos) ? initialVideos.find((video) => video.title === 'Video 16.1') : null;
    if (!pinnedTarget?.id) {
      throw new Error('Could not find seeded video to pin');
    }

    console.log('Pinning a seeded video...');
    res = await fetch(`${base}/api/admin/videos/${pinnedTarget.id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: pinnedTarget.title,
        video_url: pinnedTarget.video_url,
        description: pinnedTarget.description,
        thumbnail_url: pinnedTarget.thumbnail_url,
        category: pinnedTarget.category,
        is_pinned: true,
        display_order: 1,
      }),
    });
    console.log('Pin HTTP', res.status, res.statusText);
    const pinnedVideo = await res.json();
    console.log('Pinned:', pinnedVideo?.title, pinnedVideo?.is_pinned);

    const uniqueSuffix = Date.now();
    const createPayload = {
      title: `Seed test video ${uniqueSuffix}`,
      video_url: '/test.mp4',
      description: 'created by test script',
      thumbnail_url: null,
      category: 'Work',
      is_pinned: false,
      display_order: 999,
    };

    console.log('Creating a video...');
    res = await fetch(`${base}/api/admin/videos`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(createPayload),
    });
    console.log('Create HTTP', res.status, res.statusText);
    const createdVideo = await res.json();
    console.log('Created ID:', createdVideo?.id);

    if (!createdVideo?.id) {
      throw new Error('Create did not return a video id');
    }

    console.log('Updating the video to pinned...');
    res = await fetch(`${base}/api/admin/videos/${createdVideo.id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...createPayload,
        title: `${createPayload.title} updated`,
        description: 'updated by test script',
        is_pinned: true,
        display_order: 1,
      }),
    });
    console.log('Update HTTP', res.status, res.statusText);
    const updatedVideo = await res.json();
    console.log('Updated title:', updatedVideo?.title, 'Pinned:', updatedVideo?.is_pinned);

    console.log('Re-listing videos after update...');
    res = await fetch(`${base}/api/admin/videos`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const afterUpdateVideos = await res.json();
    console.log('Post-update count:', Array.isArray(afterUpdateVideos) ? afterUpdateVideos.length : 'n/a');

    console.log('Deleting the test video...');
    res = await fetch(`${base}/api/admin/videos/${createdVideo.id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('Delete HTTP', res.status, res.statusText);
    console.log('Delete body:', await res.text());

    console.log('Verifying deletion...');
    res = await fetch(`${base}/api/admin/videos`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const finalVideos = await res.json();
    const stillExists = Array.isArray(finalVideos) && finalVideos.some((video) => video.id === createdVideo.id);
    console.log('Final count:', Array.isArray(finalVideos) ? finalVideos.length : 'n/a');
    console.log('Test video still exists:', stillExists);

    console.log('Restoring pinned video to unpinned state...');
    await fetch(`${base}/api/admin/videos/${pinnedTarget.id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: pinnedTarget.title,
        video_url: pinnedTarget.video_url,
        description: pinnedTarget.description,
        thumbnail_url: pinnedTarget.thumbnail_url,
        category: pinnedTarget.category,
        is_pinned: false,
        display_order: pinnedTarget.display_order,
      }),
    });

    console.log('Done.');
  } catch (err) {
    console.error('Test error:', err);
  }
}

run();
