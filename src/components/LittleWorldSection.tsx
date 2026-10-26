import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Heart } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';

interface LittleWorldSectionProps {
  isReducedMotion: boolean;
}

export const LittleWorldSection: React.FC<LittleWorldSectionProps> = ({ isReducedMotion }) => {
  const { littleWorld } = birthdayConfig.story;

  return (
    <section
      id="chapter-little-world"
      style={{
        padding: '100px 24px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="section-container" style={{ maxWidth: '820px' }}>
        {/* Chapter Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              <Feather size={14} />
              <span>{littleWorld.chapterTitle}</span>
            </span>
          </motion.div>

          <motion.h2
            initial={isReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif text-gold-gradient"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 600,
              lineHeight: 1.25,
            }}
          >
            {littleWorld.heading}
          </motion.h2>
        </div>

        {/* Diary / Parchment Letter Card */}
        <motion.div
          initial={isReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="glass-panel"
          style={{
            padding: '48px 40px',
            position: 'relative',
            background: 'linear-gradient(145deg, rgba(32, 9, 24, 0.78) 0%, rgba(18, 4, 14, 0.85) 100%)',
            border: '1px solid rgba(245, 223, 168, 0.22)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(230, 57, 98, 0.15)',
          }}
        >
          {/* Subtle Watermark Heart Accent */}
          <div
            style={{
              position: 'absolute',
              top: '28px',
              right: '28px',
              opacity: 0.08,
              pointerEvents: 'none',
            }}
          >
            <Heart size={140} color="var(--gold-champagne)" fill="var(--gold-champagne)" />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            {littleWorld.paragraphs.map((p, index) => (
              <motion.p
                key={index}
                initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.28rem)',
                  color: 'var(--ivory-soft)',
                  fontFamily: 'var(--font-serif)',
                  lineHeight: 1.85,
                  marginBottom: index === littleWorld.paragraphs.length - 1 ? '0' : '24px',
                  fontWeight: 400,
                }}
              >
                {p}
              </motion.p>
            ))}

            {/* Handwritten Sign-off touch */}
            <div
              style={{
                marginTop: '36px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(245, 223, 168, 0.15)',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <span
                className="font-handwriting"
                style={{
                  fontSize: '2rem',
                  color: 'var(--gold-champagne)',
                  letterSpacing: '0.05em',
                }}
              >
                For you, Mama ❤️
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
