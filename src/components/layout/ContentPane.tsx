"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SlideDefinition, ModuleDefinition } from "@/types/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface ContentPaneProps {
  slide: SlideDefinition;
  module: ModuleDefinition;
  slideIndex: number;
  totalModuleSlides: number;
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

const contentVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

const transition = {
  duration: 0.4,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function ContentPane({
  slide,
  module,
  slideIndex,
  totalModuleSlides,
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
}: ContentPaneProps) {
  const { t } = useI18n();
  const accent = module.accentColor;

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="flex-1 overflow-y-auto px-5 lg:px-8 py-6 lg:py-8"
        >
          {/* Eyebrow */}
          {slide.eyebrow && (
            <p
              className="font-mono text-xs uppercase tracking-widest mb-4"
              style={{ color: accent }}
            >
              {slide.eyebrow} &middot; {module.shortTitle}
            </p>
          )}

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-extrabold text-text-primary leading-tight mb-3">
            {slide.title}
          </h1>

          {/* Subtitle */}
          {slide.subtitle && (
            <p className="text-lg text-text-secondary mb-6">
              {slide.subtitle}
            </p>
          )}

          {/* Body */}
          <p className="text-base text-text-secondary leading-relaxed max-w-lg mb-6">
            {slide.body}
          </p>

          {/* Bullets */}
          {slide.bullets && slide.bullets.length > 0 && (
            <ul className="space-y-2.5 mb-6 max-w-lg">
              {slide.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-2 size-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: accent }}
                  />
                  <span className="text-sm text-text-secondary leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Key Message */}
          {slide.keyMessage && (
            <div
              className="rounded-lg px-5 py-4 mb-6 max-w-lg border-l-2"
              style={{
                borderLeftColor: "#00F0FF",
                backgroundColor: "rgba(0, 240, 255, 0.08)",
              }}
            >
              <p className="text-sm font-medium text-accent-cyan leading-relaxed">
                {slide.keyMessage}
              </p>
            </div>
          )}

          {/* Next Bridge */}
          {slide.nextBridge && (
            <div className="border-t border-border-subtle pt-5 mt-6 max-w-lg">
              <p className="text-sm italic text-text-muted leading-relaxed">
                {slide.nextBridge}
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Bottom navigation */}
      <div className="shrink-0 flex items-center justify-between px-5 lg:px-8 py-4 border-t border-border-subtle">
        <button
          onClick={onPrev}
          disabled={!canGoPrev}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-mono",
            "transition-colors duration-150",
            canGoPrev
              ? "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
              : "text-text-ghost cursor-not-allowed"
          )}
        >
          <ChevronLeft className="size-4" />
          <span className="hidden sm:inline">{t("nav.prev")}</span>
        </button>

        <span className="text-xs font-mono text-text-ghost">
          {slideIndex + 1} / {totalModuleSlides}
        </span>

        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-mono",
            "transition-colors duration-150",
            canGoNext
              ? "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
              : "text-text-ghost cursor-not-allowed"
          )}
        >
          <span className="hidden sm:inline">{t("nav.next")}</span>
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
