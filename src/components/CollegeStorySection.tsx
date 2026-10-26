import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';

interface CollegeStorySectionProps {
  isReducedMotion: boolean;
  onOpenPhotoLightbox: (photoSrc: string) => void;
}

export const CollegeStorySection: React.FC<CollegeStorySectionProps> = ({ isReducedMotion, onOpenPhotoLightbox }) => {
  const { collegeChapter } = birthdayConfig.story;
  const featuredPhoto = birthdayConfig.photos[0]; // Real photo 1

  return (
    <section
      id="chapter-college"
      style={{
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Warm Sunlight Bokeh Effect */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 223, 168, 0.12) 0%, rgba(230, 57, 98, 0.08) 45%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ maxWidth: '1050px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              <GraduationCap size={14} />
              <span>{collegeChapter.chapterTitle}</span>
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
            {collegeChapter.heading}
          </motion.h2>
        </div>

        {/* 2-Column Story & Scrapbook Photo Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Narrative Column */}
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div
              className="glass-card"
              style={{
                padding: '36px 32px',
                borderLeft: '3px solid var(--gold-champagne)',
                marginBottom: '24px',
              }}
            >
              <p
                style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--gold-bright)',
                  lineHeight: 1.7,
                }}
              >
                "{collegeChapter.highlight}"
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {collegeChapter.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: '1.1rem',
                    color: 'var(--ivory-soft)',
                    fontFamily: 'var(--font-sans)',
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Tasteful Scrapbook Photo Frame */}
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '380px',
                width: '100%',
                padding: '16px 16px 24px',
                background: '#190615',
                border: '1px solid rgba(245, 223, 168, 0.3)',
                borderRadius: '16px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 223, 168, 0.12)',
                transform: 'rotate(1.5deg)',
                cursor: 'pointer',
                transition: 'transform 0.4s ease',
              }}
              onClick={() => onOpenPhotoLightbox(featuredPhoto.src)}
              title="Click to view full photo"
            >
              {/* Gold Tape Accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '90px',
                  height: '24px',
                  background: 'rgba(245, 223, 168, 0.4)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  zIndex: 2,
                }}
              />

              <div
                style={{
                  overflow: 'hidden',
                  borderRadius: '10px',
                  aspectRatio: '3 / 4',
                  position: 'relative',
                }}
              >
                <img
                  src={featuredPhoto.src}
                  alt={featuredPhoto.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              {/* Photo Caption */}
              <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <p
                  className="font-handwriting"
                  style={{
                    fontSize: '1.65rem',
                    color: 'var(--gold-champagne)',
                    marginBottom: '4px',
                  }}
                >
                  {featuredPhoto.caption}
                </p>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {featuredPhoto.subtext}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
