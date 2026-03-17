"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
}

export function SignalVsNoiseVisual({ data }: Props) {
  const signals = (data.signals as string[]) || [
    "Decisión arquitectónica",
    "Bug fix y causa raíz",
    "Patrón establecido",
  ];

  const noise = (data.noise as string[]) || [
    "Output de terminal",
    "Código fuente entero",
    "Conversación casual",
  ];

  return (
    <div className="w-full max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        {/* Signal column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-emerald-400">
              Señal
            </h3>
          </div>

          {signals.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3 + i * 0.1,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-start gap-3 p-3 rounded-md bg-emerald-500/5 border border-emerald-500/15"
            >
              <svg
                className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="3" fill="currentColor" />
              </svg>
              <span className="text-base text-text-primary leading-snug">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border-subtle hidden" />

        {/* Noise column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-red-400">
              Ruido
            </h3>
          </div>

          {noise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3 + i * 0.1,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-start gap-3 p-3 rounded-md bg-red-500/5 border border-red-500/15"
            >
              <svg
                className="w-5 h-5 shrink-0 mt-0.5 text-red-500"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="3" fill="currentColor" />
              </svg>
              <span className="text-base text-text-primary leading-snug">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
