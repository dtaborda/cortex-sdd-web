"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Layers,
  Bot,
  TrendingUp,
  AlertTriangle,
  GitBranch,
  Database,
  Puzzle,
  Boxes,
  Target,
  Check,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ModuleDefinition } from "@/types/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  brain: Brain,
  layers: Layers,
  bot: Bot,
  "trending-up": TrendingUp,
  "alert-triangle": AlertTriangle,
  "git-branch": GitBranch,
  database: Database,
  puzzle: Puzzle,
  boxes: Boxes,
  target: Target,
};

interface SidebarProps {
  modules: ModuleDefinition[];
  activeModuleId: string;
  completedModuleIds: string[];
  onModuleClick: (moduleId: string) => void;
  isFocusMode: boolean;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export function Sidebar({
  modules,
  activeModuleId,
  completedModuleIds,
  onModuleClick,
  isFocusMode,
  isMobileOpen,
  onMobileClose,
}: SidebarProps) {
  const { t } = useI18n();

  const handleModuleClick = (moduleId: string) => {
    onModuleClick(moduleId);
    // Close sidebar on mobile after selection
    onMobileClose();
  };

  // Determine if sidebar should show:
  // Desktop: always unless focus mode
  // Mobile: only when isMobileOpen is true
  const showDesktop = !isFocusMode;
  const showMobile = isMobileOpen;

  return (
    <>
      {/* Mobile backdrop overlay */}
      <AnimatePresence>
        {showMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onMobileClose}
          />
        )}
      </AnimatePresence>

      {/* Desktop sidebar — uses AnimatePresence for focus mode toggle */}
      <AnimatePresence>
        {showDesktop && (
          <motion.aside
            initial={{ x: -260, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -260, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "hidden lg:flex fixed top-[56px] left-0 bottom-0 z-30",
              "w-[260px] border-r border-border-subtle bg-bg-base",
              "flex-col"
            )}
          >
            <SidebarContent
              modules={modules}
              activeModuleId={activeModuleId}
              completedModuleIds={completedModuleIds}
              onModuleClick={handleModuleClick}
              t={t}
            />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile sidebar drawer — overlay from left */}
      <AnimatePresence>
        {showMobile && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "lg:hidden fixed top-0 left-0 bottom-0 z-50",
              "w-[280px] border-r border-border-subtle bg-bg-base",
              "flex flex-col"
            )}
          >
            {/* Mobile sidebar header with close button */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-border-subtle">
              <span className="font-mono font-bold text-base">
                <span className="text-accent-cyan">d</span>
                <span className="text-text-primary">Taborda</span>
              </span>
              <button
                onClick={onMobileClose}
                className="flex items-center justify-center w-8 h-8 rounded-md text-text-muted hover:text-text-primary hover:bg-bg-elevated transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <SidebarContent
              modules={modules}
              activeModuleId={activeModuleId}
              completedModuleIds={completedModuleIds}
              onModuleClick={handleModuleClick}
              t={t}
            />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

/** Shared sidebar content used by both desktop and mobile drawers */
function SidebarContent({
  modules,
  activeModuleId,
  completedModuleIds,
  onModuleClick,
  t,
}: {
  modules: ModuleDefinition[];
  activeModuleId: string;
  completedModuleIds: string[];
  onModuleClick: (moduleId: string) => void;
  t: (key: string) => string;
}) {
  return (
    <>
      {/* Module list */}
      <nav className="flex-1 overflow-y-auto py-3 px-2">
        <ul className="flex flex-col gap-0.5">
          {modules.map((mod) => {
            const isActive = mod.id === activeModuleId;
            const isCompleted = completedModuleIds.includes(mod.id);
            const Icon = ICON_MAP[mod.icon] ?? Brain;

            return (
              <li key={mod.id}>
                <button
                  onClick={() => onModuleClick(mod.id)}
                  className={cn(
                    "relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg",
                    "text-left transition-colors duration-150 group",
                    // Touch-friendly: min 44px height
                    "min-h-[44px]",
                    isActive
                      ? "bg-bg-elevated"
                      : "hover:bg-bg-elevated/50"
                  )}
                >
                  {/* Active accent bar */}
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active-bar"
                      className="absolute left-0 top-1.5 bottom-1.5 w-[2px] rounded-full"
                      style={{ backgroundColor: mod.accentColor }}
                      transition={{
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  )}

                  {/* Module number (decorative) */}
                  <span
                    className={cn(
                      "font-mono text-[10px] leading-none w-[18px] shrink-0 text-right",
                      isActive ? "text-text-muted" : "text-text-ghost"
                    )}
                  >
                    {String(mod.order).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className="shrink-0"
                    style={{
                      color: isActive
                        ? mod.accentColor
                        : isCompleted
                          ? "#10B981"
                          : undefined,
                    }}
                  >
                    <Icon
                      className={cn(
                        "size-4",
                        !isActive &&
                          !isCompleted &&
                          "text-text-ghost group-hover:text-text-muted"
                      )}
                    />
                  </div>

                  {/* Title */}
                  <span
                    className={cn(
                      "text-sm truncate flex-1",
                      isActive
                        ? "text-text-primary font-medium"
                        : "text-text-muted group-hover:text-text-secondary"
                    )}
                  >
                    {mod.shortTitle}
                  </span>

                  {/* Completed check */}
                  {isCompleted && !isActive && (
                    <Check className="size-3.5 text-emerald-500 shrink-0" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom — version & author */}
      <div className="px-4 py-3 border-t border-border-subtle">
        <p className="text-[10px] font-mono text-text-ghost leading-relaxed">
          {t("sidebar.version")}
        </p>
      </div>
    </>
  );
}
