import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';

interface SafePlaceSectionProps {
  isReducedMotion: boolean;
  onOpenPhotoLightbox: (photoSrc: string) => void;
}

export const SafePlaceSection: React.FC<SafePlaceSectionProps> = ({ isReducedMotion, onOpenPhotoLightbox }) => {
  const { safePlaceSection } = birthdayConfig.story;
  const photo = birthdayConfig.photos[2]; // Photo 3: Gentle sweet moment

  return (
    <section
      id="chapter-safe-place"
      style={{
        padding: '110px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Warm Golden Horizon Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '250px',
          background: 'radial-gradient(ellipse at bottom, rgba(245, 223, 168, 0.16) 0%, rgba(230, 57, 98, 0.08) 50%, transparent 80%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ maxWidth: '980px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              <Shield size={14} />
              <span>{safePlaceSection.chapterTitle}</span>
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
            {safePlaceSection.heading}
          </motion.h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '44px',
            alignItems: 'center',
          }}
        >
          {/* Photo on left side */}
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                maxWidth: '350px',
                width: '100%',
                background: 'rgba(25, 7, 21, 0.85)',
                border: '1px solid rgba(245, 223, 168, 0.28)',
                borderRadius: '16px',
                padding: '16px 16px 20px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75), 0 0 30px rgba(245, 223, 168, 0.1)',
                cursor: 'pointer',
              }}
              onClick={() => onOpenPhotoLightbox(photo.src)}
              title="Click to view full photo"
            >
              <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '3 / 4' }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ textAlign: 'center', marginTop: '14px' }}>
                <p className="font-handwriting" style={{ fontSize: '1.6rem', color: 'var(--gold-champagne)' }}>
                  {photo.caption}
                </p>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  {photo.subtext}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Narrative on right side */}
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div
              className="glass-panel"
              style={{
                padding: '40px 34px',
                borderLeft: '4px solid var(--gold-champagne)',
                marginBottom: '24px',
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  color: 'var(--gold-bright)',
                  lineHeight: 1.5,
                  marginBottom: '16px',
                }}
              >
                "{safePlaceSection.keyLine}"
              </h3>
              <p
                style={{
                  fontSize: '1.08rem',
                  color: 'var(--ivory-soft)',
                  fontFamily: 'var(--font-sans)',
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                {safePlaceSection.message}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
