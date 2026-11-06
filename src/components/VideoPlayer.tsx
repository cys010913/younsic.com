
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { getEmbedUrl, getImageUrl } from '../lib/drive';

interface VideoPlayerProps {
  url: string;
  title: string;
  thumbnailSize?: number;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title, thumbnailSize = 1280 }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const isDirectVideo = url?.toLowerCase().endsWith('.mp4');
  const thumbnailUrl = getImageUrl(url, thumbnailSize);
  const embedUrl = getEmbedUrl(url);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Use standard video tag for direct .mp4 files
  const renderDirectVideo = (autoPlay: boolean) => (
    <video 
      src={url} 
      className="w-full h-full object-cover bg-black"
      controls={isPlaying || !isMobile}
      autoPlay={autoPlay}
      muted={!isPlaying}
      loop
      playsInline
    />
  );

  const renderEmbedVideo = (autoPlay: boolean) => {
    const isYouTube = embedUrl.includes('youtube.com') || embedUrl.includes('youtu.be');
    const finalUrl = autoPlay 
      ? `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1${isYouTube ? '&mute=1&playsinline=1' : ''}` 
      : embedUrl;

    return (
      <div className="absolute inset-0 w-full h-full bg-black overflow-hidden flex items-center justify-center">
        <iframe 
          src={finalUrl}
          className="w-full h-full border-0 absolute inset-0 bg-black z-10"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
        <div className="text-white/20 text-[10px] items-center gap-2 flex">
          loading video...
        </div>
      </div>
    );
  };

  // Desktop: High performance direct access
  if (!isMobile) {
    return (
      <div className="w-full h-full bg-black relative">
        {isDirectVideo ? renderDirectVideo(true) : renderEmbedVideo(false)}
      </div>
    );
  }

  // Mobile: Consistent Tap-to-Play pattern
  return (
    <div className="w-full h-full relative bg-black overflow-hidden group">
      {isPlaying ? (
        <div className="absolute inset-0 w-full h-full bg-black z-20">
          {isDirectVideo ? renderDirectVideo(true) : renderEmbedVideo(true)}
        </div>
      ) : (
        <div 
          className="absolute inset-0 w-full h-full cursor-pointer"
          onClick={handlePlay}
        >
          <img 
            src={thumbnailUrl} 
            alt={title} 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl transition-transform active:scale-90">
              <Play size={28} className="text-white fill-white ml-1" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
