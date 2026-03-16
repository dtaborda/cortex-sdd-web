"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number; // 0 to 100
  accentColor: string;
}

export function ProgressBar({ progress, accentColor }: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div
      className="fixed left-0 right-0 z-40 h-1 bg-bg-surface"
      style={{ top: 56 }}
    >
      <motion.div
        className="h-full rounded-r-full"
        style={{
          background: `linear-gradient(90deg, ${accentColor}CC, ${accentColor})`,
          boxShadow: `0 0 12px ${accentColor}40, 0 0 4px ${accentColor}20`,
        }}
        initial={false}
        animate={{ width: `${clampedProgress}%` }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
