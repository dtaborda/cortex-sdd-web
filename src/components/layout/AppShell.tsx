"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { allModules, allFlatSlides, totalSlideCount } from "@/lib/content";
import { Header } from "./Header";
import { ProgressBar } from "./ProgressBar";
import { Sidebar } from "./Sidebar";
import { ContentPane } from "./ContentPane";
import { VisualPane } from "./VisualPane";

const STORAGE_KEY = "dtaborda-state";

interface PersistedState {
  currentSlideIndex: number;
  completedSlideIds: string[];
}

function loadPersistedState(): PersistedState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedState;
    if (
      typeof parsed.currentSlideIndex === "number" &&
      Array.isArray(parsed.completedSlideIds)
    ) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function savePersistedState(state: PersistedState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage might be full or unavailable — silently ignore
  }
}

export function AppShell() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [completedSlideIds, setCompletedSlideIds] = useState<string[]>([]);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const persisted = loadPersistedState();
    if (persisted) {
      const safeIndex = Math.min(
        persisted.currentSlideIndex,
        totalSlideCount - 1
      );
      setCurrentSlideIndex(Math.max(0, safeIndex));
      setCompletedSlideIds(persisted.completedSlideIds);
    }
    setIsHydrated(true);
  }, []);

  // Persist state on changes (only after hydration)
  useEffect(() => {
    if (!isHydrated) return;
    savePersistedState({ currentSlideIndex, completedSlideIds });
  }, [currentSlideIndex, completedSlideIds, isHydrated]);

  // Derive current flat slide
  const currentFlatSlide = allFlatSlides[currentSlideIndex];

  // Derive current module
  const currentModule = useMemo(
    () =>
      currentFlatSlide
        ? allModules.find((m) => m.id === currentFlatSlide.moduleId)
        : undefined,
    [currentFlatSlide]
  );

  // Derive current slide definition
  const currentSlide = useMemo(
    () =>
      currentModule
        ? currentModule.slides.find((s) => s.id === currentFlatSlide?.id)
        : undefined,
    [currentModule, currentFlatSlide]
  );

  // Derive module-local slide index
  const moduleSlideIndex = useMemo(
    () =>
      currentModule && currentFlatSlide
        ? currentModule.slides.findIndex((s) => s.id === currentFlatSlide.id)
        : 0,
    [currentModule, currentFlatSlide]
  );

  // Derive global progress (percentage)
  const globalProgress = useMemo(
    () =>
      totalSlideCount > 0
        ? ((currentSlideIndex + 1) / totalSlideCount) * 100
        : 0,
    [currentSlideIndex]
  );

  // Derive completed module IDs
  const completedModuleIds = useMemo(
    () =>
      allModules
        .filter((mod) =>
          mod.slides.every((s) => completedSlideIds.includes(s.id))
        )
        .map((mod) => mod.id),
    [completedSlideIds]
  );

  // Mark current slide as completed when viewed
  useEffect(() => {
    if (!currentFlatSlide) return;
    setCompletedSlideIds((prev) => {
      if (prev.includes(currentFlatSlide.id)) return prev;
      return [...prev, currentFlatSlide.id];
    });
  }, [currentFlatSlide]);

  // Navigation handlers
  const canGoPrev = currentSlideIndex > 0;
  const canGoNext = currentSlideIndex < totalSlideCount - 1;

  const goNext = useCallback(() => {
    if (canGoNext) setCurrentSlideIndex((i) => i + 1);
  }, [canGoNext]);

  const goPrev = useCallback(() => {
    if (canGoPrev) setCurrentSlideIndex((i) => i - 1);
  }, [canGoPrev]);

  const toggleFocus = useCallback(() => {
    setIsFocusMode((f) => !f);
  }, []);

  const goToModule = useCallback((moduleId: string) => {
    const firstSlide = allFlatSlides.find((s) => s.moduleId === moduleId);
    if (firstSlide) {
      setCurrentSlideIndex(firstSlide.globalIndex);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Ignore when focus is inside an input/textarea
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          goNext();
          break;
        case "ArrowLeft":
          e.preventDefault();
          goPrev();
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFocus();
          break;
        case "Escape":
          e.preventDefault();
          setIsFocusMode(false);
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, toggleFocus]);

  // Don't render until hydrated to avoid layout shift
  if (!isHydrated || !currentModule || !currentSlide) {
    return (
      <div className="h-screen w-screen bg-bg-base flex items-center justify-center">
        <div className="font-mono text-text-ghost text-sm animate-pulse">
          Loading dTaborda...
        </div>
      </div>
    );
  }

  const accentColor = currentModule.accentColor;

  return (
    <div className="h-screen w-screen overflow-hidden bg-bg-base">
      <Header
        currentModule={currentModule}
        isFocusMode={isFocusMode}
        onToggleFocus={toggleFocus}
      />
      <ProgressBar progress={globalProgress} accentColor={accentColor} />
      <Sidebar
        modules={allModules}
        activeModuleId={currentModule.id}
        completedModuleIds={completedModuleIds}
        onModuleClick={goToModule}
        isFocusMode={isFocusMode}
      />
      <main
        style={{ paddingLeft: isFocusMode ? 0 : 260 }}
        className="pt-[60px] h-screen transition-all duration-300"
      >
        <div className="h-full grid grid-cols-1 lg:grid-cols-[45%_55%] gap-0">
          <ContentPane
            slide={currentSlide}
            module={currentModule}
            slideIndex={moduleSlideIndex}
            totalModuleSlides={currentModule.slides.length}
            onPrev={goPrev}
            onNext={goNext}
            canGoPrev={canGoPrev}
            canGoNext={canGoNext}
          />
          <div className="p-4 lg:p-6">
            <VisualPane slide={currentSlide} module={currentModule} />
          </div>
        </div>
      </main>
    </div>
  );
}
