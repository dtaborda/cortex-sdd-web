"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
}

interface Layer {
  label: string;
  size: number;
  color: string;
}

export function ContextLayersVisual({ data }: Props) {
  const layers = (data.layers as Layer[]) || [
    { label: "System prompt", size: 15, color: "#3B82F6" },
    { label: "Conversación previa", size: 35, color: "#6366F1" },
    { label: "Archivos/código", size: 30, color: "#8B5CF6" },
    { label: "Tu mensaje actual", size: 20, color: "#A855F7" },
  ];

  const total = layers.reduce((sum, l) => sum + l.size, 0);

  return (
    <div className="w-full max-w-md space-y-5">
      <p className="text-xs font-mono text-text-muted uppercase tracking-wider">
        Composición del contexto
      </p>

      {/* Stacked bar */}
      <div className="w-full h-10 bg-bg-elevated rounded-lg overflow-hidden flex">
        {layers.map((layer, i) => {
          const pct = (layer.size / total) * 100;
          return (
            <motion.div
              key={i}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{
                delay: 0.2 + i * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: layer.color }}
            >
              {pct >= 15 && (
                <span className="text-[10px] font-mono text-white/90 font-medium truncate px-1">
                  {Math.round(pct)}%
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="space-y-2.5">
        {layers.map((layer, i) => {
          const pct = Math.round((layer.size / total) * 100);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div
                className="w-3 h-3 rounded-sm shrink-0"
                style={{ backgroundColor: layer.color }}
              />
              <span className="text-sm text-text-primary flex-1">
                {layer.label}
              </span>
              <span className="text-xs font-mono text-text-muted">
                ~{pct}%
              </span>
              <div className="w-20 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{
                    delay: 0.7 + i * 0.1,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: layer.color }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
