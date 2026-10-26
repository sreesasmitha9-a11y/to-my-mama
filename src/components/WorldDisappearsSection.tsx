import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeOff, Eye, Compass } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';

interface WorldDisappearsSectionProps {
  isReducedMotion: boolean;
}

export const WorldDisappearsSection: React.FC<WorldDisappearsSectionProps> = ({ isReducedMotion }) => {
  const { worldDisappears } = birthdayConfig.story;
  const [worldFaded, setWorldFaded] = useState<boolean>(true);

  return (
    <section
      id="chapter-world-disappears"
      style={{
        padding: '120px 24px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Distant City Lights / Night Sky Simulation */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: worldFaded
            ? 'radial-gradient(circle at 50% 60%, rgba(20, 4, 16, 0.95) 0%, #060107 100%)'
            : 'radial-gradient(circle at 50% 60%, rgba(45, 12, 35, 0.8) 0%, rgba(20, 5, 18, 0.9) 60%, #060107 100%)',
          transition: 'background 1.5s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Distant Bokeh Lights */}
      {!isReducedMotion && (
        <div
          style={{
            position: 'absolute',
            bottom: '25px',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-around',
            opacity: worldFaded ? 0.12 : 0.65,
            transition: 'opacity 1.8s ease',
            pointerEvents: 'none',
          }}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                borderRadius: '50%',
                background: i % 2 === 0 ? '#f5dfa8' : '#e89bb4',
                filter: 'blur(3px)',
              }}
            />
          ))}
        </div>
      )}

      <div className="section-container" style={{ maxWidth: '840px', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              <Compass size={14} />
              <span>{worldDisappears.chapterTitle}</span>
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
            {worldDisappears.heading}
          </motion.h2>
        </div>

        {/* Cinematic Card with Interactive Light Fade */}
        <motion.div
          initial={isReducedMotion ? {} : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="glass-panel"
          style={{
            padding: '50px 36px',
            textAlign: 'center',
            background: 'rgba(16, 4, 14, 0.88)',
            border: '1px solid rgba(245, 223, 168, 0.22)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85), 0 0 45px rgba(230, 57, 98, 0.15)',
          }}
        >
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.35rem, 3.5vw, 1.85rem)',
              fontStyle: 'italic',
              color: 'var(--gold-bright)',
              lineHeight: 1.6,
              marginBottom: '24px',
            }}
          >
            "{worldDisappears.keyLine}"
          </p>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--ivory-soft)',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.85,
              fontWeight: 300,
              maxWidth: '620px',
              margin: '0 auto 36px',
            }}
          >
            {worldDisappears.reflection}
          </p>

          {/* Interactive Toggle for Distant City Lights */}
          <div style={{ display: 'inline-block' }}>
            <button
              onClick={() => setWorldFaded(!worldFaded)}
              className="btn-secondary-romance"
              style={{ fontSize: '0.9rem', padding: '10px 22px' }}
              title="Toggle quiet night atmosphere"
            >
              {worldFaded ? (
                <>
                  <Eye size={16} />
                  <span>The world is quiet right now (Tap to reveal city lights)</span>
                </>
              ) : (
                <>
                  <EyeOff size={16} />
                  <span>Fade distant lights into the night</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
