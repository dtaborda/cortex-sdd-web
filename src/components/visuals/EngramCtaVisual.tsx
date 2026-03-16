"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
}

// Deterministic pseudo-random for SSR safety
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

const DEFAULT_FEATURES = [
  "SQLite + FTS5 local",
  "Zero config",
  "Cross-session memory",
  "Claude Code & Cursor",
  "MCP compatible",
  "Open source MIT",
];

export function EngramCtaVisual({ data, accent }: Props) {
  const author = (data.author as string) || "Gentleman Programming";
  const repo =
    (data.repo as string) || "https://github.com/gentleman-programming/engram";
  const installCommand = (data.installCommand as string) || "npx engram init";
  const features = (data.features as string[]) || DEFAULT_FEATURES;

  // Extract display repo name from URL
  const repoDisplay = repo.replace("https://github.com/", "");

  const svgWidth = 640;
  const svgHeight = 480;

  const centerX = svgWidth / 2;

  // Layout zones
  const titleY = 55;
  const terminalY = 120;
  const terminalHeight = 65;
  const featuresStartY = 235;
  const authorY = 395;
  const githubY = 430;

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        className="absolute rounded-full blur-[140px]"
        style={{
          width: 350,
          height: 350,
          backgroundColor: accent,
          opacity: 0.08,
          left: "50%",
          top: "40%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full max-w-[640px]"
        style={{ maxHeight: "88vh" }}
      >
        <defs>
          {/* Glow filter */}
          <filter id="ecta-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft glow */}
          <filter id="ecta-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Terminal gradient */}
          <linearGradient id="ecta-term-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0A0A0F" />
            <stop offset="50%" stopColor="#14141F" />
            <stop offset="100%" stopColor="#0A0A0F" />
          </linearGradient>

          {/* Feature pill gradient */}
          <linearGradient id="ecta-pill-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.08" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* ══════════════════════════════════════
            ENGRAM TITLE with glow
            ══════════════════════════════════════ */}
        {/* Background glow behind title */}
        <motion.ellipse
          cx={centerX}
          cy={titleY}
          rx={120}
          ry={25}
          fill={accent}
          opacity="0"
          filter="url(#ecta-glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ delay: 0.3, duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ENGRAM text */}
        <motion.text
          x={centerX}
          y={titleY + 12}
          textAnchor="middle"
          className="font-mono"
          fill="#F0F0F5"
          fontSize="36"
          fontWeight="800"
          letterSpacing="8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          ENGRAM
        </motion.text>

        {/* Subtitle */}
        <motion.text
          x={centerX}
          y={titleY + 35}
          textAnchor="middle"
          className="font-mono"
          fill={accent}
          fontSize="10"
          letterSpacing="3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          PERSISTENT MEMORY FOR AI AGENTS
        </motion.text>

        {/* ══════════════════════════════════════
            TERMINAL BOX
            ══════════════════════════════════════ */}
        {/* Terminal outer frame */}
        <motion.rect
          x={centerX - 200}
          y={terminalY}
          width={400}
          height={terminalHeight}
          rx={8}
          fill="url(#ecta-term-grad)"
          stroke={accent}
          strokeWidth="1"
          strokeOpacity="0"
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={{ opacity: 1, scaleX: 1, strokeOpacity: 0.35 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: `${centerX}px ${terminalY + terminalHeight / 2}px` }}
        />

        {/* Terminal glow border */}
        <motion.rect
          x={centerX - 200}
          y={terminalY}
          width={400}
          height={terminalHeight}
          rx={8}
          fill="none"
          stroke={accent}
          strokeWidth="1.5"
          filter="url(#ecta-soft-glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{
            delay: 1.2,
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Terminal dots (macOS style) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.0, duration: 0.4 }}
        >
          <circle cx={centerX - 180} cy={terminalY + 14} r="3" fill="#FF5F57" opacity="0.6" />
          <circle cx={centerX - 168} cy={terminalY + 14} r="3" fill="#FFBD2E" opacity="0.6" />
          <circle cx={centerX - 156} cy={terminalY + 14} r="3" fill="#28CA42" opacity="0.6" />
        </motion.g>

        {/* Dollar sign prompt */}
        <motion.text
          x={centerX - 170}
          y={terminalY + 42}
          className="font-mono"
          fill="#555577"
          fontSize="15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.1, duration: 0.3 }}
        >
          $
        </motion.text>

        {/* Install command — types out */}
        {installCommand.split("").map((char, i) => (
          <motion.text
            key={`cmd-${i}`}
            x={centerX - 155 + i * 10}
            y={terminalY + 42}
            className="font-mono"
            fill={accent}
            fontSize="15"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.3 + i * 0.06,
              duration: 0.05,
            }}
          >
            {char}
          </motion.text>
        ))}

        {/* Blinking cursor */}
        <motion.rect
          x={centerX - 155 + installCommand.length * 10 + 3}
          y={terminalY + 30}
          width={8}
          height={16}
          fill={accent}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{
            delay: 1.3 + installCommand.length * 0.06 + 0.2,
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ══════════════════════════════════════
            FEATURE PILLS
            ══════════════════════════════════════ */}
        {(() => {
          // Calculate pill positions in 2 rows
          const pillsPerRow = 3;
          const pillWidth = 160;
          const pillHeight = 32;
          const pillGapX = 16;
          const pillGapY = 14;
          const totalRowWidth = pillsPerRow * pillWidth + (pillsPerRow - 1) * pillGapX;
          const rowStartX = centerX - totalRowWidth / 2;

          return features.map((feature, i) => {
            const row = Math.floor(i / pillsPerRow);
            const col = i % pillsPerRow;
            const x = rowStartX + col * (pillWidth + pillGapX);
            const y = featuresStartY + row * (pillHeight + pillGapY);
            const delayBase = 2.0 + i * 0.15;

            return (
              <motion.g key={`feat-${i}`}>
                {/* Pill background */}
                <motion.rect
                  x={x}
                  y={y}
                  width={pillWidth}
                  height={pillHeight}
                  rx={pillHeight / 2}
                  fill="url(#ecta-pill-grad)"
                  stroke={accent}
                  strokeWidth="0.8"
                  strokeOpacity="0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, strokeOpacity: 0.25 }}
                  transition={{
                    delay: delayBase,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ transformOrigin: `${x + pillWidth / 2}px ${y + pillHeight / 2}px` }}
                />

                {/* Dot indicator */}
                <motion.circle
                  cx={x + 14}
                  cy={y + pillHeight / 2}
                  r="3"
                  fill={accent}
                  opacity="0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: delayBase + 0.1, duration: 0.3 }}
                />

                {/* Feature text */}
                <motion.text
                  x={x + 24}
                  y={y + pillHeight / 2 + 4}
                  className="font-mono"
                  fill="#F0F0F5"
                  fontSize="10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.85 }}
                  transition={{ delay: delayBase + 0.1, duration: 0.3 }}
                >
                  {feature}
                </motion.text>
              </motion.g>
            );
          });
        })()}

        {/* ══════════════════════════════════════
            DIVIDER LINE
            ══════════════════════════════════════ */}
        <motion.line
          x1={centerX - 120}
          y1={authorY - 30}
          x2={centerX + 120}
          y2={authorY - 30}
          stroke={accent}
          strokeWidth="0.5"
          strokeOpacity="0"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1, strokeOpacity: 0.2 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          style={{ transformOrigin: `${centerX}px ${authorY - 30}px` }}
        />

        {/* ══════════════════════════════════════
            AUTHOR
            ══════════════════════════════════════ */}
        <motion.text
          x={centerX}
          y={authorY}
          textAnchor="middle"
          className="font-mono"
          fill="#8888AA"
          fontSize="11"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 3.0, duration: 0.5 }}
        >
          {`Creado por ${author}`}
        </motion.text>

        {/* ══════════════════════════════════════
            GITHUB LINK
            ══════════════════════════════════════ */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* GitHub icon (octocat silhouette) */}
          <motion.g transform={`translate(${centerX - 90}, ${githubY - 12})`}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#8888AA">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.g>

          {/* Repo link text */}
          <motion.text
            x={centerX - 68}
            y={githubY}
            className="font-mono"
            fill={accent}
            fontSize="11"
            opacity="0.7"
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            {repoDisplay}
          </motion.text>
        </motion.g>

        {/* ══════════════════════════════════════
            AMBIENT PARTICLES
            ══════════════════════════════════════ */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.circle
            key={`amb-${i}`}
            r={1 + seededRandom(i + 500) * 1.5}
            fill={accent}
            initial={{
              cx: 60 + seededRandom(i + 510) * (svgWidth - 120),
              cy: 40 + seededRandom(i + 520) * (svgHeight - 80),
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.2, 0],
              cy: [
                40 + seededRandom(i + 520) * (svgHeight - 80),
                20 + seededRandom(i + 520) * (svgHeight - 80),
              ],
            }}
            transition={{
              delay: 0.5 + i * 0.6,
              duration: 3 + seededRandom(i + 530) * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Corner decorative elements */}
        {[
          { x: 30, y: 30, rot: 0 },
          { x: svgWidth - 30, y: 30, rot: 90 },
          { x: svgWidth - 30, y: svgHeight - 30, rot: 180 },
          { x: 30, y: svgHeight - 30, rot: 270 },
        ].map((corner, i) => (
          <motion.g
            key={`corner-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
          >
            <line
              x1={corner.x}
              y1={corner.y}
              x2={corner.x + (i === 0 || i === 3 ? 20 : -20)}
              y2={corner.y}
              stroke={accent}
              strokeWidth="0.8"
            />
            <line
              x1={corner.x}
              y1={corner.y}
              x2={corner.x}
              y2={corner.y + (i === 0 || i === 1 ? 20 : -20)}
              stroke={accent}
              strokeWidth="0.8"
            />
          </motion.g>
        ))}
      </svg>

      {/* Actual clickable GitHub link (overlay on SVG area) */}
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute font-mono text-xs opacity-0 hover:opacity-100 transition-opacity"
        style={{
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          color: accent,
          textDecoration: "underline",
          padding: "8px 16px",
        }}
      >
        {repoDisplay}
      </a>
    </div>
  );
}
