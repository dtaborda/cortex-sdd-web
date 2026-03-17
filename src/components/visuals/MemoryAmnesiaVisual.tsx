"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
  locale?: string;
}

// Deterministic pseudo-random for SSR safety
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

const DEFAULT_DECISIONS = [
  { text: "Usar JWT over sessions", short: "JWT auth" },
  { text: "Sanitizar FTS5 queries", short: "FTS5 fix" },
  { text: "kebab-case para archivos", short: "Naming" },
  { text: "Zustand sobre Redux", short: "State mgmt" },
];

const DEFAULT_QUESTIONS = [
  { text: "\u00bfQu\u00e9 auth usamos?", short: "Auth?" },
  { text: "\u00bfC\u00f3mo se sanitiza FTS5?", short: "FTS5?" },
  { text: "\u00bfQu\u00e9 convenci\u00f3n de nombres?", short: "Naming?" },
  { text: "\u00bfQu\u00e9 state manager?", short: "State?" },
];

export function MemoryAmnesiaVisual({ data, accent, locale }: Props) {
  const isEn = locale === "en";
  const decisions = (data.decisions as typeof DEFAULT_DECISIONS) || DEFAULT_DECISIONS;
  const questions = (data.questions as typeof DEFAULT_QUESTIONS) || DEFAULT_QUESTIONS;

  const svgWidth = 740;
  const svgHeight = 460;

  // Layout zones
  const session1X = 20;
  const session1Width = 260;
  const barrierX = 320;
  const barrierWidth = 100;
  const session2X = 460;
  const session2Width = 260;

  // Vertical layout
  const headerY = 40;
  const itemStartY = 110;
  const itemGap = 72;

  const successColor = "#10B981"; // emerald
  const dangerColor = "#EF4444"; // red
  const dimColor = "#555577";

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-x-hidden overflow-y-hidden">
      {/* Ambient glow — Session 1 (warm/success) */}
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: 250,
          height: 250,
          backgroundColor: accent,
          opacity: 0.05,
          left: "20%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ambient glow — Session 2 (cold/danger) */}
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: 250,
          height: 250,
          backgroundColor: dangerColor,
          opacity: 0.04,
          left: "80%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ opacity: [0.02, 0.06, 0.02] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Glow filter — accent */}
          <filter id="mav-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow filter — red */}
          <filter id="mav-glow-red" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Barrier gradient — dramatic vertical wall */}
          <linearGradient id="mav-barrier-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={dangerColor} stopOpacity="0" />
            <stop offset="15%" stopColor={dangerColor} stopOpacity="0.15" />
            <stop offset="50%" stopColor={dangerColor} stopOpacity="0.25" />
            <stop offset="85%" stopColor={dangerColor} stopOpacity="0.15" />
            <stop offset="100%" stopColor={dangerColor} stopOpacity="0" />
          </linearGradient>

          {/* Broken connection pattern */}
          <pattern id="mav-static" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="1" height="1" fill={dangerColor} opacity="0.3" />
            <rect x="2" y="2" width="1" height="1" fill={dangerColor} opacity="0.2" />
          </pattern>

          {/* Success gradient for session 1 items */}
          <linearGradient id="mav-success-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={accent} stopOpacity="0.08" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.02" />
          </linearGradient>

          {/* Danger gradient for session 2 items */}
          <linearGradient id="mav-danger-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={dangerColor} stopOpacity="0.06" />
            <stop offset="100%" stopColor={dangerColor} stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* ══════════════════════════════════════
            SESSION 1 HEADER
            ══════════════════════════════════════ */}
        <motion.g
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Session 1 box */}
          <rect
            x={session1X + 30}
            y={headerY - 12}
            width={200}
            height={28}
            rx={6}
            fill="#14141F"
            stroke={accent}
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <text
            x={session1X + 130}
            y={headerY + 6}
            textAnchor="middle"
            className="font-mono"
            fill={accent}
            fontSize="13"
            fontWeight="600"
            letterSpacing="2"
          >
            {isEn ? "SESSION 1" : "SESIÓN 1"}
          </text>

          {/* Status indicator */}
          <motion.circle
            cx={session1X + 48}
            cy={headerY + 1}
            r="3"
            fill={successColor}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>

        {/* ══════════════════════════════════════
            SESSION 2 HEADER
            ══════════════════════════════════════ */}
        <motion.g
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <rect
            x={session2X + 30}
            y={headerY - 12}
            width={200}
            height={28}
            rx={6}
            fill="#14141F"
            stroke={dangerColor}
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <text
            x={session2X + 130}
            y={headerY + 6}
            textAnchor="middle"
            className="font-mono"
            fill={dangerColor}
            fontSize="13"
            fontWeight="600"
            letterSpacing="2"
          >
            {isEn ? "SESSION 2" : "SESIÓN 2"}
          </text>

          {/* Status indicator — blinking warning */}
          <motion.circle
            cx={session2X + 48}
            cy={headerY + 1}
            r="3"
            fill={dangerColor}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.g>

        {/* ══════════════════════════════════════
            SESSION 1 — DECISIONS (building up)
            ══════════════════════════════════════ */}
        {decisions.map((item, i) => {
          const y = itemStartY + i * itemGap;
          const delayBase = 0.4 + i * 0.35;

          return (
            <motion.g key={`decision-${i}`}>
              {/* Item background */}
              <motion.rect
                x={session1X + 10}
                y={y - 18}
                width={session1Width - 20}
                height={42}
                rx={6}
                fill="url(#mav-success-grad)"
                stroke={accent}
                strokeWidth="0.8"
                strokeOpacity="0"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1, strokeOpacity: 0.25 }}
                transition={{
                  delay: delayBase,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformOrigin: `${session1X + 10}px ${y}px` }}
              />

              {/* Check icon */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: delayBase + 0.2,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                style={{ transformOrigin: `${session1X + 30}px ${y + 2}px` }}
              >
                <circle cx={session1X + 30} cy={y + 2} r="10" fill={successColor} opacity="0.15" />
                <text
                  x={session1X + 30}
                  y={y + 7}
                  textAnchor="middle"
                  fill={successColor}
                  fontSize="14"
                  fontWeight="bold"
                >
                  \u2713
                </text>
              </motion.g>

              {/* Decision text */}
              <motion.text
                x={session1X + 48}
                y={y}
                className="font-mono"
                fill="#F0F0F5"
                fontSize="12"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delayBase + 0.15, duration: 0.4 }}
              >
                {item.text}
              </motion.text>

              {/* Tag */}
              <motion.text
                x={session1X + 48}
                y={y + 16}
                className="font-mono"
                fill={accent}
                fontSize="10"
                opacity="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: delayBase + 0.3, duration: 0.3 }}
              >
                {item.short}
              </motion.text>

              {/* Glow pulse on the check */}
              <motion.circle
                cx={session1X + 30}
                cy={y + 2}
                r="14"
                fill="none"
                stroke={successColor}
                strokeWidth="1"
                filter="url(#mav-glow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{
                  delay: delayBase + 0.35,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />
            </motion.g>
          );
        })}

        {/* ══════════════════════════════════════
            THE BARRIER — SESSION BOUNDARY
            ══════════════════════════════════════ */}
        {/* Barrier wall */}
        <motion.rect
          x={barrierX}
          y={55}
          width={barrierWidth}
          height={svgHeight - 110}
          rx={4}
          fill="url(#mav-barrier-grad)"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{
            delay: 1.8,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: `${barrierX + barrierWidth / 2}px ${svgHeight / 2}px` }}
        />

        {/* Static noise texture inside barrier */}
        <motion.rect
          x={barrierX + 2}
          y={57}
          width={barrierWidth - 4}
          height={svgHeight - 114}
          rx={3}
          fill="url(#mav-static)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.0, duration: 0.4 }}
        />

        {/* Barrier vertical lines (interference pattern) */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.line
            key={`barrier-line-${i}`}
            x1={barrierX + 10 + i * 10}
            y1={70}
            x2={barrierX + 10 + i * 10}
            y2={svgHeight - 70}
            stroke={dangerColor}
            strokeWidth="0.5"
            strokeDasharray={`${3 + seededRandom(i) * 4} ${5 + seededRandom(i + 50) * 6}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{
              delay: 2.0 + i * 0.05,
              duration: 2 + seededRandom(i + 30) * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* BARRIER LABEL */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.5 }}
        >
          {/* Label background */}
          <rect
            x={barrierX + 6}
            y={svgHeight / 2 - 28}
            width={barrierWidth - 12}
            height={56}
            rx={4}
            fill="#0A0A0F"
            stroke={dangerColor}
            strokeWidth="0.8"
            strokeOpacity="0.3"
          />

          <text
            x={barrierX + barrierWidth / 2}
            y={svgHeight / 2 - 8}
            textAnchor="middle"
            className="font-mono"
            fill={dangerColor}
            fontSize="10"
            fontWeight="bold"
            letterSpacing="1"
          >
            SESSION
          </text>
          <text
            x={barrierX + barrierWidth / 2}
            y={svgHeight / 2 + 5}
            textAnchor="middle"
            className="font-mono"
            fill={dangerColor}
            fontSize="10"
            fontWeight="bold"
            letterSpacing="1"
          >
            BOUNDARY
          </text>

          {/* Lightning bolt icon */}
          <motion.text
            x={barrierX + barrierWidth / 2}
            y={svgHeight / 2 + 22}
            textAnchor="middle"
            fill={dangerColor}
            fontSize="16"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            \u26a1
          </motion.text>
        </motion.g>

        {/* Broken connection lines — from session 1 to barrier */}
        {decisions.map((_, i) => {
          const y = itemStartY + i * itemGap + 2;
          return (
            <motion.g key={`broken-${i}`}>
              {/* Line from decision to barrier */}
              <motion.path
                d={`M ${session1X + session1Width - 8} ${y} L ${barrierX - 2} ${y}`}
                stroke={accent}
                strokeWidth="1"
                strokeDasharray="4 3"
                fill="none"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 0.2, pathLength: 1 }}
                transition={{
                  delay: 1.6 + i * 0.1,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              {/* Broken end — X mark at barrier */}
              <motion.text
                x={barrierX - 6}
                y={y + 4}
                textAnchor="middle"
                fill={dangerColor}
                fontSize="10"
                fontWeight="bold"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{
                  delay: 2.2 + i * 0.1,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                }}
                style={{ transformOrigin: `${barrierX - 6}px ${y + 4}px` }}
              >
                \u2717
              </motion.text>
            </motion.g>
          );
        })}

        {/* ══════════════════════════════════════
            SESSION 2 — QUESTIONS (confusion)
            ══════════════════════════════════════ */}
        {questions.map((item, i) => {
          const y = itemStartY + i * itemGap;
          const delayBase = 2.4 + i * 0.3;

          return (
            <motion.g key={`question-${i}`}>
              {/* Item background */}
              <motion.rect
                x={session2X + 10}
                y={y - 18}
                width={session2Width - 20}
                height={42}
                rx={6}
                fill="url(#mav-danger-grad)"
                stroke={dangerColor}
                strokeWidth="0.8"
                strokeOpacity="0"
                strokeDasharray="4 3"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1, strokeOpacity: 0.2 }}
                transition={{
                  delay: delayBase,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformOrigin: `${session2X + session2Width - 10}px ${y}px` }}
              />

              {/* Question mark icon */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: delayBase + 0.2,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                style={{ transformOrigin: `${session2X + 30}px ${y + 2}px` }}
              >
                <circle cx={session2X + 30} cy={y + 2} r="10" fill={dangerColor} opacity="0.12" />
                <text
                  x={session2X + 30}
                  y={y + 7}
                  textAnchor="middle"
                  fill={dangerColor}
                  fontSize="14"
                  fontWeight="bold"
                >
                  ?
                </text>
              </motion.g>

              {/* Question text */}
              <motion.text
                x={session2X + 48}
                y={y}
                className="font-mono"
                fill="#8888AA"
                fontSize="12"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 0.7, x: 0 }}
                transition={{ delay: delayBase + 0.15, duration: 0.4 }}
              >
                {item.text}
              </motion.text>

              {/* Tag — lost reference */}
              <motion.text
                x={session2X + 48}
                y={y + 16}
                className="font-mono"
                fill={dangerColor}
                fontSize="10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: delayBase + 0.3, duration: 0.3 }}
              >
                {item.short} {isEn ? "— no context" : "— sin contexto"}
              </motion.text>

              {/* Pulsing question glow */}
              <motion.circle
                cx={session2X + 30}
                cy={y + 2}
                r="14"
                fill="none"
                stroke={dangerColor}
                strokeWidth="1"
                filter="url(#mav-glow-red)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  delay: delayBase + 0.5,
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.g>
          );
        })}

        {/* ══════════════════════════════════════
            BOTTOM LABEL — AMNESIA
            ══════════════════════════════════════ */}
        <motion.g
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <rect
            x={svgWidth / 2 - 160}
            y={svgHeight - 52}
            width={320}
            height={32}
            rx={6}
            fill="#14141F"
            stroke={dangerColor}
            strokeWidth="0.8"
            strokeOpacity="0.25"
          />

          <motion.text
            x={svgWidth / 2}
            y={svgHeight - 32}
            textAnchor="middle"
            className="font-mono"
            fill={dangerColor}
            fontSize="14"
            fontWeight="700"
            letterSpacing="4"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {isEn ? "CROSS-SESSION AMNESIA" : "AMNESIA ENTRE SESIONES"}
          </motion.text>
        </motion.g>

        {/* ══════════════════════════════════════
            AMBIENT PARTICLES
            ══════════════════════════════════════ */}
        {/* Success particles — session 1 side */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.circle
            key={`ap-s1-${i}`}
            r={1 + seededRandom(i + 100) * 1.5}
            fill={accent}
            initial={{
              cx: session1X + seededRandom(i + 110) * session1Width,
              cy: 80 + seededRandom(i + 120) * 300,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.2, 0],
              cy: [
                80 + seededRandom(i + 120) * 300,
                60 + seededRandom(i + 120) * 300,
              ],
            }}
            transition={{
              delay: 0.5 + i * 0.8,
              duration: 3 + seededRandom(i + 130) * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Danger particles — session 2 side */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.circle
            key={`ap-s2-${i}`}
            r={1 + seededRandom(i + 200) * 1.2}
            fill={dangerColor}
            initial={{
              cx: session2X + seededRandom(i + 210) * session2Width,
              cy: 80 + seededRandom(i + 220) * 300,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.15, 0],
              cy: [
                80 + seededRandom(i + 220) * 300,
                100 + seededRandom(i + 220) * 300,
              ],
            }}
            transition={{
              delay: 2.5 + i * 0.7,
              duration: 3.5 + seededRandom(i + 230) * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating data particles that die at the barrier */}
        {Array.from({ length: 4 }).map((_, i) => {
          const y = itemStartY + i * itemGap + 2;
          return (
            <motion.circle
              key={`dying-${i}`}
              r="2.5"
              fill={accent}
              filter="url(#mav-glow)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
                cx: [session1X + session1Width - 8, barrierX - 5],
                cy: [y, y],
              }}
              transition={{
                delay: 1.2 + i * 0.4,
                duration: 0.6,
                ease: "easeIn",
                repeat: Infinity,
                repeatDelay: 4 + i * 0.5,
              }}
            />
          );
        })}

        {/* Barrier electric sparks */}
        {Array.from({ length: 6 }).map((_, i) => {
          const sparkY = 80 + seededRandom(i + 300) * (svgHeight - 160);
          const sparkX = barrierX + seededRandom(i + 310) * barrierWidth;
          return (
            <motion.circle
              key={`spark-${i}`}
              cx={sparkX}
              cy={sparkY}
              r={1}
              fill={dangerColor}
              filter="url(#mav-glow-red)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{
                delay: 2.2 + seededRandom(i + 320) * 2,
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 2 + seededRandom(i + 330) * 3,
              }}
              style={{ transformOrigin: `${sparkX}px ${sparkY}px` }}
            />
          );
        })}
      </svg>
    </div>
  );
}
