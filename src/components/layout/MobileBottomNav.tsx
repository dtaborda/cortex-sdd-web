"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileBottomNavProps {
  moduleName: string;
  slideIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  accentColor: string;
}

export function MobileBottomNav({
  moduleName,
  slideIndex,
  totalSlides,
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  accentColor,
}: MobileBottomNavProps) {
  return (
    <div
      className={cn(
        "lg:hidden fixed bottom-0 left-0 right-0 z-40",
        "h-[60px] flex items-center justify-between px-2",
        "border-t border-border-subtle backdrop-blur-md pb-safe"
      )}
      style={{ backgroundColor: "rgba(5, 5, 8, 0.95)" }}
    >
      {/* Prev button */}
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={cn(
          "flex items-center justify-center w-11 h-11 rounded-lg",
          "transition-colors duration-150",
          canGoPrev
            ? "text-text-secondary hover:text-text-primary hover:bg-bg-elevated active:bg-bg-elevated"
            : "text-text-ghost cursor-not-allowed"
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Center — module name + slide counter */}
      <div className="flex-1 flex flex-col items-center justify-center min-w-0 px-2">
        <span className="text-xs font-medium text-text-primary truncate max-w-[200px]">
          {moduleName}
        </span>
        <span
          className="text-[11px] font-mono mt-0.5"
          style={{ color: accentColor }}
        >
          {slideIndex + 1} / {totalSlides}
        </span>
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={cn(
          "flex items-center justify-center w-11 h-11 rounded-lg",
          "transition-colors duration-150",
          canGoNext
            ? "text-text-secondary hover:text-text-primary hover:bg-bg-elevated active:bg-bg-elevated"
            : "text-text-ghost cursor-not-allowed"
        )}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
