
import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TvIllustration } from './TvIllustration';

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<'enter' | 'exit'>('enter');
  const [showLiveDot, setShowLiveDot] = useState(false);

  // Partículas geradas uma única vez
  const particles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 2,
      color: ['#00b37e40', '#f0a50040', '#ffffff25'][i % 3]
    })), []
  );

  useEffect(() => {
    // Aparece o dot AO VIVO aos 2.0s
    const dotTimer = setTimeout(() => setShowLiveDot(true), 2000);
    
    // Iniciar saída após 2.8s
    const exitTimer = setTimeout(() => setPhase('exit'), 2800);
    
    // Chamar onComplete após a animação de saída completar
    const completeTimer = setTimeout(() => onComplete(), 3400);

    return () => {
      clearTimeout(dotTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Respeitar prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    setTimeout(onComplete, 1500);
    return (
      <div className="intro-container">
        <div style={{ width: 'clamp(180px, 45vw, 380px)' }}>
          <TvIllustration showContent={true} />
        </div>
        <h1 className="intro-title" style={{ fontSize: 'clamp(2.25rem, 7vw, 4.5rem)', marginTop: '20px' }}>StreamTV</h1>
        <p className="intro-subtitle" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)' }}>BRASIL</p>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="intro-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Partículas de fundo */}
          <div className="intro-particles" aria-hidden="true">
            {particles.map(p => (
              <div
                key={p.id}
                className="particle"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  background: p.color,
                  animationDuration: `${p.duration}s`,
                  animationDelay: `${p.delay}s`
                }}
              />
            ))}
          </div>

          {/* Gradiente radial de fundo */}
          <div className="intro-bg-glow" aria-hidden="true" />

          {/* Vinheta */}
          <div className="intro-vignette" aria-hidden="true" />

          {/* Televisor animado */}
          <motion.div
            className="intro-tv-wrapper"
            initial={{ scale: 0.3, opacity: 0, rotate: -5 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotate: 0,
              transition: { type: 'spring', stiffness: 200, damping: 20, delay: 0.3 }
            }}
          >
            <TvIllustration showLiveDot={showLiveDot} />
          </motion.div>

          {/* "StreamTV" — letras individuais */}
          <motion.h1
            className="intro-title"
            aria-label="StreamTV"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04, delayChildren: 1.2 } }
            }}
          >
            {'StreamTV'.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20, rotateX: -40 },
                  visible: {
                    opacity: 1, y: 0, rotateX: 0,
                    transition: { type: 'spring', stiffness: 300, damping: 24 }
                  }
                }}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* "BRASIL" — expansão de letter-spacing */}
          <motion.p
            className="intro-subtitle"
            initial={{ opacity: 0, letterSpacing: '0.8em', filter: 'blur(8px)' }}
            animate={{ opacity: 1, letterSpacing: '0.15em', filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.55 }}
          >
            BRASIL
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="intro-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            Canais ao vivo • Sempre com você
          </motion.p>

          {/* Barra de progresso */}
          <motion.div
            className="intro-progress-bar"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: 1, 
              opacity: [0, 1, 1, 0],
              transition: {
                scaleX: { duration: 0.6, ease: 'easeInOut', delay: 2.1 },
                opacity: { times: [0, 0.1, 0.8, 1], duration: 0.9, delay: 2.1 }
              }
            }}
            style={{ transformOrigin: 'left center' }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
