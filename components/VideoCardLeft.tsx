"use client";

import React from "react";

type VideoPlayerProps = {
  src: string;
  className?: string;
};

const VideoCardLeft: React.FC<VideoPlayerProps> = ({ src, className }) => {
  return (
    <div
      className={`overflow-hidden min-w-[280px] max-h-[500px] rounded-[100px] rounded-br-none`}
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
