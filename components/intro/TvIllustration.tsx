
import React from 'react';

interface TvIllustrationProps {
  showContent?: boolean;
  showLiveDot?: boolean;
}

export function TvIllustration({
  showContent = true,
  showLiveDot = false
}: TvIllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="tv-svg"
      role="img"
      aria-label="Televisor StreamTV Brasil"
    >
      <defs>
        {/* Gradiente do gabinete */}
        <linearGradient id="tvBodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2228" />
          <stop offset="100%" stopColor="#0f1318" />
        </linearGradient>

        {/* Gradiente da tela */}
        <radialGradient id="tvScreenGrad" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#0d1a24" />
          <stop offset="100%" stopColor="#050a0e" />
        </radialGradient>

        {/* Gradiente da barra de progresso na tela */}
        <linearGradient id="progressGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#009c3b" />
          <stop offset="50%" stopColor="#00b37e" />
          <stop offset="100%" stopColor="#f0a500" />
        </linearGradient>

        {/* Glow filter para a borda da TV */}
        <filter id="tvGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Clip para o conteúdo da tela */}
        <clipPath id="screenClip">
          <rect x="38" y="34" width="244" height="138" rx="6" />
        </clipPath>

        {/* Ruído estático (feTurbulence) */}
        <filter id="staticNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.15" />
          </feComponentTransfer>
        </filter>
      </defs>

      {/* === GABINETE DA TV === */}
      <rect
        x="20" y="16"
        width="280" height="174"
        rx="16"
        fill="url(#tvBodyGrad)"
        stroke="#00b37e"
        strokeWidth="1.5"
        strokeOpacity="0.6"
        filter="url(#tvGlow)"
        className="tv-body"
      />

      {/* === TELA DA TV === */}
      <rect
        x="38" y="34"
        width="244" height="138"
        rx="7"
        fill="url(#tvScreenGrad)"
        stroke="#00b37e"
        strokeWidth="0.75"
        strokeOpacity="0.15"
        className="tv-screen"
      />

      {/* === REFLEXO NA TELA === */}
      <ellipse
        cx="96" cy="65"
        rx="42" ry="18"
        fill="white"
        fillOpacity="0.035"
        transform="rotate(-20 96 65)"
      />

      {/* === CONTEÚDO DA TELA === */}
      <g clipPath="url(#screenClip)" className="tv-screen-content">
        {/* Ruído estático — aparece brevemente no início */}
        <rect
          x="38" y="34" width="244" height="138"
          filter="url(#staticNoise)"
          fill="white"
          fillOpacity="0.08"
          className="tv-static"
        />

        {showContent && (
          <>
            <text
              x="160" y="94"
              textAnchor="middle"
              fontFamily="Syne, sans-serif"
              fontWeight="800"
              fontSize="22"
              fill="#e8edf2"
              className="tv-screen-title"
            >
              StreamTV
            </text>

            <text
              x="160" y="114"
              textAnchor="middle"
              fontFamily="Syne, sans-serif"
              fontWeight="700"
              fontSize="10"
              fill="#00b37e"
              letterSpacing="4"
              className="tv-screen-subtitle"
            >
              BRASIL
            </text>

            <line
              x1="120" y1="125"
              x2="200" y2="125"
              stroke="url(#progressGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="tv-screen-line"
            />
          </>
        )}

        {/* Dot AO VIVO (aparece no final) */}
        {showLiveDot && (
          <g className="tv-live-indicator">
            <circle cx="230" cy="50" r="4" fill="#ff3b3b" className="live-dot" />
            <text
              x="238" y="54"
              fontFamily="DM Sans, sans-serif"
              fontWeight="700"
              fontSize="6"
              fill="#ff3b3b"
              letterSpacing="1"
            >
              AO VIVO
            </text>
          </g>
        )}
      </g>

      {/* === LINHA DECORATIVA NO GABINETE === */}
      <line
        x1="28" y1="176"
        x2="292" y2="176"
        stroke="#00b37e"
        strokeWidth="0.75"
        strokeOpacity="0.2"
      />

      {/* === BOTÕES DECORATIVOS === */}
      <circle cx="270" cy="183" r="4" fill="#00b37e" fillOpacity="0.9" />
      <circle cx="256" cy="183" r="3" fill="#1a2228" stroke="#2a3540" strokeWidth="1" />
      <circle cx="245" cy="183" r="3" fill="#1a2228" stroke="#2a3540" strokeWidth="1" />

      {/* === PESCOÇO / SUPORTE === */}
      <rect
        x="140" y="190"
        width="40" height="20"
        fill="#141a20"
        stroke="#1e2830"
        strokeWidth="0.75"
      />

      {/* === BASE === */}
      <rect
        x="100" y="208"
        width="120" height="14"
        rx="7"
        fill="#141a20"
        stroke="#1e2830"
        strokeWidth="0.75"
      />

      {/* === BRILHO SUTIL NAS BORDAS === */}
      <rect
        x="20" y="16"
        width="280" height="174"
        rx="16"
        fill="none"
        stroke="white"
        strokeWidth="1"
        strokeOpacity="0.04"
      />
    </svg>
  );
}
