import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, ChevronDown, Flame } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';

interface BirthdayRevealProps {
  onScrollToNext: () => void;
  isReducedMotion: boolean;
}

export const BirthdayReveal: React.FC<BirthdayRevealProps> = ({ onScrollToNext, isReducedMotion }) => {
  const { birthdayReveal } = birthdayConfig.story;
  const [isBlown, setIsBlown] = useState<boolean>(false);

  const triggerCelebration = () => {
    setIsBlown(true);

    if (!isReducedMotion) {
      // Golden Champagne & Crimson Confetti burst
      confetti({
        particleCount: 75,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#f5dfa8', '#ffe9b8', '#e63962', '#e89bb4', '#ffffff'],
        shapes: ['circle', 'square'],
        scalar: 1.1,
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.7 },
          colors: ['#f5dfa8', '#e89bb4', '#c4ab70'],
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.7 },
          colors: ['#f5dfa8', '#e63962', '#ffffff'],
        });
      }, 350);
    }
  };

  const handleRelight = () => {
    setIsBlown(false);
  };

  return (
    <section
      id="chapter-reveal"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px 60px',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <div className="section-container" style={{ maxWidth: '900px' }}>
        {/* Date & Nickname Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '24px' }}
        >
          <span className="chapter-badge">
            <Sparkles size={14} />
            <span>26 OCTOBER 2026 • CELEBRATING YOU</span>
          </span>
        </motion.div>

        {/* Primary Birthday Headings */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-display text-gold-gradient text-glow-gold"
          style={{
            fontSize: 'clamp(2.1rem, 6.5vw, 4.4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '0.04em',
            marginBottom: '16px',
          }}
        >
          {birthdayReveal.heading1}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-serif text-rose-gradient text-glow-rose"
          style={{
            fontSize: 'clamp(1.9rem, 5vw, 3.2rem)',
            fontWeight: 600,
            fontStyle: 'italic',
            marginBottom: '28px',
          }}
        >
          {birthdayReveal.heading2}
        </motion.h2>

        {/* Supporting Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)',
            color: 'var(--ivory-soft)',
            fontFamily: 'var(--font-serif)',
            maxWidth: '680px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          "{birthdayReveal.subheading}"
        </motion.p>

        {/* Interactive Candle / Birthday Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="glass-panel"
          style={{
            maxWidth: '420px',
            margin: '0 auto 40px',
            padding: '36px 28px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Candle Background Glow */}
          {!isBlown && (
            <div
              style={{
                position: 'absolute',
                top: '20px',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 200, 100, 0.35) 0%, transparent 70%)',
                filter: 'blur(20px)',
                pointerEvents: 'none',
              }}
            />
          )}

          {/* Realistic Aesthetic Birthday Candle */}
          <div style={{ position: 'relative', width: '80px', height: '140px', marginBottom: '24px' }}>
            {/* Candle Flame or Smoke */}
            <AnimatePresence>
              {!isBlown ? (
                <motion.div
                  key="flame"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.2, y: -15, transition: { duration: 0.5 } }}
                  className="candle-flame"
                  style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '50%',
                    marginLeft: '-11px',
                    width: '22px',
                    height: '38px',
                    borderRadius: '50% 50% 35% 35% / 60% 60% 40% 40%',
                    background: 'radial-gradient(ellipse at bottom, #ffffff 10%, #ffd043 45%, #ff5e3a 80%, rgba(255, 60, 40, 0) 100%)',
                    cursor: 'pointer',
                  }}
                  onClick={triggerCelebration}
                  title="Click to blow candle & make a wish"
                />
              ) : (
                <motion.div
                  key="smoke"
                  initial={{ opacity: 0, y: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 0.7, 0], y: -40, x: [0, 6, -4, 2] }}
                  transition={{ duration: 1.8, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    marginLeft: '-6px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: 'rgba(235, 220, 210, 0.65)',
                    filter: 'blur(4px)',
                  }}
                />
              )}
            </AnimatePresence>

            {/* Candle Wick */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '50%',
                marginLeft: '-1.5px',
                width: '3px',
                height: '12px',
                background: '#3a2010',
                borderRadius: '1px',
              }}
            />

            {/* Candle Body */}
            <div
              style={{
                position: 'absolute',
                top: '26px',
                left: '50%',
                marginLeft: '-22px',
                width: '44px',
                height: '95px',
                borderRadius: '8px 8px 12px 12px',
                background: 'linear-gradient(180deg, #fcead2 0%, #ecd0b5 30%, #c49a7a 100%)',
                boxShadow: 'inset 2px 0 4px rgba(255, 255, 255, 0.6), inset -2px 0 4px rgba(0, 0, 0, 0.3), 0 8px 20px rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              {/* Gold Ribbon on Candle */}
              <div
                style={{
                  position: 'absolute',
                  top: '40px',
                  left: 0,
                  right: 0,
                  height: '14px',
                  background: 'linear-gradient(90deg, #d4b574, #ffe9b8, #d4b574)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Heart size={10} color="#601824" fill="#601824" />
              </div>
            </div>

            {/* Candle Holder Base */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                marginLeft: '-35px',
                width: '70px',
                height: '10px',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, #ecd0b5 0%, #a47a5a 100%)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
              }}
            />
          </div>

          {/* Candle Action Prompt */}
          <div style={{ textAlign: 'center' }}>
            {!isBlown ? (
              <button
                onClick={triggerCelebration}
                className="btn-primary-romance"
                style={{ fontSize: '0.96rem', padding: '10px 24px' }}
                id="make-wish-candle-btn"
              >
                <Flame size={18} color="#12030d" />
                <span>Make a Wish & Blow Candle</span>
              </button>
            ) : (
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    color: 'var(--gold-champagne)',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    marginBottom: '10px',
                  }}
                >
                  ✨ May every single wish in your heart come true, Mama.
                </motion.p>
                <button
                  onClick={handleRelight}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Relight the candle
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Transition into Story */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button
            onClick={onScrollToNext}
            className="btn-secondary-romance"
            id="begin-story-scroll-btn"
            style={{ fontSize: '1.02rem', padding: '14px 32px' }}
          >
            <span>Begin Our Story</span>
            <ChevronDown size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
