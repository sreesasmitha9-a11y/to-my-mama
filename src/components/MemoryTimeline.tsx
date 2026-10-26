import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Moon, Sparkles, Heart } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';
import type { MemoryItem } from '../content/birthdayConfig';

interface MemoryTimelineProps {
  isReducedMotion: boolean;
}

export const MemoryTimeline: React.FC<MemoryTimelineProps> = ({ isReducedMotion }) => {
  const { memories } = birthdayConfig;

  // Icon mapping helper
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap size={18} color="var(--gold-champagne)" />;
      case 'Moon':
        return <Moon size={18} color="var(--rose-soft)" />;
      case 'Sparkles':
        return <Sparkles size={18} color="var(--gold-bright)" />;
      case 'Heart':
      default:
        return <Heart size={18} color="var(--crimson-accent)" />;
    }
  };

  return (
    <section
      id="chapter-timeline"
      style={{
        padding: '110px 24px',
        position: 'relative',
      }}
    >
      <div className="section-container" style={{ maxWidth: '920px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              <BookOpen size={14} />
              <span>OUR LITTLE STORY</span>
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
            Chapters of You & Me
          </motion.h2>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              marginTop: '10px',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Every step that brought us to where we are today
          </p>
        </div>

        {/* Timeline Track & Cards */}
        <div style={{ position: 'relative' }}>
          {/* Vertical Central Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '28px',
              width: '2px',
              background: 'linear-gradient(180deg, rgba(245, 223, 168, 0.4) 0%, rgba(230, 57, 98, 0.4) 50%, rgba(245, 223, 168, 0.2) 100%)',
              zIndex: 1,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative', zIndex: 2 }}>
            {memories.map((item: MemoryItem, idx: number) => (
              <motion.div
                key={item.id}
                initial={isReducedMotion ? {} : { opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '24px',
                }}
              >
                {/* Milestone Node */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    flexShrink: 0,
                    borderRadius: '50%',
                    background: 'rgba(28, 8, 22, 0.95)',
                    border: '2px solid rgba(245, 223, 168, 0.45)',
                    boxShadow: '0 0 20px rgba(245, 223, 168, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getIcon(item.iconName)}
                </div>

                {/* Scrapbook Memory Card */}
                <div
                  className="glass-card"
                  style={{
                    flex: 1,
                    padding: '28px 30px',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '8px',
                    }}
                  >
                    <h3
                      className="font-serif"
                      style={{
                        fontSize: '1.45rem',
                        color: 'var(--gold-bright)',
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--rose-soft)',
                        fontFamily: 'var(--font-sans)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {item.tagline}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '1.02rem',
                      color: 'var(--ivory-soft)',
                      lineHeight: 1.75,
                      marginBottom: '16px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 300,
                    }}
                  >
                    {item.description}
                  </p>

                  {item.reflection && (
                    <div
                      style={{
                        padding: '12px 18px',
                        background: 'rgba(245, 223, 168, 0.05)',
                        borderLeft: '2px solid var(--gold-champagne)',
                        borderRadius: '0 8px 8px 0',
                      }}
                    >
                      <p
                        className="font-handwriting"
                        style={{
                          fontSize: '1.35rem',
                          color: 'var(--gold-champagne)',
                          margin: 0,
                        }}
                      >
                        "{item.reflection}"
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
