import React from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import type { AudioPlayerState } from '../hooks/useAudioPlayer';
import { birthdayConfig } from '../content/birthdayConfig';

interface FloatingAudioBarProps {
  player: AudioPlayerState;
  isReducedMotion: boolean;
  onNavigateToMusic: () => void;
}

export const FloatingAudioBar: React.FC<FloatingAudioBarProps> = ({
  player,
  isReducedMotion,
  onNavigateToMusic,
}) => {
  if (player.hasError) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 90,
      }}
    >
      <div
        className="glass-pill"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 16px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.7), 0 0 20px rgba(245, 223, 168, 0.15)',
        }}
      >
        {/* Rotating Mini Vinyl */}
        <button
          onClick={onNavigateToMusic}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: 0,
          }}
          title="Jump to music player"
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #ffe9b8 0%, #12030d 85%)',
              border: '1px solid rgba(245, 223, 168, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className={player.isPlaying && !isReducedMotion ? 'animate-vinyl-spin' : 'animate-vinyl-spin-paused'}
          >
            <Music size={14} color="#12030d" />
          </div>
        </button>

        {/* Track Title */}
        <div
          onClick={onNavigateToMusic}
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
          title="Jump to music player"
        >
          <span
            style={{
              fontSize: '0.86rem',
              fontWeight: 600,
              color: 'var(--gold-champagne)',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.2,
            }}
          >
            {birthdayConfig.specialSong.title}
          </span>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            {player.isPlaying ? 'Playing • Munbe Vaa' : 'Soundtrack Paused'}
          </span>
        </div>

        {/* Play / Pause Toggle */}
        <button
          onClick={player.togglePlay}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'rgba(245, 223, 168, 0.2)',
            border: '1px solid rgba(245, 223, 168, 0.35)',
            color: 'var(--ivory-text)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          aria-label={player.isPlaying ? 'Pause music' : 'Play music'}
          id="floating-audio-play-btn"
        >
          {player.isPlaying ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" style={{ marginLeft: '2px' }} />}
        </button>

        {/* Mute Toggle */}
        <button
          onClick={player.toggleMute}
          style={{
            background: 'none',
            border: 'none',
            color: player.isMuted ? 'var(--rose-soft)' : 'var(--text-muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
          }}
          aria-label={player.isMuted ? 'Unmute' : 'Mute'}
        >
          {player.isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </div>
  );
};
