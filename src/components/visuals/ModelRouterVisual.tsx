"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
  locale?: string;
}

interface Model {
  name: string;
  bestFor: string;
  tier: string;
}

const TIER_COLORS: Record<string, string> = {
  premium: "#00F0FF",
  balanced: "#3B82F6",
  fast: "#10B981",
  alternative: "#8B5CF6",
};

const TIER_ORDER: Record<string, number> = {
  premium: 0,
  balanced: 1,
  fast: 2,
  alternative: 3,
};

export function ModelRouterVisual({ data, accent, locale }: Props) {
  const isEn = locale === "en";
  const models = (data.models as Model[]) || (isEn
    ? [
        { name: "Claude Opus", bestFor: "Architecture, complex design", tier: "premium" },
        { name: "Claude Sonnet", bestFor: "Implementation, code review", tier: "balanced" },
        { name: "Claude Haiku", bestFor: "Quick tasks, simple refactors", tier: "fast" },
        { name: "GPT-4o", bestFor: "Second opinion, cross-validation", tier: "alternative" },
      ]
    : [
        { name: "Claude Opus", bestFor: "Arquitectura, diseño complejo", tier: "premium" },
        { name: "Claude Sonnet", bestFor: "Implementación, code review", tier: "balanced" },
        { name: "Claude Haiku", bestFor: "Tareas rápidas, refactors simples", tier: "fast" },
        { name: "GPT-4o", bestFor: "Segunda opinión, validación cruzada", tier: "alternative" },
      ]);

  const sorted = [...models].sort(
    (a, b) => (TIER_ORDER[a.tier] ?? 99) - (TIER_ORDER[b.tier] ?? 99)
  );

  return (
    <div className="w-full max-w-2xl">
      <p className="text-sm font-mono text-text-muted uppercase tracking-wider mb-5">
        Model Router
      </p>

      <div className="space-y-4">
        {sorted.map((model, i) => {
          const tierColor = TIER_COLORS[model.tier] || accent;

          return (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: i * 0.12,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-4 p-4 rounded-lg bg-bg-surface border border-border-subtle"
            >
              {/* Tier indicator */}
              <div
                className="w-1.5 h-12 rounded-full shrink-0"
                style={{ backgroundColor: tierColor }}
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-base font-semibold text-text-primary">
                    {model.name}
                  </span>
                  <span
                    className="text-xs font-mono uppercase tracking-wider px-2 py-1 rounded"
                    style={{
                      color: tierColor,
                      backgroundColor: `${tierColor}15`,
                    }}
                  >
                    {model.tier}
                  </span>
                </div>
                <p className="text-sm text-text-secondary truncate">
                  {model.bestFor}
                </p>
              </div>

              {/* Visual hierarchy indicator */}
              <div className="flex gap-0.5 shrink-0">
                {Array.from({ length: 4 - (TIER_ORDER[model.tier] ?? 0) }).map(
                  (_, j) => (
                    <div
                      key={j}
                      className="w-2 h-5 rounded-sm"
                      style={{ backgroundColor: tierColor, opacity: 0.4 + j * 0.2 }}
                    />
                  )
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
