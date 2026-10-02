import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

/**
 * Mobile Phone Mockup Frame for parent video testimonials.
 * Features a CSS-drawn bezel, camera notch, custom play/pause overlay,
 * and coordinates single-active-video playback.
 */
export function PhoneFrame({
  src,
  poster,
  title,
  parentName,
  wardInfo,
  isActive = false,
  onPlayRequest,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isActive && videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      if (onPlayRequest) onPlayRequest();
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px] rounded-[44px] p-3 bg-zinc-900 border-4 border-zinc-700 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
      data-cursor="Play"
    >
      {/* Dynamic island / Speaker notch */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-end px-3">
        <div className="w-2 h-2 rounded-full bg-zinc-800" />
      </div>

      {/* Screen area */}
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[34px] bg-black">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="none"
          playsInline
          className="w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          aria-label={title}
        />

        {/* Play/Pause custom overlay */}
        <button
          type="button"
          onClick={handleTogglePlay}
          aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
          className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-black/30 group text-left cursor-pointer"
        >
          <div className="pt-6">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/80 text-white font-heading text-[10px] uppercase font-bold tracking-wider">
              Parent Review
            </span>
          </div>

          {/* Central play button */}
          <div className="self-center my-auto w-14 h-14 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 active:scale-95">
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-1" />
            )}
          </div>

          {/* Bottom text metadata */}
          <div className="text-white">
            <h4 className="font-heading font-bold text-sm tracking-wide leading-tight">
              {parentName}
            </h4>
            <p className="font-body text-xs text-zinc-300">{wardInfo}</p>
          </div>
        </button>
      </div>
    </div>
  );
}
