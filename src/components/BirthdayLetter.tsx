import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MailOpen, Heart } from 'lucide-react';
import { birthdayConfig } from '../content/birthdayConfig';

interface BirthdayLetterProps {
  isReducedMotion: boolean;
}

export const BirthdayLetter: React.FC<BirthdayLetterProps> = ({ isReducedMotion }) => {
  const { birthdayLetter } = birthdayConfig;
  const [isOpen, setIsOpen] = useState<boolean>(isReducedMotion);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
  };

  const handleCloseEnvelope = () => {
    setIsOpen(false);
  };

  return (
    <section
      id="chapter-letter"
      style={{
        padding: '120px 24px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="section-container" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              <Mail size={14} />
              <span>THE BIRTHDAY LETTER</span>
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
            A Letter for My Mama
          </motion.h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              marginTop: '10px',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Written with every ounce of affection and gratitude in my heart
          </p>
        </div>

        {/* Closed Envelope vs Unfolded Letter */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* Closed Envelope Scene */
              <motion.div
                key="closed-envelope"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5 } }}
                className="glass-panel"
                style={{
                  padding: '60px 32px',
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, rgba(35, 10, 27, 0.85) 0%, rgba(18, 4, 15, 0.95) 100%)',
                  border: '1px solid rgba(245, 223, 168, 0.3)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.85), 0 0 40px rgba(230, 57, 98, 0.2)',
                  maxWidth: '520px',
                  margin: '0 auto',
                }}
              >
                {/* Envelope Graphic with Wax Seal */}
                <div
                  style={{
                    position: 'relative',
                    width: '180px',
                    height: '120px',
                    margin: '0 auto 32px',
                    background: 'linear-gradient(135deg, #2a0b20 0%, #170412 100%)',
                    borderRadius: '12px',
                    border: '1px solid rgba(245, 223, 168, 0.35)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Flap lines */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '60px',
                      borderBottom: '1px solid rgba(245, 223, 168, 0.25)',
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                      background: 'rgba(245, 223, 168, 0.08)',
                    }}
                  />

                  {/* Red Wax Seal */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 3,
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, #c92a54 0%, #7d122f 100%)',
                      border: '2px solid rgba(245, 223, 168, 0.5)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Heart size={20} fill="#ffffff" color="#ffffff" />
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--gold-bright)',
                    fontStyle: 'italic',
                    marginBottom: '28px',
                  }}
                >
                  Mama, I wrote something for you...
                </p>

                <button
                  onClick={handleOpenEnvelope}
                  className="btn-primary-romance"
                  id="open-letter-btn"
                  style={{ fontSize: '1.05rem', padding: '14px 36px' }}
                >
                  <MailOpen size={18} fill="#12030d" />
                  <span>Open My Letter 💌</span>
                </button>
              </motion.div>
            ) : (
              /* Unfolded Elegant Letter Card */
              <motion.div
                key="open-letter"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="glass-panel"
                style={{
                  padding: '56px 44px',
                  background: 'linear-gradient(150deg, rgba(34, 10, 27, 0.94) 0%, rgba(20, 5, 16, 0.98) 100%)',
                  border: '1px solid rgba(245, 223, 168, 0.35)',
                  boxShadow: '0 25px 70px rgba(0,0,0,0.9), 0 0 50px rgba(245, 223, 168, 0.15)',
                  position: 'relative',
                }}
              >
                {/* Letter Top Controls */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '20px',
                    borderBottom: '1px solid rgba(245, 223, 168, 0.18)',
                    marginBottom: '36px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '0.12em',
                      color: 'var(--gold-champagne)',
                    }}
                  >
                    26 OCTOBER 2026 • FROM SREE
                  </span>

                  <button
                    onClick={handleCloseEnvelope}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                  >
                    Fold letter back
                  </button>
                </div>

                {/* Salutation */}
                <h3
                  className="font-serif text-gold-gradient"
                  style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    fontWeight: 600,
                    marginBottom: '28px',
                  }}
                >
                  {birthdayLetter.salutation}
                </h3>

                {/* Verbatim Letter Body Paragraphs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  {birthdayLetter.body.map((paragraph, idx) => (
                    <p
                      key={idx}
                      style={{
                        fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)',
                        fontFamily: 'var(--font-serif)',
                        color: 'var(--ivory-soft)',
                        lineHeight: 1.85,
                        fontWeight: 400,
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Sign-off & Romantic Signature */}
                <div
                  style={{
                    marginTop: '44px',
                    paddingTop: '28px',
                    borderTop: '1px solid rgba(245, 223, 168, 0.18)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                  }}
                >
                  <p
                    style={{
                      fontSize: '1.1rem',
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--ivory-text)',
                      fontStyle: 'italic',
                      marginBottom: '6px',
                    }}
                  >
                    {birthdayLetter.closing}
                  </p>
                  <p
                    className="font-handwriting"
                    style={{
                      fontSize: '2.5rem',
                      color: 'var(--gold-champagne)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {birthdayLetter.author}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
