"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const videos = [
  { id: 1, src: "/videos/video1.mp4", poster: "/thumbnails/thumb1.jpg" },
  { id: 2, src: "/videos/video2.mp4", poster: "/thumbnails/thumb2.jpg" },
  { id: 3, src: "/videos/video3.mp4", poster: "/thumbnails/thumb3.jpg" },
  { id: 4, src: "/videos/video4.mp4", poster: "/thumbnails/thumb4.jpg" },
  { id: 5, src: "/videos/video5.mp4", poster: "/thumbnails/thumb5.jpg" },
  { id: 6, src: "/videos/video6.mp4", poster: "/thumbnails/thumb6.jpg" },
];

export default function VideoCarousel() {
  return (
    <section className="w-full h-full py-10">
      <div className="max-w-7xl h-full mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          loop={true}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },  // tablets
            1024: { slidesPerView: 3.2 }, // desktops
            1280: { slidesPerView: 4.2 }, // large screens
          }}
          className="rounded-xl h-full "
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id} className="flex  align-middle flex-col justify-center  items-center p-2 min-h-[400px]">
              <video
                src={video.src}
                poster={video.poster}
                className="rounded-xl w-[400px] min-h-[300px] object-cover bg-black shadow-lg hover:scale-110 hover:rounded-xl cursor-pointer transition-transform duration-300"
                autoPlay
                loop
                muted
                playsInline
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
