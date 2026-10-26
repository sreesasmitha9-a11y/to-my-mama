import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, RotateCcw, MailOpen } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';

interface FinalSurpriseProps {
  isReducedMotion: boolean;
  onReplay: () => void;
  onJumpToLetter: () => void;
}

export const FinalSurprise: React.FC<FinalSurpriseProps> = ({ isReducedMotion, onReplay, onJumpToLetter }) => {
  const { finalSurprise } = birthdayConfig.story;
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const handleReveal = () => {
    setIsRevealed(true);

    if (!isReducedMotion) {
      // Grand celebratory finale shower: gold, pink, crimson
      const end = Date.now() + 2.5 * 1000;
      const colors = ['#f5dfa8', '#ffe9b8', '#e63962', '#e89bb4', '#ffffff'];

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.75 },
          colors: colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.75 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  };

  return (
    <section
      id="chapter-final-surprise"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 100px',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Radiant Climax Atmosphere */}
      {isRevealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 2 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(230, 57, 98, 0.18) 0%, rgba(245, 223, 168, 0.12) 40%, transparent 75%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
          }}
        />
      )}

      <div className="section-container" style={{ maxWidth: '880px', position: 'relative', zIndex: 10 }}>
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            /* Pre-Reveal Prompt */
            <motion.div
              key="pre-reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.6 } }}
              transition={{ duration: 1 }}
              className="glass-panel"
              style={{
                padding: '60px 36px',
                background: 'linear-gradient(150deg, rgba(28, 8, 22, 0.88) 0%, rgba(14, 3, 11, 0.95) 100%)',
                maxWidth: '620px',
                margin: '0 auto',
                border: '1px solid rgba(245, 223, 168, 0.28)',
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <span className="chapter-badge">
                  <Sparkles size={14} />
                  <span>ONE LAST WHISPER</span>
                </span>
              </div>

              <h2
                className="font-serif text-gold-gradient"
                style={{
                  fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}
              >
                {finalSurprise.heading}
              </h2>

              <p
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--ivory-soft)',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  marginBottom: '40px',
                }}
              >
                {finalSurprise.subheading}
              </p>

              <button
                onClick={handleReveal}
                className="btn-primary-romance"
                id="one-last-thing-btn"
                style={{ fontSize: '1.12rem', padding: '16px 42px' }}
              >
                <Heart size={20} fill="#12030d" />
                <span>{finalSurprise.buttonText}</span>
              </button>
            </motion.div>
          ) : (
            /* Grand Emotional Climax Revealed */
            <motion.div
              key="grand-climax"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="glass-panel"
              style={{
                padding: '64px 44px',
                background: 'linear-gradient(150deg, rgba(35, 9, 27, 0.95) 0%, rgba(18, 4, 15, 0.98) 100%)',
                border: '1px solid rgba(245, 223, 168, 0.4)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.95), 0 0 60px rgba(245, 223, 168, 0.22)',
              }}
            >
              {/* Climax Paragraphs */}
              <div style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {finalSurprise.climaxLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.4 }}
                    style={{
                      fontSize: 'clamp(1.15rem, 3vw, 1.38rem)',
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--ivory-soft)',
                      lineHeight: 1.85,
                      fontWeight: 400,
                    }}
                  >
                    "{line}"
                  </motion.p>
                ))}
              </div>

              {/* Ultimate Headings */}
              <motion.div
                initial={isReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                style={{
                  padding: '32px 20px',
                  borderTop: '1px solid rgba(245, 223, 168, 0.25)',
                  borderBottom: '1px solid rgba(245, 223, 168, 0.25)',
                  margin: '36px 0',
                }}
              >
                <h1
                  className="font-display text-gold-gradient text-glow-gold"
                  style={{
                    fontSize: 'clamp(2rem, 5.5vw, 3.6rem)',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    marginBottom: '14px',
                  }}
                >
                  {finalSurprise.grandBirthdayGreeting}
                </h1>

                <h2
                  className="font-serif text-rose-gradient text-glow-rose"
                  style={{
                    fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
                    fontWeight: 600,
                    fontStyle: 'italic',
                    marginBottom: '12px',
                  }}
                >
                  {finalSurprise.ultimateAffirmation}
                </h2>

                <p
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--gold-champagne)',
                    fontFamily: 'var(--font-serif)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {finalSurprise.gratitudeLine}
                </p>
              </motion.div>

              {/* Handwritten Signature */}
              <motion.div
                initial={isReducedMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
                style={{ marginBottom: '44px' }}
              >
                <p
                  className="font-handwriting"
                  style={{
                    fontSize: '2.6rem',
                    color: 'var(--gold-champagne)',
                    lineHeight: 1.3,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {finalSurprise.signature}
                </p>
              </motion.div>

              {/* Action Buttons: Replay & Jump to Letter */}
              <motion.div
                initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  onClick={onReplay}
                  className="btn-primary-romance"
                  id="replay-experience-btn"
                  style={{ fontSize: '0.98rem', padding: '12px 28px' }}
                >
                  <RotateCcw size={16} />
                  <span>Experience Again ✨</span>
                </button>

                <button
                  onClick={onJumpToLetter}
                  className="btn-secondary-romance"
                  id="revisit-letter-btn"
                  style={{ fontSize: '0.98rem', padding: '12px 28px' }}
                >
                  <MailOpen size={16} />
                  <span>Read Letter Again 💌</span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
