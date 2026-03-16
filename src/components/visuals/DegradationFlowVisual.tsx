"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
}

interface Stage {
  label: string;
  quality: number;
  tokens: string;
}

function qualityColor(quality: number): string {
  if (quality >= 70) return "#10B981";
  if (quality >= 45) return "#F59E0B";
  return "#EF4444";
}

export function DegradationFlowVisual({ data, accent }: Props) {
  const stages = (data.stages as Stage[]) || [
    { label: "Limpio", quality: 95, tokens: "10K" },
    { label: "Acumulación", quality: 70, tokens: "60K" },
    { label: "Compactación", quality: 45, tokens: "120K" },
    { label: "Degradación", quality: 20, tokens: "180K" },
  ];

  return (
    <div className="w-full max-w-lg">
      <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-6">
        Degradación de contexto
      </p>

      <div className="flex items-start gap-1">
        {stages.map((stage, i) => (
          <div key={i} className="flex items-center">
            {/* Stage card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center w-[110px]"
            >
              {/* Quality bar container */}
              <div className="w-full h-20 bg-bg-elevated rounded-lg border border-border-subtle p-2 flex flex-col justify-end relative overflow-hidden">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${stage.quality}%` }}
                  transition={{
                    delay: 0.3 + i * 0.2,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full rounded-sm absolute bottom-0 left-0 right-0"
                  style={{
                    backgroundColor: qualityColor(stage.quality),
                    opacity: 0.25,
                  }}
                />
                <span
                  className="text-lg font-mono font-bold relative z-10 text-center"
                  style={{ color: qualityColor(stage.quality) }}
                >
                  {stage.quality}%
                </span>
              </div>

              {/* Label */}
              <p className="text-xs text-text-primary font-medium mt-2 text-center leading-tight">
                {stage.label}
              </p>
              <p className="text-[10px] font-mono text-text-muted mt-0.5">
                {stage.tokens}
              </p>
            </motion.div>

            {/* Arrow between stages */}
            {i < stages.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.2 }}
                className="flex items-center mx-0.5 mt-[-20px]"
              >
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <path
                    d="M0 6H12M12 6L8 2M12 6L8 10"
                    stroke={accent}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                  />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
