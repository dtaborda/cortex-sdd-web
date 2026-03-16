"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
}

export function TokenPredictionVisual({ data, accent }: Props) {
  const tokens = (data.tokens as string[]) || ["Hola", "como", "estas"];
  const predictions = (data.predictions as { label: string; probability: number }[]) || [
    { label: "bien", probability: 67 },
    { label: "hoy", probability: 12 },
    { label: "tu", probability: 8 },
  ];

  return (
    <div className="w-full max-w-md space-y-8">
      {/* Token sequence */}
      <div className="flex items-center gap-2 flex-wrap">
        {tokens.map((token, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="px-3 py-1.5 rounded-md bg-bg-elevated border border-border-default font-mono text-sm text-text-primary"
          >
            {token}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="px-3 py-1.5 rounded-md border border-dashed font-mono text-sm"
          style={{ borderColor: accent, color: accent }}
        >
          ???
        </motion.span>
      </div>

      {/* Predictions */}
      <div className="space-y-3">
        <p className="text-xs font-mono text-text-muted uppercase tracking-wider">
          Probabilidades
        </p>
        {predictions
          .sort((a, b) => b.probability - a.probability)
          .map((pred, i) => (
            <motion.div
              key={pred.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="w-20 text-right text-sm font-mono text-text-secondary">
                {pred.label}
              </span>
              <div className="flex-1 h-7 bg-bg-elevated rounded-md overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pred.probability}%` }}
                  transition={{
                    delay: 0.7 + i * 0.1,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full rounded-md"
                  style={{
                    backgroundColor: i === 0 ? accent : `${accent}44`,
                  }}
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-mono text-text-muted">
                  {pred.probability}%
                </span>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
