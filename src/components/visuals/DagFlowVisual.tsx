"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
}

interface DagNode {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface DagEdge {
  from: string;
  to: string;
}

export function DagFlowVisual({ data, accent }: Props) {
  const nodes = (data.nodes as DagNode[]) || [
    { id: "proposal", label: "Proposal", x: 50, y: 50 },
    { id: "spec", label: "Spec", x: 200, y: 20 },
    { id: "design", label: "Design", x: 200, y: 80 },
    { id: "tasks", label: "Tasks", x: 350, y: 50 },
    { id: "apply", label: "Apply", x: 500, y: 50 },
    { id: "verify", label: "Verify", x: 650, y: 50 },
  ];

  const edges = (data.edges as DagEdge[]) || [
    { from: "proposal", to: "spec" },
    { from: "proposal", to: "design" },
    { from: "spec", to: "tasks" },
    { from: "design", to: "tasks" },
    { from: "tasks", to: "apply" },
    { from: "apply", to: "verify" },
  ];

  // Calculate bounds for scaling
  const maxX = Math.max(...nodes.map((n) => n.x));
  const maxY = Math.max(...nodes.map((n) => n.y));
  const minX = Math.min(...nodes.map((n) => n.x));
  const minY = Math.min(...nodes.map((n) => n.y));

  const svgWidth = 620;
  const svgHeight = 220;
  const padX = 70;
  const padY = 45;

  function scaleX(x: number): number {
    if (maxX === minX) return svgWidth / 2;
    return padX + ((x - minX) / (maxX - minX)) * (svgWidth - padX * 2);
  }

  function scaleY(y: number): number {
    if (maxY === minY) return svgHeight / 2;
    return padY + ((y - minY) / (maxY - minY)) * (svgHeight - padY * 2);
  }

  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const nodeW = 95;
  const nodeH = 38;

  return (
    <div className="w-full max-w-3xl">
      <p className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
        Directed Acyclic Graph
      </p>

      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full"
        style={{ maxHeight: 300 }}
      >
        <defs>
          <marker
            id="dag-arrow"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6" fill={accent} opacity="0.6" />
          </marker>
        </defs>

        {/* Edges */}
        {edges.map((edge, i) => {
          const fromNode = nodeMap.get(edge.from);
          const toNode = nodeMap.get(edge.to);
          if (!fromNode || !toNode) return null;

          const x1 = scaleX(fromNode.x) + nodeW / 2;
          const y1 = scaleY(fromNode.y);
          const x2 = scaleX(toNode.x) - nodeW / 2;
          const y2 = scaleY(toNode.y);

          return (
            <motion.line
              key={`${edge.from}-${edge.to}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={accent}
              strokeWidth="1.5"
              opacity="0.4"
              markerEnd="url(#dag-arrow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{
                delay: 0.6 + i * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const cx = scaleX(node.x);
          const cy = scaleY(node.y);

          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <rect
                x={cx - nodeW / 2}
                y={cy - nodeH / 2}
                width={nodeW}
                height={nodeH}
                rx="8"
                fill="#18181B"
                stroke={accent}
                strokeWidth="1"
                opacity="0.8"
              />
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#FAFAFA"
                fontSize="13"
                fontFamily="ui-monospace, monospace"
              >
                {node.label}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
