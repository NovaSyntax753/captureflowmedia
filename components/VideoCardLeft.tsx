"use client";

import React from "react";

type VideoPlayerProps = {
  src: string;
  className?: string;
};

const VideoCardLeft: React.FC<VideoPlayerProps> = ({ src, className }) => {
  return (
    <div
      className={`overflow-hidden min-w-[280px] max-h-[500px]  h-[500px] rounded-2xl hover:scale-105 transition-transform duration-300`}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
};

export default VideoCardLeft;
