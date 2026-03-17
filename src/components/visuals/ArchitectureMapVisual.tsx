"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
  locale?: string;
}

interface CenterNode {
  label: string;
  color?: string;
}

interface Connection {
  label: string;
  direction?: string;
  description?: string;
  color?: string;
}

interface AgentNode {
  label: string;
  color?: string;
}

export function ArchitectureMapVisual({ data, accent, locale }: Props) {
  const isEn = locale === "en";
  // Support multiple data shapes from the content modules
  const center = data.center as CenterNode | string | undefined;
  const connections = data.connections as Connection[] | undefined;
  const agents = data.agents as AgentNode[] | undefined;

  // Determine the center label
  const centerLabel =
    typeof center === "string"
      ? center
      : center?.label ?? "Orchestrator";
  const centerColor =
    typeof center === "object" && center?.color
      ? center.color
      : accent;

  // Determine satellite nodes
  const satellites: { label: string; description: string; color: string }[] = [];

  if (connections?.length) {
    connections.forEach((c) => {
      satellites.push({
        label: c.label,
        description: c.description || "",
        color: c.color || accent,
      });
    });
  } else if (agents?.length) {
    agents.forEach((a) => {
      satellites.push({
        label: a.label,
        description: "",
        color: a.color || accent,
      });
    });
  } else {
    // Default fallback
    [
      { label: "Spec Writer", color: "#3B82F6" },
      { label: "Designer", color: "#10B981" },
      { label: "Implementer", color: "#8B5CF6" },
      { label: "Verifier", color: "#EF4444" },
    ].forEach((n) => {
      satellites.push({ label: n.label, description: "", color: n.color });
    });
  }

  const svgWidth = 540;
  const svgHeight = 340;
  const cx = svgWidth / 2;
  const cy = svgHeight / 2;
  const radius = 125;
  const count = satellites.length;

  const positions = satellites.map((_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });

  return (
    <div className="w-full max-w-2xl">
      <p className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
        {isEn ? "Architecture" : "Arquitectura"}
      </p>

      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full">
        <defs>
          <marker
            id="arch-arrow"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5" fill={accent} opacity="0.4" />
          </marker>
        </defs>

        {/* Connection lines */}
        {positions.map((pos, i) => {
          const dx = pos.x - cx;
          const dy = pos.y - cy;
          const len = Math.sqrt(dx * dx + dy * dy);
          const startOffset = 32 / len;
          const endOffset = 32 / len;

          return (
            <motion.line
              key={`line-${i}`}
              x1={cx + dx * startOffset}
              y1={cy + dy * startOffset}
              x2={pos.x - dx * endOffset}
              y2={pos.y - dy * endOffset}
              stroke={satellites[i].color}
              strokeWidth="1"
              opacity="0.3"
              markerEnd="url(#arch-arrow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 0.4,
              }}
            />
          );
        })}

        {/* Center node */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <circle
            cx={cx}
            cy={cy}
            r="38"
            fill="#18181B"
            stroke={centerColor}
            strokeWidth="2"
          />
          <text
            x={cx}
            y={cy}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#FAFAFA"
            fontSize="13"
            fontFamily="ui-monospace, monospace"
            fontWeight="600"
          >
            {centerLabel.length > 14
              ? centerLabel.slice(0, 13) + "…"
              : centerLabel}
          </text>
        </motion.g>

        {/* Satellite nodes */}
        {satellites.map((sat, i) => {
          const pos = positions[i];
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3 + i * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <circle
                cx={pos.x}
                cy={pos.y}
                r="35"
                fill="#18181B"
                stroke={sat.color}
                strokeWidth="1"
                opacity="0.8"
              />
              <text
                x={pos.x}
                y={sat.description ? pos.y - 5 : pos.y}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#FAFAFA"
                fontSize="11"
                fontFamily="ui-monospace, monospace"
                fontWeight="500"
              >
                {sat.label.length > 13
                  ? sat.label.slice(0, 12) + "…"
                  : sat.label}
              </text>
              {sat.description && (
                <text
                  x={pos.x}
                  y={pos.y + 8}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#71717A"
                  fontSize="9"
                  fontFamily="ui-monospace, monospace"
                >
                  {sat.description.length > 18
                    ? sat.description.slice(0, 17) + "…"
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
