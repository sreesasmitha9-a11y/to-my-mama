import React from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause, Volume2, VolumeX, AlertCircle, Disc } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';
import type { AudioPlayerState } from '../hooks/useAudioPlayer';

interface MusicLoungeProps {
  player: AudioPlayerState;
  isReducedMotion: boolean;
}

export const MusicLounge: React.FC<MusicLoungeProps> = ({ player, isReducedMotion }) => {
  const { specialSong } = birthdayConfig;

  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    player.seek(parseFloat(e.target.value));
  };

  return (
    <section
      id="chapter-music"
      style={{
        padding: '110px 24px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="section-container" style={{ maxWidth: '880px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              <Music size={14} />
              <span>OUR SPECIAL SONG</span>
            </span>
          </motion.div>

          <motion.h2
            initial={isReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif text-gold-gradient"
            style={{
              fontSize: 'clamp(2.1rem, 5vw, 3.4rem)',
              fontWeight: 600,
              lineHeight: 1.25,
            }}
          >
            A Little Song That Reminds Me of You
          </motion.h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--ivory-soft)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              marginTop: '12px',
            }}
          >
            "Some songs feel different when they remind you of someone special."
          </p>
        </div>

        {/* Sophisticated Music Player Card */}
        <motion.div
          initial={isReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="glass-panel"
          style={{
            padding: '40px 32px',
            background: 'linear-gradient(145deg, rgba(30, 8, 23, 0.9) 0%, rgba(14, 3, 11, 0.95) 100%)',
            border: '1px solid rgba(245, 223, 168, 0.25)',
          }}
        >
          {player.hasError ? (
            <div
              style={{
                padding: '24px',
                borderRadius: '12px',
                background: 'rgba(100, 20, 30, 0.35)',
                border: '1px solid rgba(230, 57, 98, 0.3)',
                textAlign: 'center',
                color: 'var(--ivory-text)',
              }}
            >
              <AlertCircle size={28} color="var(--rose-soft)" style={{ marginBottom: '10px' }} />
              <p style={{ fontWeight: 500, marginBottom: '6px' }}>Music Player Notice</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                {player.errorMessage || "Audio file not available in current environment. You can place 'Munbe Vaa.mp3' in /public/audio/."}
              </p>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '36px',
                alignItems: 'center',
              }}
            >
              {/* Vinyl Player Representation */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    position: 'relative',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #252525 0%, #111111 60%, #050505 100%)',
                    border: '4px solid rgba(245, 223, 168, 0.25)',
                    boxShadow: '0 12px 35px rgba(0,0,0,0.8), inset 0 0 15px rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className={player.isPlaying && !isReducedMotion ? 'animate-vinyl-spin' : 'animate-vinyl-spin-paused'}
                >
                  {/* Subtle Grooves */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: '20px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: '45px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  />

                  {/* Vinyl Label */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, #ffe9b8 0%, #e63962 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                    }}
                  >
                    <Disc size={26} color="#12030d" />
                  </div>
                </div>

                {/* Animated Waveform Visualizer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    gap: '4px',
                    height: '32px',
                    marginTop: '20px',
                  }}
                >
                  {[...Array(16)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={player.isPlaying && !isReducedMotion ? {
                        height: [
                          `${Math.sin(i * 0.5) * 16 + 10}px`,
                          `${Math.cos(i * 0.7) * 22 + 8}px`,
                          `${Math.sin(i * 0.9) * 18 + 10}px`
                        ]
                      } : { height: '6px' }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8 + (i % 4) * 0.2,
                        ease: 'easeInOut'
                      }}
                      style={{
                        width: '3.5px',
                        borderRadius: '2px',
                        background: 'linear-gradient(180deg, var(--gold-champagne) 0%, var(--crimson-accent) 100%)',
                        opacity: player.isPlaying ? 0.9 : 0.35,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Controls and Song Info */}
              <div>
                <div style={{ marginBottom: '20px' }}>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '0.12em',
                      color: 'var(--rose-soft)',
                      textTransform: 'uppercase',
                    }}
                  >
                    SPECIAL DEDICATION
                  </span>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '2rem',
                      color: 'var(--gold-bright)',
                      fontWeight: 600,
                      marginTop: '4px',
                    }}
                  >
                    {specialSong.title}
                  </h3>
                  <p style={{ color: 'var(--ivory-soft)', fontSize: '0.92rem', opacity: 0.85 }}>
                    {specialSong.artist}
                  </p>
                </div>

                {/* Lyrics Excerpt */}
                <div
                  style={{
                    padding: '12px 16px',
                    background: 'rgba(245, 223, 168, 0.05)',
                    borderLeft: '2px solid var(--gold-champagne)',
                    borderRadius: '0 8px 8px 0',
                    marginBottom: '24px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '1rem',
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      color: 'var(--gold-champagne)',
                      marginBottom: '4px',
                    }}
                  >
                    "{specialSong.tamilExcerpt}"
                  </p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {specialSong.meaning}
                  </p>
                </div>

                {/* Progress Bar & Seek */}
                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="range"
                    min="0"
                    max={player.duration || 100}
                    value={player.currentTime || 0}
                    onChange={handleSeekChange}
                    style={{
                      width: '100%',
                      accentColor: 'var(--gold-champagne)',
                      cursor: 'pointer',
                    }}
                    aria-label="Audio progress slider"
                  />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      marginTop: '4px',
                    }}
                  >
                    <span>{formatTime(player.currentTime)}</span>
                    <span>{formatTime(player.duration)}</span>
                  </div>
                </div>

                {/* Main Player Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <button
                    onClick={player.togglePlay}
                    className="btn-primary-romance"
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      padding: 0,
                    }}
                    aria-label={player.isPlaying ? 'Pause song' : 'Play song'}
                    id="lounge-play-pause-btn"
                  >
                    {player.isPlaying ? <Pause size={22} fill="#12030d" /> : <Play size={22} fill="#12030d" style={{ marginLeft: '3px' }} />}
                  </button>

                  {/* Volume Control */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, maxWidth: '180px' }}>
                    <button
                      onClick={player.toggleMute}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--ivory-soft)',
                        cursor: 'pointer',
                        display: 'flex',
                        padding: '4px',
                      }}
                      aria-label={player.isMuted ? 'Unmute' : 'Mute'}
                    >
                      {player.isMuted || player.volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={player.isMuted ? 0 : player.volume}
                      onChange={(e) => player.setVolume(parseFloat(e.target.value))}
                      style={{
                        width: '100%',
                        accentColor: 'var(--gold-champagne)',
                        cursor: 'pointer',
                      }}
                      aria-label="Volume slider"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
