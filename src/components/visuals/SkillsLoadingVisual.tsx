"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
}

export function SkillsLoadingVisual({ data, accent }: Props) {
  const available = (data.available as string[]) || [
    "react-19",
    "nextjs-15",
    "tailwind-4",
    "typescript",
    "playwright",
    "zustand-5",
    "zod-4",
    "django-drf",
  ];
  const loaded = (data.loaded as string[]) || ["react-19", "tailwind-4", "typescript"];
  const task = (data.task as string) || "Crear componente React con Tailwind y tipos estrictos";

  const loadedSet = new Set(loaded);

  return (
    <div className="w-full max-w-md space-y-5">
      {/* Task description */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="p-3 rounded-lg bg-bg-elevated border border-border-default"
      >
        <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1">
          Tarea detectada
        </p>
        <p className="text-sm font-mono text-text-primary leading-snug">
          {task}
        </p>
      </motion.div>

      {/* Skills label */}
      <p className="text-xs font-mono text-text-muted uppercase tracking-wider">
        Skills disponibles
      </p>

      {/* Skills grid */}
      <div className="flex flex-wrap gap-2">
        {available.map((skill, i) => {
          const isLoaded = loadedSet.has(skill);

          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isLoaded ? 1 : 0.4,
                scale: 1,
              }}
              transition={{
                delay: 0.5 + i * 0.07,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-xs font-mono"
              style={{
                backgroundColor: isLoaded ? `${accent}12` : "#18181B",
                borderColor: isLoaded ? `${accent}40` : "#27272A",
                color: isLoaded ? accent : "#52525B",
              }}
            >
              {isLoaded && (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.07, type: "spring" }}
                  className="w-3 h-3"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8.5L6.5 12L13 4"
                    stroke={accent}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              )}
              {skill}
            </motion.div>
          );
        })}
      </div>

      {/* Summary */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-xs text-text-muted"
      >
        <span style={{ color: accent }} className="font-mono font-semibold">
          {loaded.length}
        </span>{" "}
        de {available.length} skills cargados para esta tarea
      </motion.p>
    </div>
  );
}
