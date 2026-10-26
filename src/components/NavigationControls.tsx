import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Activity } from 'lucide-react';

interface NavigationControlsProps {
  isReducedMotion: boolean;
  onToggleReducedMotion: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

interface ChapterLink {
  id: string;
  number: string;
  title: string;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  isReducedMotion,
  onToggleReducedMotion,
  onNavigateToSection,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const chapters: ChapterLink[] = [
    { id: 'chapter-reveal', number: 'Intro', title: 'Birthday Reveal & Wish' },
    { id: 'chapter-little-world', number: '01', title: 'A Little Piece of My Heart' },
    { id: 'chapter-college', number: '02', title: 'The College Chapter' },
    { id: 'chapter-silence', number: '03', title: 'Your Silence, My Favourite Sound' },
    { id: 'chapter-safe-place', number: '04', title: 'Somehow, You Feel Like Home' },
    { id: 'chapter-world-disappears', number: '05', title: 'When the World Fades Away' },
    { id: 'chapter-rise', number: '06', title: 'You Were There When I Needed Someone' },
    { id: 'chapter-expectations', number: '07', title: 'More Than I Ever Expected' },
    { id: 'chapter-timeline', number: '08', title: 'Our Little Story' },
    { id: 'chapter-music', number: '09', title: 'Our Special Song — Munbe Vaa' },
    { id: 'chapter-gallery', number: '10', title: 'Little Moments, Big Feelings' },
    { id: 'chapter-letter', number: '11', title: 'A Letter for My Mama' },
    { id: 'chapter-wishes', number: '12', title: 'Everything Beautiful for You' },
    { id: 'chapter-final-surprise', number: '13', title: 'One Last Thing ❤️' },
  ];

  const handleSelect = (id: string) => {
    setIsOpen(false);
    onNavigateToSection(id);
  };

  return (
    <>
      {/* Floating Top Navigation Header */}
      <header
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          right: '20px',
          zIndex: 80,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        {/* Brand / Dedication Pill */}
        <div
          className="glass-pill"
          style={{
            pointerEvents: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
          }}
        >
          <Heart size={14} fill="var(--crimson-accent)" color="var(--crimson-accent)" />
          <span
            className="font-display"
            style={{
              fontSize: '0.84rem',
              letterSpacing: '0.12em',
              color: 'var(--gold-champagne)',
            }}
          >
            TO MY MAMA
          </span>
        </div>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', pointerEvents: 'auto' }}>
          {/* Reduced Motion Toggle Button */}
          <button
            onClick={onToggleReducedMotion}
            className="glass-pill"
            style={{
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: isReducedMotion ? 'var(--gold-champagne)' : 'var(--text-muted)',
              cursor: 'pointer',
              fontSize: '0.78rem',
              border: '1px solid rgba(245, 223, 168, 0.2)',
            }}
            title={isReducedMotion ? 'Motion reduced. Click to enable full animations.' : 'Click to reduce motion.'}
            id="toggle-reduced-motion-btn"
          >
            <Activity size={14} />
            <span style={{ display: 'none' }}>Motion</span>
          </button>

          {/* Chapters Menu Drawer Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="glass-pill"
            style={{
              padding: '8px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--ivory-text)',
              cursor: 'pointer',
              fontSize: '0.85rem',
              border: '1px solid rgba(245, 223, 168, 0.3)',
            }}
            id="chapters-menu-btn"
          >
            <Menu size={16} />
            <span>Chapters</span>
          </button>
        </div>
      </header>

      {/* Chapters Navigation Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 150,
              background: 'rgba(7, 2, 8, 0.92)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              style={{
                width: '100%',
                maxWidth: '420px',
                height: '100%',
                background: 'linear-gradient(180deg, #180514 0%, #0d020a 100%)',
                borderLeft: '1px solid rgba(245, 223, 168, 0.25)',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '32px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid rgba(245, 223, 168, 0.18)',
                }}
              >
                <div>
                  <h3
                    className="font-serif text-gold-gradient"
                    style={{ fontSize: '1.6rem', fontWeight: 600 }}
                  >
                    Story Chapters
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Jump directly to any part of your surprise
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(245, 223, 168, 0.12)',
                    border: '1px solid rgba(245, 223, 168, 0.25)',
                    color: 'var(--ivory-text)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  aria-label="Close chapters menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Chapter Links List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => handleSelect(ch.id)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(245, 223, 168, 0.08)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      color: 'var(--ivory-soft)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(245, 223, 168, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(245, 223, 168, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.borderColor = 'rgba(245, 223, 168, 0.08)';
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-display)',
                        color: 'var(--gold-champagne)',
                        width: '28px',
                      }}
                    >
                      {ch.number}
                    </span>
                    <span
                      style={{
                        fontSize: '0.94rem',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 400,
                      }}
                    >
                      {ch.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Bottom Dedication Note */}
              <div
                style={{
                  marginTop: '28px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(245, 223, 168, 0.15)',
                  textAlign: 'center',
                }}
              >
                <p className="font-handwriting" style={{ fontSize: '1.4rem', color: 'var(--gold-champagne)' }}>
                  Made with love by Sree Sasmitha ❤️
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
