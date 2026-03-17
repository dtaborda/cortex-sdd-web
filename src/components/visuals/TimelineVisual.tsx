"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
  locale?: string;
}

interface TimelineEntry {
  label?: string;
  phase?: string;
  description?: string;
  duration?: string;
}

export function TimelineVisual({ data, accent, locale }: Props) {
  const isEn = locale === "en";
  // Support both "entries" and "events" data shapes
  const rawEntries = (data.entries as TimelineEntry[]) || (data.events as TimelineEntry[]);

  const entries: TimelineEntry[] = rawEntries || (isEn
    ? [
        { label: "Start", description: "Project setup" },
        { label: "Design", description: "Architecture and specs" },
        { label: "Implementation", description: "Code and tests" },
        { label: "Deploy", description: "Production" },
      ]
    : [
        { label: "Inicio", description: "Setup del proyecto" },
        { label: "Diseño", description: "Arquitectura y specs" },
        { label: "Implementación", description: "Código y tests" },
        { label: "Deploy", description: "Producción" },
      ]);

  return (
    <div className="w-full max-w-2xl">
      <p className="text-sm font-mono text-text-muted uppercase tracking-wider mb-5">
        Timeline
      </p>

      <div className="relative">
        {/* Vertical line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[11px] top-0 w-0.5 rounded-full"
          style={{ backgroundColor: `${accent}30` }}
        />

        <div className="space-y-6">
          {entries.map((entry, i) => {
            const label = entry.label || entry.phase || (isEn ? `Step ${i + 1}` : `Paso ${i + 1}`);
            const desc = entry.description || "";
            const duration = entry.duration || "";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2 + i * 0.12,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-start gap-4 relative"
              >
                {/* Dot on the line */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.12,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 z-10"
                  style={{
                    borderColor: accent,
                    backgroundColor: "#09090B",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1 pb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-text-primary">
                      {label}
                    </span>
                    {duration && (
                      <span className="text-xs font-mono text-text-muted px-2 py-1 rounded bg-bg-elevated">
                        {duration}
                      </span>
                    )}
                  </div>
                  {desc && (
                    <p className="text-sm text-text-secondary mt-0.5 leading-relaxed">
                      {desc}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
