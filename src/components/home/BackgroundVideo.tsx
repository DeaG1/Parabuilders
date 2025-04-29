"use client";

import { useEffect, useRef } from "react";

interface BackgroundVideoProps {
  src: string;
  poster?: string;
  className?: string;
  themeKey?: string;
}

export default function BackgroundVideo({ src, poster, className = "", themeKey }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let attempts = 0;
    const maxRetries = 10;
    const retryDelay = 2000;

    const tryPlay = () => {
      if (attempts >= maxRetries) {
        return;
      }

      video.play()
        .then(() => {
          video.controls = false;
        })
        .catch((error) => {
          video.controls = false;
          attempts++;
          setTimeout(tryPlay, retryDelay);
        });
    };

    tryPlay();
  }, []);

  return (
    <video
      key={themeKey}
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}