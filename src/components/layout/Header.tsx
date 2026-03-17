"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff, Menu } from "lucide-react";
import type { ModuleDefinition } from "@/types/content";
import { useI18n, SUPPORTED_LOCALES } from "@/lib/i18n";
import { FlagIcon } from "@/components/ui/FlagIcon";
import { cn } from "@/lib/utils";

interface HeaderProps {
  currentModule?: ModuleDefinition;
  isFocusMode: boolean;
  onToggleFocus: () => void;
  onToggleMobileSidebar?: () => void;
}

export function Header({
  currentModule,
  isFocusMode,
  onToggleFocus,
  onToggleMobileSidebar,
}: HeaderProps) {
  const { locale, setLocale, t } = useI18n();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[56px]",
        "flex items-center justify-between px-3 md:px-5",
        "border-b border-border-subtle backdrop-blur-md"
      )}
      style={{ backgroundColor: "rgba(5, 5, 8, 0.95)" }}
    >
      {/* Left — Hamburger (mobile) + Logo */}
      <div className="flex items-center gap-2 min-w-0 shrink-0">
        {/* Mobile hamburger menu */}
        <button
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md text-text-muted hover:text-text-primary hover:bg-bg-elevated transition-colors"
          onClick={onToggleMobileSidebar}
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex flex-col justify-center gap-0">
          <span className="font-mono font-bold text-base lg:text-lg leading-tight tracking-tight">
            {/* Compact logo on mobile */}
            <span className="lg:hidden">
              <span className="text-accent-cyan">d</span>
              <span className="text-text-primary">T</span>
            </span>
            {/* Full logo on desktop */}
            <span className="hidden lg:inline">
              <span className="text-accent-cyan">d</span>
              <span className="text-text-primary">Taborda</span>
            </span>
          </span>
          <span className="hidden md:block font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted leading-none">
            {t("header.tagline")}
          </span>
        </div>
      </div>

      {/* Center — Current module title (hidden on mobile) */}
      <div className="hidden md:flex flex-1 items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {currentModule && (
            <motion.div
              key={currentModule.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5"
            >
              <span
                className="inline-block size-2 rounded-full shrink-0"
                style={{ backgroundColor: currentModule.accentColor }}
              />
              <span className="text-sm font-medium text-text-primary truncate">
                {currentModule.title}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right — Locale flags + Focus toggle + keyboard hints */}
      <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
        {/* Language selector — always visible, slightly smaller on mobile */}
        <div className="flex items-center gap-0.5 md:gap-1">
          {SUPPORTED_LOCALES.map((loc) => (
            <button
              key={loc.code}
              onClick={() => setLocale(loc.code)}
              className={cn(
                "px-1 md:px-1.5 py-1 rounded transition-all duration-150",
                locale === loc.code
                  ? "opacity-100 scale-110 bg-bg-elevated"
                  : "opacity-40 hover:opacity-70"
              )}
              title={loc.label}
            >
              <FlagIcon country={loc.country} className="w-6 h-4 md:w-8 md:h-6" />
            </button>
          ))}
        </div>

        {/* Keyboard hints — desktop only */}
        <div className="hidden lg:flex items-center gap-1.5 text-text-ghost">
          <kbd className="inline-flex items-center justify-center h-5 min-w-[20px] px-1 rounded border border-border-default bg-bg-elevated text-[10px] font-mono">
            &larr;
          </kbd>
          <kbd className="inline-flex items-center justify-center h-5 min-w-[20px] px-1 rounded border border-border-default bg-bg-elevated text-[10px] font-mono">
            &rarr;
          </kbd>
        </div>

        {/* Focus mode toggle — hidden on mobile */}
        <button
          onClick={onToggleFocus}
          className={cn(
            "hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono",
            "transition-colors duration-150",
            isFocusMode
              ? "bg-accent-cyan-dim text-accent-cyan"
              : "text-text-muted hover:text-text-secondary hover:bg-bg-elevated"
          )}
          title={isFocusMode ? "Exit focus mode (Esc)" : "Focus mode (F)"}
        >
          {isFocusMode ? (
            <EyeOff className="size-3.5" />
          ) : (
            <Eye className="size-3.5" />
          )}
          <span className="hidden sm:inline">
            {isFocusMode ? t("nav.exit") : t("nav.focus")}
          </span>
        </button>
      </div>
    </header>
  );
}
