
import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { Channel } from '../../types';
import { useForceLandscape } from '../../hooks/useForceLandscape';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Heart, Loader2 } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useNavigate } from 'react-router-dom';
import { CastButton } from '../cast/CastButton';

interface VideoPlayerProps {
  channel: Channel;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ channel }) => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { lock, unlock } = useForceLandscape();
  const { toggleFavorite, favorites, addToHistory } = useStore();
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const controlsTimeout = useRef<number | null>(null);

  const isFav = favorites.includes(channel.id);
  const isYouTube = channel.source === 'youtube';

  useEffect(() => {
    lock();
    addToHistory(channel.id);
    
    if (isYouTube) {
      setIsBuffering(false);
      setIsPlaying(true);
      return;
    }

    let hls: Hls | null = null;
    const video = videoRef.current;

    if (!video) return;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 90,
      });

      hls.loadSource(channel.url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) setError('Erro no stream HLS.');
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = channel.url;
      video.play().catch(() => {});
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleWaiting = () => setIsBuffering(true);
    const handlePlaying = () => setIsBuffering(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('playing', handlePlaying);

    return () => {
      unlock();
      if (hls) hls.destroy();
    };
  }, [channel, isYouTube, lock, unlock, addToHistory]);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    controlsTimeout.current = window.setTimeout(() => setShowControls(false), 3000);
  };

  return (
    <div 
      ref={containerRef}
      className="video-player-container relative w-full h-full bg-black group overflow-hidden"
      onMouseMove={handleMouseMove}
      onClick={handleMouseMove}
    >
      {isYouTube ? (
        <iframe
          src={`https://www.youtube.com/embed/${channel.ytId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
          className="w-full h-full border-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <video ref={videoRef} className="w-full h-full object-contain" playsInline />
      )}

      {isBuffering && !isYouTube && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 z-10">
          <Loader2 className="animate-spin text-accent-primary" size={64} />
        </div>
      )}

      {/* Controls */}
      <div className={`absolute inset-0 z-20 flex flex-col justify-between pointer-events-none transition-opacity duration-500 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div className="glass flex justify-between items-center p-6 pointer-events-auto">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-full">
              <X size={24} />
            </button>
            <div>
              <h2 className="text-white font-bold">{channel.name}</h2>
              <p className="text-accent-live text-xs">AO VIVO</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CastButton variant="player" channel={channel} />
            <button onClick={() => toggleFavorite(channel.id)} className={`p-2 rounded-full ${isFav ? 'text-accent-live' : 'text-white'}`}>
              <Heart fill={isFav ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
