import { useState, useEffect, useRef, useCallback } from 'react';
import { birthdayConfig } from '../content/birthdayConfig';

export interface AudioPlayerState {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  isLoaded: boolean;
  hasError: boolean;
  errorMessage: string | null;
  togglePlay: () => Promise<void>;
  toggleMute: () => void;
  setVolume: (val: number) => void;
  seek: (seconds: number) => void;
  startExperienceAudio: () => Promise<void>;
}

export function useAudioPlayer(): AudioPlayerState {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(0.75);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Instantiate audio element with sources
    const primarySrc = birthdayConfig.specialSong.source;
    const fallbackSrc = birthdayConfig.specialSong.fallbackSource;
    
    const audio = new Audio();
    audio.preload = 'metadata';
    audio.volume = 0.75;
    audio.src = primarySrc;
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setIsLoaded(true);
      setHasError(false);
      setErrorMessage(null);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handleError = () => {
      // Try fallback if primary fails
      if (audio.src !== fallbackSrc && fallbackSrc && fallbackSrc !== primarySrc) {
        audio.src = fallbackSrc;
        audio.load();
      } else {
        setHasError(true);
        setIsPlaying(false);
        setErrorMessage("Audio track unavailable. You can easily add 'Munbe Vaa.mp3' to /public/audio/");
      }
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.pause();
    };
  }, []);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Audio play blocked by browser:", err);
        setIsPlaying(false);
      }
    }
  }, [isPlaying]);

  const startExperienceAudio = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !birthdayConfig.musicEnabled) return;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      // User gesture restrictions or missing file handled gracefully
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextMuted = !isMuted;
    audio.muted = nextMuted;
    setIsMuted(nextMuted);
  }, [isMuted]);

  const setVolume = useCallback((val: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const clamped = Math.max(0, Math.min(1, val));
    audio.volume = clamped;
    setVolumeState(clamped);
    if (clamped === 0) {
      audio.muted = true;
      setIsMuted(true);
    } else if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    }
  }, [isMuted]);

  const seek = useCallback((seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = seconds;
    setCurrentTime(seconds);
  }, []);

  return {
    isPlaying,
    isMuted,
    volume,
    currentTime,
    duration,
    isLoaded,
    hasError,
    errorMessage,
    togglePlay,
    toggleMute,
    setVolume,
    seek,
    startExperienceAudio
  };
}
