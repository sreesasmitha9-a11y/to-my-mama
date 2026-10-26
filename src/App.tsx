import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { IntroScreen } from './components/IntroScreen';
import { BirthdayReveal } from './components/BirthdayReveal';
import { LittleWorldSection } from './components/LittleWorldSection';
import { CollegeStorySection } from './components/CollegeStorySection';
import { SilenceSection } from './components/SilenceSection';
import { SafePlaceSection } from './components/SafePlaceSection';
import { WorldDisappearsSection } from './components/WorldDisappearsSection';
import { RiseSection } from './components/RiseSection';
import { ExpectationsSection } from './components/ExpectationsSection';
import { MemoryTimeline } from './components/MemoryTimeline';
import { MusicLounge } from './components/MusicLounge';
import { PhotoGallery } from './components/PhotoGallery';
import { BirthdayLetter } from './components/BirthdayLetter';
import { FutureWishes } from './components/FutureWishes';
import { FinalSurprise } from './components/FinalSurprise';
import { NavigationControls } from './components/NavigationControls';
import { FloatingAudioBar } from './components/FloatingAudioBar';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import { birthdayConfig } from './content/birthdayConfig';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [activeLightboxSrc, setActiveLightboxSrc] = useState<string | null>(null);

  const { isReducedMotion, toggleReducedMotion } = useReducedMotion();
  const player = useAudioPlayer();

  const handleEnter = async (withSound: boolean) => {
    setHasEntered(true);
    if (withSound) {
      await player.startExperienceAudio();
    }
  };

  const handleScrollToNext = () => {
    const nextElem = document.getElementById('chapter-little-world');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setHasEntered(false);
  };

  const handleJumpToLetter = () => {
    handleNavigateToSection('chapter-letter');
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: 'var(--ivory-text)' }}>
      {/* Cinematic Starfield Canvas Background */}
      <StarfieldCanvas isReducedMotion={isReducedMotion} />

      {/* Atmospheric Overlays */}
      <div className="film-grain-overlay" />
      <div className="vignette-overlay" />

      {/* Section 1: Secret Entry Overlay */}
      <AnimatePresence>
        {!hasEntered && (
          <IntroScreen onEnter={handleEnter} isReducedMotion={isReducedMotion} />
        )}
      </AnimatePresence>

      {/* Main Experience Once Entered */}
      {hasEntered && (
        <>
          {/* Navigation Controls Bar */}
          <NavigationControls
            isReducedMotion={isReducedMotion}
            onToggleReducedMotion={toggleReducedMotion}
            onNavigateToSection={handleNavigateToSection}
          />

          {/* Persistent Floating Audio Bar */}
          <FloatingAudioBar
            player={player}
            isReducedMotion={isReducedMotion}
            onNavigateToMusic={() => handleNavigateToSection('chapter-music')}
          />

          {/* Section 2: Birthday Reveal */}
          <BirthdayReveal
            onScrollToNext={handleScrollToNext}
            isReducedMotion={isReducedMotion}
          />

          {/* Section 3: A Little World Created For You */}
          <LittleWorldSection isReducedMotion={isReducedMotion} />

          {/* Section 4: The College Chapter */}
          <CollegeStorySection
            isReducedMotion={isReducedMotion}
            onOpenPhotoLightbox={(src) => setActiveLightboxSrc(src)}
          />

          {/* Section 5: Your Silence, My Favourite Sound */}
          <SilenceSection
            isReducedMotion={isReducedMotion}
            onOpenPhotoLightbox={(src) => setActiveLightboxSrc(src)}
          />

          {/* Section 6: My Safe Place */}
          <SafePlaceSection
            isReducedMotion={isReducedMotion}
            onOpenPhotoLightbox={(src) => setActiveLightboxSrc(src)}
          />

          {/* Section 7: When the World Disappears */}
          <WorldDisappearsSection isReducedMotion={isReducedMotion} />

          {/* Section 8: You Helped Me Rise */}
          <RiseSection isReducedMotion={isReducedMotion} />

          {/* Section 9: More Than I Ever Expected */}
          <ExpectationsSection isReducedMotion={isReducedMotion} />

          {/* Section 10: Our Little Story (Memory Timeline) */}
          <MemoryTimeline isReducedMotion={isReducedMotion} />

          {/* Section 11: Our Song — Munbe Vaa */}
          <MusicLounge
            player={player}
            isReducedMotion={isReducedMotion}
          />

          {/* Section 12: The Personal Photo Gallery */}
          <PhotoGallery
            isReducedMotion={isReducedMotion}
            activeLightboxSrc={activeLightboxSrc}
            onOpenLightbox={(src) => setActiveLightboxSrc(src)}
            onCloseLightbox={() => setActiveLightboxSrc(null)}
          />

          {/* Section 13: The Birthday Letter */}
          <BirthdayLetter isReducedMotion={isReducedMotion} />

          {/* Section 14: Wishes for Your Future */}
          <FutureWishes isReducedMotion={isReducedMotion} />

          {/* Section 15: The Final Surprise */}
          <FinalSurprise
            isReducedMotion={isReducedMotion}
            onReplay={handleReplay}
            onJumpToLetter={handleJumpToLetter}
          />

          {/* Cinematic Emotional Footer */}
          <footer
            style={{
              padding: '60px 24px 80px',
              textAlign: 'center',
              borderTop: '1px solid rgba(245, 223, 168, 0.12)',
              position: 'relative',
              zIndex: 10,
              background: 'rgba(8, 2, 7, 0.95)',
            }}
          >
            <div className="section-container" style={{ maxWidth: '600px' }}>
              <p
                className="font-handwriting"
                style={{
                  fontSize: '2rem',
                  color: 'var(--gold-champagne)',
                  marginBottom: '10px',
                }}
              >
                For Veyaashun (Mama) ❤️
              </p>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-sans)',
                  lineHeight: 1.6,
                }}
              >
                Created with all my heart by {birthdayConfig.girlfriend} • 26 October 2026
              </p>
              <p
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-faint)',
                  marginTop: '12px',
                }}
              >
                "Munbe vaa en anbe vaa... Forever grateful that I got to know you."
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
