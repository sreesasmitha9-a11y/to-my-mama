import React, { useEffect, useRef } from 'react';

interface StarfieldCanvasProps {
  isReducedMotion?: boolean;
}

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  color: string;
  wobble: number;
}

export const StarfieldCanvas: React.FC<StarfieldCanvasProps> = ({ isReducedMotion = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    const starColors = ['#fdfaf3', '#f5dfa8', '#f8bad0', '#ffe4b5', '#ffffff'];
    const particleColors = ['rgba(245, 223, 168, 0.45)', 'rgba(232, 155, 180, 0.35)', 'rgba(255, 255, 255, 0.4)'];

    let stars: Star[] = [];
    let particles: Particle[] = [];

    const numStars = Math.min(180, Math.floor((width * height) / 8000));
    const numParticles = isReducedMotion ? 0 : 35;

    function initStars() {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.8 + 0.4,
          baseAlpha: Math.random() * 0.7 + 0.2,
          alpha: Math.random() * 0.7 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }

      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2.5 + 0.8,
          speedX: (Math.random() - 0.5) * 0.25,
          speedY: -Math.random() * 0.4 - 0.1,
          alpha: Math.random() * 0.6 + 0.2,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          wobble: Math.random() * Math.PI * 2,
        });
      }
    }

    initStars();

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.02;
      mouseY += (targetMouseY - mouseY) * 0.02;
      const offsetX = (mouseX - width / 2) * 0.015;
      const offsetY = (mouseY - height / 2) * 0.015;

      // Draw Twinkling Stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!isReducedMotion) {
          star.alpha += star.twinkleSpeed;
          if (star.alpha > 1 || star.alpha < 0.15) {
            star.twinkleSpeed = -star.twinkleSpeed;
          }
        }

        ctx.save();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.beginPath();
        ctx.arc(star.x + offsetX, star.y + offsetY, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow around larger stars
        if (star.size > 1.4) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = star.color;
          ctx.fill();
        }
        ctx.restore();
      }

      // Draw Floating Golden Particles
      if (!isReducedMotion) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.speedX + Math.sin(p.wobble) * 0.15;
          p.y += p.speedY;
          p.wobble += 0.02;

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          ctx.save();
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(245, 223, 168, 0.6)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
};
