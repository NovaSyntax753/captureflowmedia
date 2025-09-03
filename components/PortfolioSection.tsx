import { useState } from "react";

const videos = [
  { id: 1, src: "/videos/video1.mp4", poster: "/thumbnails/thumb1.jpg" },
  { id: 2, src: "/videos/video2.mp4", poster: "/thumbnails/thumb2.jpg" },
  { id: 3, src: "/videos/video3.mp4", poster: "/thumbnails/thumb3.jpg" },
  { id: 4, src: "/videos/video4.mp4", poster: "/thumbnails/thumb4.jpg" },
  { id: 5, src: "/videos/video5.mp4", poster: "/thumbnails/thumb5.jpg" },
  { id: 6, src: "/videos/video6.mp4", poster: "/thumbnails/thumb6.jpg" },
  { id: 7, src: "/videos/video7.mp4", poster: "/thumbnails/thumb7.jpg" },
  { id: 8, src: "/videos/video8.mp4", poster: "/thumbnails/thumb8.jpg" },
  { id: 9, src: "/videos/video9.mp4", poster: "/thumbnails/thumb9.jpg" },
  { id: 10, src: "/videos/video10.mp4", poster: "/thumbnails/thumb10.jpg" },
  // add as many as you like
];

export default function PortfolioSection() {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount((prev) => prev + 6); // show 6 more each click
  };

  return (
    <section className="w-full  text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2  h-full sm:grid-cols-3 md:grid-cols-4 gap-6">
        {videos.slice(0, visibleCount).map((video) => (
          <video
            key={video.id}
            src={video.src}
            poster={video.poster}
            controls
            className="rounded-xl shadow-lg bg-blue-400 min-h-[500px] w-full"
          />
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
