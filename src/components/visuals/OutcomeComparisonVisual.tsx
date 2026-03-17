"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
  locale?: string;
}

interface SideData {
  title: string;
  items: string[];
}

export function OutcomeComparisonVisual({ data, locale }: Props) {
  const isEn = locale === "en";
  const without = (data.without as SideData) || (isEn
    ? {
        title: "Without architecture",
        items: [
          "Context degraded after 40 messages",
          "Constant rework",
          "Frequent hallucinations",
          "No memory between sessions",
        ],
      }
    : {
        title: "Sin arquitectura",
        items: [
          "Contexto degradado a los 40 mensajes",
          "Re-trabajo constante",
          "Alucinaciones frecuentes",
          "Sin memoria entre sesiones",
        ],
      });

  const withArch = (data.with as SideData) || (isEn
    ? {
        title: "With architecture",
        items: [
          "Clean context per sub-agent",
          "Verification against specs",
          "Consistent quality",
          "Persistent memory with Engram",
        ],
      }
    : {
        title: "Con arquitectura",
        items: [
          "Contexto limpio por sub-agente",
          "Verificación contra specs",
          "Calidad consistente",
          "Memoria persistente con Engram",
        ],
      });

  return (
    <div className="w-full max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        {/* Without panel */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-lg bg-red-500/5 border border-red-500/15 p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-4 h-4 text-red-400" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 4L12 12M12 4L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-red-400">
              {without.title}
            </h3>
          </div>

          <div className="space-y-3">
            {without.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  duration: 0.4,
                }}
                className="flex items-start gap-2"
              >
                <svg
                  className="w-3.5 h-3.5 shrink-0 mt-0.5 text-red-500/60"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 4L12 12M12 4L4 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-base text-text-secondary leading-snug">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* With panel */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-lg bg-emerald-500/5 border border-emerald-500/15 p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <svg
              className="w-4 h-4 text-emerald-400"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8.5L6.5 12L13 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-emerald-400">
              {withArch.title}
            </h3>
          </div>

          <div className="space-y-3">
            {withArch.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  duration: 0.4,
                }}
                className="flex items-start gap-2"
              >
                <svg
                  className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-500/60"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8.5L6.5 12L13 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-base text-text-primary leading-snug">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
