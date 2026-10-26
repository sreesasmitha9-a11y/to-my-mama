import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FastForward, HeartHandshake } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';

interface ExpectationsSectionProps {
  isReducedMotion: boolean;
}

export const ExpectationsSection: React.FC<ExpectationsSectionProps> = ({ isReducedMotion }) => {
  const { expectations } = birthdayConfig.story;
  const [showAll, setShowAll] = useState<boolean>(isReducedMotion);
  const [revealedCount, setRevealedCount] = useState<number>(isReducedMotion ? expectations.lines.length : 2);

  const handleNextLine = () => {
    if (revealedCount < expectations.lines.length) {
      setRevealedCount(prev => prev + 1);
    }
  };

  const handleShowAll = () => {
    setShowAll(true);
    setRevealedCount(expectations.lines.length);
  };

  return (
    <section
      id="chapter-expectations"
      style={{
        padding: '120px 24px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="section-container" style={{ maxWidth: '860px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              <HeartHandshake size={14} />
              <span>{expectations.chapterTitle}</span>
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
            {expectations.heading}
          </motion.h2>
        </div>

        {/* Sequential Cascade Container */}
        <div
          className="glass-panel"
          style={{
            padding: '48px 36px',
            background: 'rgba(22, 6, 18, 0.85)',
            border: '1px solid rgba(245, 223, 168, 0.25)',
            position: 'relative',
          }}
        >
          {/* Skip animation option */}
          {!showAll && revealedCount < expectations.lines.length && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
              <button
                onClick={handleShowAll}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  padding: '4px 8px',
                }}
              >
                <FastForward size={14} />
                <span>Show all lines</span>
              </button>
            </div>
          )}

          {/* Lines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {expectations.lines.map((line, index) => {
              const isVisible = showAll || index < revealedCount;
              if (!isVisible) return null;

              return (
                <motion.div
                  key={index}
                  initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--gold-champagne)',
                      fontSize: '1.2rem',
                      lineHeight: 1.6,
                      userSelect: 'none',
                    }}
                  >
                    ✧
                  </span>
                  <p
                    style={{
                      fontSize: 'clamp(1.15rem, 3vw, 1.35rem)',
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      color: index === expectations.lines.length - 1 ? 'var(--gold-bright)' : 'var(--ivory-text)',
                      fontWeight: index === expectations.lines.length - 1 ? 600 : 400,
                      lineHeight: 1.6,
                    }}
                  >
                    "{line}"
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Reveal Next Line Button if not yet full */}
          {!showAll && revealedCount < expectations.lines.length && (
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <button
                onClick={handleNextLine}
                className="btn-secondary-romance"
                style={{ fontSize: '0.92rem', padding: '10px 24px' }}
              >
                <span>Read next thought...</span>
              </button>
            </div>
          )}

          {/* Emotional Climax Conclusion */}
          <AnimatePresence>
            {(showAll || revealedCount === expectations.lines.length) && (
              <motion.div
                initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                  marginTop: '40px',
                  paddingTop: '32px',
                  borderTop: '1px solid rgba(245, 223, 168, 0.2)',
                  textAlign: 'center',
                }}
              >
                <p
                  className="font-serif text-rose-gradient text-glow-rose"
                  style={{
                    fontSize: 'clamp(1.25rem, 3.5vw, 1.55rem)',
                    fontWeight: 600,
                    lineHeight: 1.7,
                    maxWidth: '700px',
                    margin: '0 auto',
                  }}
                >
                  {expectations.conclusion}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
