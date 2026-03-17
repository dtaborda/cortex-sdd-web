"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { SlideDefinition, ModuleDefinition } from "@/types/content";
import { VisualRenderer } from "@/components/visuals/VisualRenderer";

interface VisualPaneProps {
  slide: SlideDefinition;
  module: ModuleDefinition;
  locale?: string;
}

export function VisualPane({ slide, module, locale }: VisualPaneProps) {
  const accent = module.accentColor;

  return (
    <div className="relative h-full rounded-xl lg:rounded-2xl border border-border-subtle bg-bg-surface overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Accent glow — top-right corner */}
      <div
        className="absolute -top-20 -right-20 size-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ backgroundColor: accent }}
      />

      {/* Visual content */}
      <div className="relative z-10 h-full flex items-center justify-center p-2 md:p-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex items-center justify-center"
          >
            <VisualRenderer slide={slide} module={module} locale={locale} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
