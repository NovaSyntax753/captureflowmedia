"use client";

import React from "react";

type VideoPlayerProps = {
  src: string;
  className?: string;
};

const VideoCardLeft: React.FC<VideoPlayerProps> = ({ src, className }) => {
  return (
    <div
      className={`overflow-hidden rounded-[100px] rounded-br-none`}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`object-cover ${className}`}
      />
    </div>
  );
};

export default VideoCardLeft;
