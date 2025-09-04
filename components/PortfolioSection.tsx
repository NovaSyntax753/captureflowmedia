import { useState } from "react";
// import video1 from "../assets/video1.mp4";
const videos = [
  { id: 1, src: "/video1.mp4" },
  // { id: 2, src: "/videos/video2.mp4" },
  // { id: 3, src: "/videos/video3.mp4" },
  // { id: 4, src: "/videos/video4.mp4" },
  // { id: 5, src: "/videos/video5.mp4" },
  // { id: 6, src: "/videos/video6.mp4" },
  // { id: 7, src: "/videos/video7.mp4" },
  // { id: 8, src: "/videos/video8.mp4" },
  // { id: 9, src: "/videos/video9.mp4" },
  // { id: 10, src: "/videos/video10.mp4" },
];

export default function PortfolioSection() {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  // Play/pause video on hover (desktop) or tap (mobile)
  const handlePlay = (videoRef: HTMLVideoElement | null) => {
    if (videoRef) videoRef.play();
  };
  const handlePause = (videoRef: HTMLVideoElement | null) => {
    if (videoRef) videoRef.pause();
    if (videoRef) videoRef.currentTime = 0;
  };

  return (
    <section className="w-full text-white py-12 px-2 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {videos.slice(0, visibleCount).map((video) => (
          <div
            key={video.id}
            className="rounded-xl shadow-lg bg-black overflow-hidden"
          >
            <video
              src={video.src}
              muted
              className="rounded-xl aspect-auto object-contain cursor-pointer"
              // Desktop: play/pause on hover
              onMouseEnter={e => handlePlay(e.currentTarget)}
              onMouseLeave={e => handlePause(e.currentTarget)}
              // Mobile: play/pause on touch
              onTouchStart={e => handlePlay(e.currentTarget)}
              onTouchEnd={e => handlePause(e.currentTarget)}
            />
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
