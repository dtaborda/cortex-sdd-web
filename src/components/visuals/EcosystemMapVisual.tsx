"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
}

interface CenterDef {
  label: string;
  color: string;
}

interface SatelliteDef {
  label: string;
  color: string;
  description?: string;
}

export function EcosystemMapVisual({ data, accent }: Props) {
  const center = (data.center as CenterDef) || {
    label: "Claude Code",
    color: accent,
  };
  const satellites = (data.satellites as SatelliteDef[]) || [
    { label: "Engram", color: "#EC4899", description: "Memoria persistente" },
    { label: "SDD", color: "#00F0FF", description: "Spec-driven dev" },
    { label: "Skills", color: "#84CC16", description: "Conocimiento on-demand" },
    { label: "MCP", color: "#3B82F6", description: "Integración externa" },
    { label: "AGENTS.md", color: "#F97316", description: "Instrucciones base" },
  ];

  const svgWidth = 420;
  const svgHeight = 320;
  const cx = svgWidth / 2;
  const cy = svgHeight / 2;
  const radius = 110;
  const count = satellites.length;

  const positions = satellites.map((_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });

  return (
    <div className="w-full max-w-md">
      <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">
        Ecosistema
      </p>

      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full">
        {/* Connecting lines */}
        {positions.map((pos, i) => {
          const dx = pos.x - cx;
          const dy = pos.y - cy;
          const len = Math.sqrt(dx * dx + dy * dy);
          const startOff = 38 / len;
          const endOff = 34 / len;

          return (
            <motion.line
              key={`line-${i}`}
              x1={cx + dx * startOff}
              y1={cy + dy * startOff}
              x2={pos.x - dx * endOff}
              y2={pos.y - dy * endOff}
              stroke={satellites[i].color}
              strokeWidth="1.5"
              strokeDasharray="4 3"
              opacity="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
            />
          );
        })}

        {/* Center glow */}
        <motion.circle
          cx={cx}
          cy={cy}
          r="42"
          fill={center.color}
          opacity="0.06"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Center node */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <circle
            cx={cx}
            cy={cy}
            r="36"
            fill="#18181B"
            stroke={center.color}
            strokeWidth="2"
          />
          <text
            x={cx}
            y={cy}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#FAFAFA"
            fontSize="11"
            fontFamily="ui-monospace, monospace"
            fontWeight="700"
          >
            {center.label}
          </text>
        </motion.g>

        {/* Satellite nodes */}
        {satellites.map((sat, i) => {
          const pos = positions[i];
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3 + i * 0.12,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Subtle glow behind satellite */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r="30"
                fill={sat.color}
                opacity="0.05"
              />
              <circle
                cx={pos.x}
                cy={pos.y}
                r="28"
                fill="#18181B"
                stroke={sat.color}
                strokeWidth="1"
              />
              <text
                x={pos.x}
                y={sat.description ? pos.y - 5 : pos.y}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#FAFAFA"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
                fontWeight="500"
              >
                {sat.label}
              </text>
              {sat.description && (
                <text
                  x={pos.x}
                  y={pos.y + 8}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#71717A"
                  fontSize="7"
                  fontFamily="ui-monospace, monospace"
                >
                  {sat.description.length > 20
                    ? sat.description.slice(0, 19) + "…"
                    : sat.description}
                </text>
              )}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
