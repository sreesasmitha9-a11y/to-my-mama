import React from 'react';
import { motion } from 'framer-motion';
import { Sunrise, Heart } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';

interface RiseSectionProps {
  isReducedMotion: boolean;
}

export const RiseSection: React.FC<RiseSectionProps> = ({ isReducedMotion }) => {
  const { helpedMeRise } = birthdayConfig.story;

  return (
    <section
      id="chapter-rise"
      style={{
        padding: '120px 24px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Warm Sunrise / Dawning Light Aura */}
      <motion.div
        initial={isReducedMotion ? {} : { opacity: 0.2, scale: 0.85 }}
        whileInView={{ opacity: 0.7, scale: 1.1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 215, 120, 0.18) 0%, rgba(230, 57, 98, 0.12) 40%, transparent 75%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ maxWidth: '840px', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              <Sunrise size={14} />
              <span>{helpedMeRise.chapterTitle}</span>
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
            {helpedMeRise.heading}
          </motion.h2>
        </div>

        {/* Emotionally Grounded Card */}
        <motion.div
          initial={isReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="glass-panel"
          style={{
            padding: '50px 38px',
            background: 'linear-gradient(160deg, rgba(35, 10, 26, 0.85) 0%, rgba(18, 4, 15, 0.95) 100%)',
            border: '1px solid rgba(245, 223, 168, 0.28)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.85), 0 0 50px rgba(245, 223, 168, 0.15)',
            textAlign: 'center',
          }}
        >
          {/* Key Line in Golden Highlight */}
          <h3
            className="font-serif text-glow-gold"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.1rem)',
              color: 'var(--gold-bright)',
              fontWeight: 600,
              lineHeight: 1.45,
              marginBottom: '28px',
            }}
          >
            "{helpedMeRise.keyLine}"
          </h3>

          <p
            style={{
              fontSize: 'clamp(1.08rem, 2.5vw, 1.22rem)',
              color: 'var(--ivory-soft)',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.85,
              fontWeight: 300,
              maxWidth: '680px',
              margin: '0 auto 24px',
            }}
          >
            {helpedMeRise.message}
          </p>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2.5vw, 1.18rem)',
              color: 'var(--rose-soft)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              lineHeight: 1.8,
              maxWidth: '680px',
              margin: '0 auto 32px',
            }}
          >
            {helpedMeRise.gratitude}
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--gold-champagne)',
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.8rem',
            }}
          >
            <Heart size={20} fill="var(--crimson-accent)" color="var(--crimson-accent)" />
            <span>Forever grateful to you, Mama.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
