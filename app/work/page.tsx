"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DiagonalImageColumns from "@/components/DiagonalImageColumns";
import StatsSection from "@/components/StatsSection";
import type { WorkVideo } from "@/app/admin/work/types";

const fallbackVideos: WorkVideo[] = [
  { id: "8", title: "Video 16.1", description: null, video_url: "/video16.1.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 1, created_at: "" },
  { id: "1", title: "Video 15", description: null, video_url: "/video15.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 2, created_at: "" },
  { id: "14", title: "Video 14.1", description: null, video_url: "/video14.1.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 3, created_at: "" },
  { id: "2", title: "Video 2", description: null, video_url: "/video2.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 4, created_at: "" },
  { id: "3", title: "Video 3", description: null, video_url: "/video3.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 5, created_at: "" },
  { id: "4", title: "Video 4", description: null, video_url: "/video4.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 6, created_at: "" },
  { id: "5", title: "Video 5", description: null, video_url: "/video5.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 7, created_at: "" },
  { id: "6", title: "Video 6", description: null, video_url: "/video6.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 8, created_at: "" },
  { id: "7", title: "Video 7", description: null, video_url: "/video7.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 9, created_at: "" },
  { id: "9", title: "Video 9", description: null, video_url: "/video9.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 10, created_at: "" },
  { id: "10", title: "Video 10", description: null, video_url: "/video10.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 11, created_at: "" },
  { id: "11", title: "Video 11", description: null, video_url: "/video11.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 12, created_at: "" },
  { id: "12", title: "Video 12", description: null, video_url: "/video12.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 13, created_at: "" },
  { id: "13", title: "Video 13", description: null, video_url: "/video13.mp4", thumbnail_url: null, category: "Work", is_pinned: false, display_order: 14, created_at: "" },
];

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const workVideoSelect = "id,title,description,video_url,thumbnail_url,category,is_pinned,display_order,created_at";

function normalizeWorkVideo(video: Partial<WorkVideo> & { [key: string]: unknown }): WorkVideo {
  return {
    id: typeof video.id === "string" ? video.id : String(video.id ?? crypto.randomUUID()),
    title: typeof video.title === "string" ? video.title : "Untitled video",
    description: typeof video.description === "string" ? video.description : null,
    video_url: typeof video.video_url === "string" ? video.video_url : "",
    thumbnail_url: typeof video.thumbnail_url === "string" ? video.thumbnail_url : null,
    category: typeof video.category === "string" ? video.category : null,
    is_pinned: Boolean(video.is_pinned),
    display_order: Number(video.display_order ?? 0),
    created_at: typeof video.created_at === "string" ? video.created_at : "",
  };
}

function extractYouTubeVideoId(url: string) {
  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^www\./, "");
    const pathname = parsedUrl.pathname.replace(/\/+$/, "");

    if (host === "youtu.be") {
      const videoId = pathname.split("/").filter(Boolean)[0];
      return videoId || null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (pathname === "/watch") {
        return parsedUrl.searchParams.get("v");
      }

      if (pathname.startsWith("/shorts/")) {
        return pathname.split("/")[2] || null;
      }

      if (pathname.startsWith("/embed/")) {
        return pathname.split("/")[2] || null;
      }
    }
  } catch {
    return null;
  }

  return null;
}

function isYouTubeShortsUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^www\./, "");
    return (host === "youtube.com" || host === "m.youtube.com") && parsedUrl.pathname.startsWith("/shorts/");
  } catch {
    return false;
  }
}

function toYouTubeEmbedUrl(url: string) {
  const videoId = extractYouTubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}

function toYouTubeThumbnailUrl(url: string) {
  const videoId = extractYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
}

async function fetchWorkVideos(signal?: AbortSignal) {
  if (!supabaseUrl || !supabaseAnonKey) {
    return fallbackVideos;
  }

  const params = new URLSearchParams({
    select: workVideoSelect,
    order: "is_pinned.desc,display_order.asc,created_at.asc",
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/work_videos?${params.toString()}`, {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
    signal,
    cache: "no-store",
  });

  if (!response.ok) {
    return fallbackVideos;
  }

  const data = (await response.json()) as Array<Partial<WorkVideo> & { [key: string]: unknown }>;

  if (!Array.isArray(data) || data.length === 0) {
    return fallbackVideos;
  }

  return data.map(normalizeWorkVideo);
}

function isYouTubeEmbed(url: string) {
  return Boolean(toYouTubeEmbedUrl(url));
}

function PublicWorkGallery() {
  const [videos, setVideos] = useState<WorkVideo[]>(fallbackVideos);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const controller = new AbortController();

    const refreshVideos = async () => {
      const nextVideos = await fetchWorkVideos(controller.signal);
      setVideos(nextVideos);
    };

    void refreshVideos();

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "cfm_work_videos_updated") {
        void refreshVideos();
      }
    };

    const handleFocus = () => {
      void refreshVideos();
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("focus", handleFocus);

    return () => {
      controller.abort();
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handlePlay = (videoRef: HTMLVideoElement | null) => {
    if (videoRef) {
      void videoRef.play().catch(() => undefined);
    }
  };

  const handlePause = (videoRef: HTMLVideoElement | null) => {
    if (videoRef) {
      videoRef.pause();
      videoRef.currentTime = 0;
    }
  };

  return (
    <section className="w-full text-white py-12 px-2 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {videos.slice(0, visibleCount).map((video) => (
          <div key={video.id} className="rounded-xl shadow-lg bg-black overflow-hidden">
            {isYouTubeShortsUrl(video.video_url) ? (
              <a
                href={video.video_url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full overflow-hidden rounded-xl"
                aria-label={`Open ${video.title} on YouTube`}
                style={{ aspectRatio: "9/16" }}
              >
                <img
                  src={video.thumbnail_url || toYouTubeThumbnailUrl(video.video_url) || undefined}
                  alt={video.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                    Watch on YouTube
                  </div>
                </div>
              </a>
            ) : isYouTubeEmbed(video.video_url) ? (
              <iframe
                src={toYouTubeEmbedUrl(video.video_url) ?? video.video_url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-xl aspect-auto object-contain cursor-pointer w-full"
                loading="lazy"
                style={{ aspectRatio: "9/16" }}
              />
            ) : (
              <video
                onLoad={(event) => event.currentTarget.pause()}
                src={video.video_url}
                poster={video.thumbnail_url || undefined}
                muted
                className="rounded-xl aspect-auto object-contain cursor-pointer w-full"
                onMouseEnter={(event) => handlePlay(event.currentTarget)}
                onMouseLeave={(event) => handlePause(event.currentTarget)}
                onTouchStart={(event) => handlePlay(event.currentTarget)}
                onTouchEnd={(event) => handlePause(event.currentTarget)}
              />
            )}
          </div>
        ))}
      </div>

      {visibleCount < videos.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMore}
            className="px-6 py-2 border bg-black border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}

const page = () => {
  return (
    <div className="items-center mt-20 bg-black text-white justify-center flex flex-col">

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <StatsSection />
      </motion.div>

      {/* Portfolio Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <PublicWorkGallery />
      </motion.div>

      {/* Diagonal Image Columns */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <DiagonalImageColumns />
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-4 py-10"
      >
        <button className="bg-white font-bold text-xl text-black px-6 py-3 rounded-full mt-8 hover:bg-gray-800 transition-colors">
          Work with us
        </button>
      </motion.div>
      
    </div>
  );
};

export default page;
