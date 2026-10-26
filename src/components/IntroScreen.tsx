import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Volume2 } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';

interface IntroScreenProps {
  onEnter: (enableAudio: boolean) => void;
  isReducedMotion: boolean;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter, isReducedMotion }) => {
  const { secretEntry } = birthdayConfig.story;

  const handleStart = (withSound: boolean) => {
    onEnter(withSound);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at center, #1b0615 0%, #0d020a 55%, #050104 100%)',
        padding: '24px',
        textAlign: 'center',
      }}
    >
      {/* Soft Emergent Atmospheric Glow */}
      <motion.div
        animate={isReducedMotion ? {} : {
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230, 57, 98, 0.22) 0%, rgba(245, 223, 168, 0.12) 40%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '640px', margin: '0 auto' }}>
        {/* Soft Sparkle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '9999px',
            background: 'rgba(245, 223, 168, 0.08)',
            border: '1px solid rgba(245, 223, 168, 0.25)',
            color: 'var(--gold-champagne)',
            fontSize: '0.9rem',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.15em',
            marginBottom: '32px',
          }}
        >
          <Sparkles size={16} color="var(--gold-champagne)" />
          <span>A PRIVATE SURPRISE</span>
        </motion.div>

        {/* Secret Entry Narrative */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="font-serif text-gold-gradient"
          style={{
            fontSize: 'clamp(2.6rem, 7vw, 4.2rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            marginBottom: '20px',
          }}
        >
          {secretEntry.salutation}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.1 }}
          style={{
            fontSize: 'clamp(1.15rem, 3.5vw, 1.45rem)',
            color: 'var(--ivory-soft)',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            lineHeight: 1.6,
            marginBottom: '12px',
          }}
        >
          {secretEntry.line1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.6 }}
          style={{
            fontSize: 'clamp(1.05rem, 3vw, 1.25rem)',
            color: 'var(--rose-soft)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            marginBottom: '44px',
          }}
        >
          {secretEntry.line2}
        </motion.p>

        {/* Enter Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <button
            onClick={() => handleStart(true)}
            className="btn-primary-romance"
            style={{ fontSize: '1.15rem', padding: '16px 42px' }}
            id="open-surprise-sound-btn"
          >
            <Heart size={20} fill="#12030d" />
            <span>{secretEntry.buttonText}</span>
          </button>

          <button
            onClick={() => handleStart(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '0.88rem',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              transition: 'color 0.2s',
            }}
            id="open-surprise-silent-btn"
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ivory-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Volume2 size={14} />
            <span>Enter quietly without music</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
