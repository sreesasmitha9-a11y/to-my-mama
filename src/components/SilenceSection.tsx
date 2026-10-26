import React from 'react';
import { motion } from 'framer-motion';
import { Moon, VolumeX } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';

interface SilenceSectionProps {
  isReducedMotion: boolean;
  onOpenPhotoLightbox: (photoSrc: string) => void;
}

export const SilenceSection: React.FC<SilenceSectionProps> = ({ isReducedMotion, onOpenPhotoLightbox }) => {
  const { silenceSection } = birthdayConfig.story;
  const photo = birthdayConfig.photos[1]; // Photo 2: Quiet, close portrait

  return (
    <section
      id="chapter-silence"
      style={{
        padding: '120px 24px',
        position: 'relative',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(30, 8, 25, 0.5) 0%, transparent 80%)',
      }}
    >
      <div className="section-container" style={{ maxWidth: '960px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              <Moon size={14} />
              <span>{silenceSection.chapterTitle}</span>
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
            {silenceSection.heading}
          </motion.h2>
        </div>

        {/* Quiet Intimate Presentation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Heart of Silence Card */}
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="glass-panel"
            style={{
              padding: '44px 36px',
              border: '1px solid rgba(232, 155, 180, 0.25)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle Moon / Constellation Ambient Background */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245, 223, 168, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <VolumeX size={20} color="var(--rose-soft)" />
              <span
                style={{
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.12em',
                  color: 'var(--rose-soft)',
                  textTransform: 'uppercase',
                }}
              >
                UNSPOKEN COMFORT
              </span>
            </div>

            <blockquote
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.45rem)',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                color: 'var(--gold-bright)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              "{silenceSection.quote}"
            </blockquote>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--ivory-soft)',
                fontFamily: 'var(--font-sans)',
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              {silenceSection.reflection}
            </p>
          </motion.div>

          {/* Intimate Portrait Display */}
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                maxWidth: '340px',
                width: '100%',
                background: 'rgba(20, 6, 17, 0.85)',
                border: '1px solid rgba(245, 223, 168, 0.22)',
                borderRadius: '16px',
                padding: '14px 14px 20px',
                boxShadow: '0 18px 45px rgba(0, 0, 0, 0.75)',
                cursor: 'pointer',
              }}
              onClick={() => onOpenPhotoLightbox(photo.src)}
              title="Click to view full photo"
            >
              <div style={{ borderRadius: '10px', overflow: 'hidden', aspectRatio: '3 / 4' }}>
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
                <p className="font-handwriting" style={{ fontSize: '1.5rem', color: 'var(--gold-champagne)' }}>
                  {photo.caption}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  {photo.subtext}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
