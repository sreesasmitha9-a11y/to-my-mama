import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';
import type { PhotoItem } from '../content/birthdayConfig';

interface PhotoGalleryProps {
  isReducedMotion: boolean;
  activeLightboxSrc: string | null;
  onOpenLightbox: (src: string) => void;
  onCloseLightbox: () => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  isReducedMotion,
  activeLightboxSrc,
  onOpenLightbox,
  onCloseLightbox,
}) => {
  const { photos, photoGalleryEnabled } = birthdayConfig;

  if (!photoGalleryEnabled || photos.length === 0) {
    return null;
  }

  const currentIndex = photos.findIndex((p) => p.src === activeLightboxSrc);
  const activePhoto = currentIndex >= 0 ? photos[currentIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      onOpenLightbox(photos[currentIndex - 1].src);
    } else {
      onOpenLightbox(photos[photos.length - 1].src);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < photos.length - 1) {
      onOpenLightbox(photos[currentIndex + 1].src);
    } else {
      onOpenLightbox(photos[0].src);
    }
  };

  return (
    <section
      id="chapter-gallery"
      style={{
        padding: '110px 24px',
        position: 'relative',
      }}
    >
      <div className="section-container" style={{ maxWidth: '1100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              <Camera size={14} />
              <span>VISUAL MEMORIES</span>
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
            Little Moments, Big Feelings
          </motion.h2>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              marginTop: '10px',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Real snapshots of smiles, warmth, and the quiet comfort between us
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px',
          }}
        >
          {photos.map((item: PhotoItem, index: number) => (
            <motion.div
              key={item.id}
              initial={isReducedMotion ? {} : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="glass-card"
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={() => onOpenLightbox(item.src)}
              title="Click to expand photo"
            >
              {/* Photo Frame Container */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '3 / 4',
                  overflow: 'hidden',
                  background: '#12040f',
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Subtle Hover Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(20, 5, 17, 0.75)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(245, 223, 168, 0.3)',
                    color: 'var(--gold-champagne)',
                  }}
                >
                  <Maximize2 size={16} />
                </div>
              </div>

              {/* Caption Underneath */}
              <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3
                  className="font-handwriting"
                  style={{
                    fontSize: '1.65rem',
                    color: 'var(--gold-champagne)',
                    marginBottom: '4px',
                  }}
                >
                  {item.caption}
                </h3>
                {item.subtext && (
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--ivory-soft)',
                      opacity: 0.85,
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {item.subtext}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'rgba(5, 1, 6, 0.94)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
            onClick={onCloseLightbox}
          >
            {/* Close Button */}
            <button
              onClick={onCloseLightbox}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'rgba(245, 223, 168, 0.15)',
                border: '1px solid rgba(245, 223, 168, 0.35)',
                color: 'var(--ivory-text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 210,
              }}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {/* Navigation Arrows */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  style={{
                    position: 'absolute',
                    left: '20px',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(245, 223, 168, 0.15)',
                    border: '1px solid rgba(245, 223, 168, 0.35)',
                    color: 'var(--ivory-text)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 210,
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={handleNext}
                  style={{
                    position: 'absolute',
                    right: '20px',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(245, 223, 168, 0.15)',
                    border: '1px solid rgba(245, 223, 168, 0.35)',
                    color: 'var(--ivory-text)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 210,
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Expanded Photo Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{
                maxWidth: '680px',
                maxHeight: '85vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  maxHeight: '68vh',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.95), 0 0 40px rgba(245, 223, 168, 0.2)',
                  border: '1px solid rgba(245, 223, 168, 0.3)',
                }}
              >
                <img
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  style={{
                    width: 'auto',
                    maxWidth: '100%',
                    maxHeight: '68vh',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>

              <div style={{ marginTop: '16px', maxWidth: '540px' }}>
                <p className="font-handwriting" style={{ fontSize: '1.9rem', color: 'var(--gold-champagne)', marginBottom: '4px' }}>
                  {activePhoto.caption}
                </p>
                {activePhoto.subtext && (
                  <p style={{ fontSize: '0.92rem', color: 'var(--ivory-soft)', opacity: 0.9 }}>
                    {activePhoto.subtext}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
