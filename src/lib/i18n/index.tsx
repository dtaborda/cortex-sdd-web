"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

export type Locale = "es" | "en";

export const SUPPORTED_LOCALES = [
  { code: "es" as const, label: "Español", country: "AR" as const },
  { code: "en" as const, label: "English", country: "US" as const },
  // Future: { code: "pt" as const, label: "Português", country: "BR" as const },
] as const;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const STORAGE_KEY = "dtaborda-locale";

const uiStrings: Record<Locale, Record<string, string>> = {
  es: {
    "nav.prev": "Anterior",
    "nav.next": "Siguiente",
    "nav.focus": "Focus",
    "nav.exit": "Salir",
    "header.tagline": "Beyond the prompt.",
    "sidebar.version": "dTaborda \u00b7 v1.0",
    "loading": "Cargando dTaborda...",
  },
  en: {
    "nav.prev": "Prev",
    "nav.next": "Next",
    "nav.focus": "Focus",
    "nav.exit": "Exit",
    "header.tagline": "Beyond the prompt.",
    "sidebar.version": "dTaborda \u00b7 v1.0",
    "loading": "Loading dTaborda...",
  },
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  // Restore from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newLocale);
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return uiStrings[locale]?.[key] ?? uiStrings["es"]?.[key] ?? key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
