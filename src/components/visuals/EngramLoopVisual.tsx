"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
  locale?: string;
}

interface Step {
  label: string;
  description: string;
}

export function EngramLoopVisual({ data, accent, locale }: Props) {
  const isEn = locale === "en";
  const steps = (data.steps as Step[]) || (isEn
    ? [
        { label: "Active session", description: "Agent works" },
        { label: "mem_save", description: "Persists decisions" },
        { label: "Compaction", description: "Context is lost" },
        { label: "mem_search", description: "Searches prior context" },
        { label: "mem_get", description: "Retrieves observation" },
        { label: "Continuity", description: "Picks up where it left" },
      ]
    : [
        { label: "Sesión activa", description: "El agente trabaja" },
        { label: "mem_save", description: "Persiste decisiones" },
        { label: "Compactación", description: "El contexto se pierde" },
        { label: "mem_search", description: "Busca contexto previo" },
        { label: "mem_get", description: "Recupera observación" },
        { label: "Continuidad", description: "Retoma donde dejó" },
      ]);

  const count = steps.length;
  const centerX = 260;
  const centerY = 180;
  const radiusX = 210;
  const radiusY = 130;

  // Position steps around an ellipse
  const positions = steps.map((_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    return {
      x: centerX + radiusX * Math.cos(angle),
      y: centerY + radiusY * Math.sin(angle),
    };
  });

  return (
    <div className="w-full max-w-2xl">
      <p className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
        {isEn ? "Persistent memory cycle" : "Ciclo de memoria persistente"}
      </p>

      <svg viewBox="0 0 520 360" className="w-full" style={{ maxHeight: 400 }}>
        <defs>
          <marker
            id="loop-arrow"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5" fill={accent} opacity="0.5" />
          </marker>
        </defs>

        {/* Connecting arcs between steps */}
        {positions.map((pos, i) => {
          const next = positions[(i + 1) % count];
          const midX = (pos.x + next.x) / 2 + (centerX - (pos.x + next.x) / 2) * 0.15;
          const midY = (pos.y + next.y) / 2 + (centerY - (pos.y + next.y) / 2) * 0.15;

          // Shorten line to not overlap with node
          const dx = next.x - pos.x;
          const dy = next.y - pos.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          const offsetStart = 35 / len;
          const offsetEnd = 35 / len;

          const x1 = pos.x + dx * offsetStart;
          const y1 = pos.y + dy * offsetStart;
          const x2 = next.x - dx * offsetEnd;
          const y2 = next.y - dy * offsetEnd;

          return (
            <motion.path
              key={`edge-${i}`}
              d={`M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`}
              fill="none"
              stroke={accent}
              strokeWidth="1.5"
              opacity="0.35"
              markerEnd="url(#loop-arrow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.35 }}
              transition={{
                delay: 0.8 + i * 0.12,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}

        {/* Step nodes */}
        {steps.map((step, i) => {
          const pos = positions[i];
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: i * 0.15,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Node circle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r="35"
                fill="#18181B"
                stroke={accent}
                strokeWidth="1"
                opacity="0.8"
              />
              {/* Step number */}
              <text
                x={pos.x}
                y={pos.y - 4}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#FAFAFA"
                fontSize="11"
                fontFamily="ui-monospace, monospace"
                fontWeight="600"
              >
                {step.label.length > 12
                  ? step.label.slice(0, 11) + "…"
                  : step.label}
              </text>
              <text
                x={pos.x}
                y={pos.y + 9}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#A1A1AA"
                fontSize="9"
                fontFamily="ui-monospace, monospace"
              >
                {step.description.length > 18
                  ? step.description.slice(0, 17) + "…"
                  : step.description}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
