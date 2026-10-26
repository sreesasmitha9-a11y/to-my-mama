import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Moon, Shield, Smile, Sunrise } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';

interface FutureWishesProps {
  isReducedMotion: boolean;
}

export const FutureWishes: React.FC<FutureWishesProps> = ({ isReducedMotion }) => {
  const { futureWishes } = birthdayConfig.story;

  const getWishIcon = (icon: string) => {
    switch (icon) {
      case 'Moon':
        return <Moon size={22} color="var(--rose-soft)" />;
      case 'Shield':
        return <Shield size={22} color="var(--gold-champagne)" />;
      case 'Smile':
        return <Smile size={22} color="var(--gold-bright)" />;
      case 'Sparkles':
      default:
        return <Sparkles size={22} color="var(--crimson-accent)" />;
    }
  };

  return (
    <section
      id="chapter-wishes"
      style={{
        padding: '110px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Sunrise Glowing Horizon Gradient */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '75%',
          height: '350px',
          background: 'radial-gradient(ellipse at center, rgba(245, 223, 168, 0.14) 0%, rgba(230, 57, 98, 0.08) 50%, transparent 75%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ maxWidth: '980px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              <Sunrise size={14} />
              <span>{futureWishes.chapterTitle}</span>
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
            {futureWishes.heading}
          </motion.h2>

          <motion.p
            initial={isReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              fontSize: '1.15rem',
              color: 'var(--ivory-soft)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              maxWidth: '720px',
              margin: '16px auto 0',
              lineHeight: 1.8,
            }}
          >
            "{futureWishes.intro}"
          </motion.p>
        </div>

        {/* 4 Wish Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginBottom: '44px',
          }}
        >
          {futureWishes.wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={isReducedMotion ? {} : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="glass-card"
              style={{
                padding: '30px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(245, 223, 168, 0.08)',
                  border: '1px solid rgba(245, 223, 168, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                {getWishIcon(wish.icon)}
              </div>

              <h3
                className="font-serif"
                style={{
                  fontSize: '1.35rem',
                  color: 'var(--gold-bright)',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}
              >
                {wish.title}
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--ivory-soft)',
                  opacity: 0.88,
                  lineHeight: 1.65,
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                }}
              >
                {wish.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Sentiment */}
        <motion.div
          initial={isReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            textAlign: 'center',
            padding: '24px',
            background: 'rgba(245, 223, 168, 0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(245, 223, 168, 0.15)',
          }}
        >
          <p
            className="font-handwriting"
            style={{
              fontSize: '1.8rem',
              color: 'var(--gold-champagne)',
              lineHeight: 1.5,
            }}
          >
            "{futureWishes.closing}" ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};
