"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
  locale?: string;
}

export function HeroVisual({ data, accent, locale }: Props) {
  const moduleNumber = (data.moduleNumber as number) ?? null;
  const moduleTitle = (data.moduleTitle as string) ?? "";

  // If no explicit data, try to infer from context or show a generic visual
  const displayNumber = moduleNumber !== null ? String(moduleNumber).padStart(2, "0") : "";

  return (
    <div className="w-full max-w-2xl flex flex-col items-center justify-center relative">
      {/* Background geometric decorations */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Concentric circles */}
        {[180, 140, 100].map((r, i) => (
          <motion.div
            key={r}
            className="absolute rounded-full border"
            style={{
              width: r * 2,
              height: r * 2,
              borderColor: `${accent}${i === 0 ? "08" : i === 1 ? "10" : "18"}`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.2 + i * 0.15,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}

        {/* Subtle cross lines */}
        <motion.div
          className="absolute w-px h-64"
          style={{ backgroundColor: `${accent}10` }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute h-px w-64"
          style={{ backgroundColor: `${accent}10` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      {/* Module number */}
      {displayNumber && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10"
        >
          {/* Glow effect behind number */}
          <div
            className="absolute inset-0 blur-3xl opacity-20 rounded-full"
            style={{ backgroundColor: accent }}
          />

          <span
            className="text-[120px] leading-none font-mono font-bold tracking-tighter relative"
            style={{
              color: accent,
              opacity: 0.15,
              textShadow: `0 0 60px ${accent}40`,
            }}
          >
            {displayNumber}
          </span>
        </motion.div>
      )}

      {/* Module title */}
      {moduleTitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg font-medium text-text-secondary text-center relative z-10 mt-2"
        >
          {moduleTitle}
        </motion.p>
      )}

      {/* When no explicit data, show a decorative pattern */}
      {!displayNumber && !moduleTitle && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          {/* Abstract logo / icon */}
          <svg width="160" height="160" viewBox="0 0 120 120" fill="none">
            <motion.circle
              cx="60"
              cy="60"
              r="40"
              stroke={accent}
              strokeWidth="1"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.circle
              cx="60"
              cy="60"
              r="24"
              stroke={accent}
              strokeWidth="1.5"
              opacity="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 0.3,
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
            <motion.circle
              cx="60"
              cy="60"
              r="8"
              fill={accent}
              opacity="0.6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            />
            {/* Corner decorations */}
            {[0, 90, 180, 270].map((deg) => (
              <motion.line
                key={deg}
                x1="60"
                y1="15"
                x2="60"
                y2="25"
                stroke={accent}
                strokeWidth="1"
                opacity="0.3"
                transform={`rotate(${deg} 60 60)`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 0.8 + deg * 0.001 }}
              />
            ))}
          </svg>
        </motion.div>
      )}
    </div>
  );
}
