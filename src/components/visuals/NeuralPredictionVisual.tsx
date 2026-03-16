"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
}

const LAYER_NAMES_DEFAULT = [
  "Embedding",
  "Attention",
  "FFN",
  "Attention",
  "FFN",
  "Output",
];

interface Prediction {
  token: string;
  probability: number;
}

export function NeuralPredictionVisual({ data, accent }: Props) {
  const inputTokens = (data.inputTokens as string[]) || [
    "El",
    "contexto",
    "define",
    "la",
  ];
  const layers = (data.layers as string[]) || LAYER_NAMES_DEFAULT;
  const outputPredictions = (data.outputPredictions as Prediction[]) || [
    { token: "respuesta", probability: 72 },
    { token: "calidad", probability: 15 },
    { token: "salida", probability: 8 },
    { token: "nada", probability: 5 },
  ];

  const svgWidth = 700;
  const svgHeight = 420;

  // Layout zones
  const tokenZoneX = 20;
  const layerZoneX = 195;
  const layerZoneWidth = 260;
  const predZoneX = 510;

  // Layer geometry
  const layerCount = layers.length;
  const layerGap = 8;
  const totalLayerHeight = 300;
  const layerHeight =
    (totalLayerHeight - (layerCount - 1) * layerGap) / layerCount;
  const layerStartY = (svgHeight - totalLayerHeight) / 2;

  // Token positions — vertically centered
  const tokenGap = 38;
  const totalTokensHeight = (inputTokens.length - 1) * tokenGap;
  const tokenStartY = svgHeight / 2 - totalTokensHeight / 2;

  // Prediction positions
  const predGap = 48;
  const totalPredHeight = (outputPredictions.length - 1) * predGap;
  const predStartY = svgHeight / 2 - totalPredHeight / 2;

  // Sorted predictions for display
  const sortedPredictions = [...outputPredictions].sort(
    (a, b) => b.probability - a.probability
  );

  // Connection lines: tokens → first layer center
  const firstLayerCenterX = layerZoneX + layerZoneWidth / 2;
  // Connection lines: last layer center → predictions
  const lastLayerCenterX = layerZoneX + layerZoneWidth / 2;

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Ambient glow behind the pipeline */}
      <motion.div
        className="absolute rounded-full blur-[100px]"
        style={{
          width: 300,
          height: 300,
          backgroundColor: accent,
          opacity: 0.06,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full max-w-[700px]"
        style={{ maxHeight: "85vh" }}
      >
        <defs>
          {/* Glow filter for accent elements */}
          <filter id="npv-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle glow for connection lines */}
          <filter
            id="npv-line-glow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for layer bars */}
          <linearGradient id="npv-layer-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={accent} stopOpacity="0.05" />
            <stop offset="50%" stopColor={accent} stopOpacity="0.15" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
          </linearGradient>

          {/* Particle gradient */}
          <radialGradient id="npv-particle">
            <stop offset="0%" stopColor={accent} stopOpacity="0.8" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── SECTION LABELS ── */}
        <motion.text
          x={tokenZoneX + 60}
          y={layerStartY - 30}
          textAnchor="middle"
          className="font-mono"
          fill={accent}
          fontSize="9"
          opacity="0.5"
          letterSpacing="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          INPUT TOKENS
        </motion.text>

        <motion.text
          x={layerZoneX + layerZoneWidth / 2}
          y={layerStartY - 30}
          textAnchor="middle"
          className="font-mono"
          fill={accent}
          fontSize="9"
          opacity="0.5"
          letterSpacing="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          TRANSFORMER LAYERS
        </motion.text>

        <motion.text
          x={predZoneX + 80}
          y={layerStartY - 30}
          textAnchor="middle"
          className="font-mono"
          fill={accent}
          fontSize="9"
          opacity="0.5"
          letterSpacing="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          P(NEXT TOKEN)
        </motion.text>

        {/* ── CONNECTION LINES: tokens → layers ── */}
        {inputTokens.map((_, i) => {
          const tokenY = tokenStartY + i * tokenGap;
          // Connect each token to the center of the first layer
          const targetY = layerStartY + totalLayerHeight / 2;
          return (
            <motion.path
              key={`conn-in-${i}`}
              d={`M ${tokenZoneX + 120} ${tokenY} C ${tokenZoneX + 160} ${tokenY}, ${layerZoneX - 20} ${targetY}, ${layerZoneX} ${targetY}`}
              stroke={accent}
              strokeWidth="1"
              fill="none"
              opacity="0"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 0.15, pathLength: 1 }}
              transition={{
                delay: 0.4 + i * 0.15,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}

        {/* ── DATA FLOW PARTICLES: tokens → layers ── */}
        {inputTokens.map((_, i) => {
          const tokenY = tokenStartY + i * tokenGap;
          const targetY = layerStartY + totalLayerHeight / 2;
          return (
            <motion.circle
              key={`particle-in-${i}`}
              r="3"
              fill={accent}
              filter="url(#npv-glow)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                cx: [tokenZoneX + 120, layerZoneX],
                cy: [tokenY, targetY],
              }}
              transition={{
                delay: 0.6 + i * 0.15,
                duration: 0.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3 + i * 0.3,
              }}
            />
          );
        })}

        {/* ── INPUT TOKENS ── */}
        {inputTokens.map((token, i) => {
          const y = tokenStartY + i * tokenGap;
          return (
            <motion.g
              key={`token-${i}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1 + i * 0.12,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Token background */}
              <rect
                x={tokenZoneX}
                y={y - 13}
                width={110}
                height={26}
                rx={6}
                fill="#14141F"
                stroke={accent}
                strokeWidth="1"
                strokeOpacity="0.25"
              />

              {/* Token text */}
              <text
                x={tokenZoneX + 55}
                y={y + 4}
                textAnchor="middle"
                className="font-mono"
                fill="#F0F0F5"
                fontSize="12"
              >
                {token}
              </text>

              {/* Subtle index label */}
              <text
                x={tokenZoneX + 98}
                y={y + 3}
                textAnchor="end"
                className="font-mono"
                fill={accent}
                fontSize="8"
                opacity="0.4"
              >
                t{i}
              </text>
            </motion.g>
          );
        })}

        {/* ── TRANSFORMER LAYERS ── */}
        {layers.map((layerName, i) => {
          const y = layerStartY + i * (layerHeight + layerGap);
          const layerDelay = 0.6 + i * 0.12;

          return (
            <motion.g key={`layer-${i}`}>
              {/* Layer background bar */}
              <motion.rect
                x={layerZoneX}
                y={y}
                width={layerZoneWidth}
                height={layerHeight}
                rx={4}
                fill="url(#npv-layer-grad)"
                stroke={accent}
                strokeWidth="0.5"
                strokeOpacity="0"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1, strokeOpacity: 0.2 }}
                transition={{
                  delay: layerDelay,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformOrigin: `${layerZoneX}px ${y + layerHeight / 2}px` }}
              />

              {/* Activation sweep — light that travels across the layer */}
              <motion.rect
                x={layerZoneX}
                y={y}
                width={40}
                height={layerHeight}
                rx={4}
                fill={accent}
                opacity="0"
                initial={{ x: layerZoneX - 40, opacity: 0 }}
                animate={{
                  x: [layerZoneX - 40, layerZoneX + layerZoneWidth],
                  opacity: [0, 0.15, 0],
                }}
                transition={{
                  delay: layerDelay + 0.4,
                  duration: 1.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 4 + i * 0.2,
                }}
              />

              {/* Layer name */}
              <motion.text
                x={layerZoneX + layerZoneWidth / 2}
                y={y + layerHeight / 2 + 4}
                textAnchor="middle"
                className="font-mono"
                fill="#F0F0F5"
                fontSize="10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: layerDelay + 0.2, duration: 0.4 }}
              >
                {layerName}
              </motion.text>

              {/* Layer index */}
              <motion.text
                x={layerZoneX + 12}
                y={y + layerHeight / 2 + 3}
                className="font-mono"
                fill={accent}
                fontSize="8"
                opacity="0.3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: layerDelay + 0.3 }}
              >
                L{i}
              </motion.text>

              {/* Inter-layer connectors (vertical lines between layers) */}
              {i < layers.length - 1 && (
                <motion.line
                  x1={layerZoneX + layerZoneWidth / 2}
                  y1={y + layerHeight}
                  x2={layerZoneX + layerZoneWidth / 2}
                  y2={y + layerHeight + layerGap}
                  stroke={accent}
                  strokeWidth="1"
                  strokeDasharray="2 2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ delay: layerDelay + 0.3, duration: 0.3 }}
                />
              )}
            </motion.g>
          );
        })}

        {/* ── Data flow particles between layers ── */}
        {layers.slice(0, -1).map((_, i) => {
          const y1 = layerStartY + i * (layerHeight + layerGap) + layerHeight;
          const y2 = y1 + layerGap;
          return (
            <motion.circle
              key={`flow-${i}`}
              cx={layerZoneX + layerZoneWidth / 2}
              r="2"
              fill={accent}
              filter="url(#npv-glow)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
                cy: [y1, y2],
              }}
              transition={{
                delay: 1.0 + i * 0.15,
                duration: 0.4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3.5,
              }}
            />
          );
        })}

        {/* ── CONNECTION LINES: layers → predictions ── */}
        {sortedPredictions.map((_, i) => {
          const predY = predStartY + i * predGap;
          const sourceY = layerStartY + totalLayerHeight / 2;
          return (
            <motion.path
              key={`conn-out-${i}`}
              d={`M ${layerZoneX + layerZoneWidth} ${sourceY} C ${layerZoneX + layerZoneWidth + 40} ${sourceY}, ${predZoneX - 20} ${predY}, ${predZoneX} ${predY}`}
              stroke={accent}
              strokeWidth="1"
              fill="none"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: i === 0 ? 0.25 : 0.1, pathLength: 1 }}
              transition={{
                delay: 1.4 + i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}

        {/* ── OUTPUT PREDICTIONS ── */}
        {sortedPredictions.map((pred, i) => {
          const y = predStartY + i * predGap;
          const barMaxWidth = 100;
          const barWidth = (pred.probability / 100) * barMaxWidth;
          const isTop = i === 0;

          return (
            <motion.g
              key={`pred-${i}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.6 + i * 0.12,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Token label */}
              <text
                x={predZoneX}
                y={y - 8}
                className="font-mono"
                fill={isTop ? "#F0F0F5" : "#8888AA"}
                fontSize={isTop ? "12" : "10"}
              >
                {pred.token}
              </text>

              {/* Probability bar background */}
              <rect
                x={predZoneX}
                y={y}
                width={barMaxWidth + 50}
                height={14}
                rx={3}
                fill="#14141F"
                stroke="#1E1E2E"
                strokeWidth="0.5"
              />

              {/* Probability bar fill */}
              <motion.rect
                x={predZoneX}
                y={y}
                height={14}
                rx={3}
                fill={accent}
                opacity={isTop ? 0.7 : 0.25}
                initial={{ width: 0 }}
                animate={{ width: barWidth }}
                transition={{
                  delay: 1.8 + i * 0.12,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              {/* Glow on top prediction */}
              {isTop && (
                <motion.rect
                  x={predZoneX}
                  y={y}
                  height={14}
                  rx={3}
                  fill={accent}
                  filter="url(#npv-line-glow)"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: barWidth, opacity: 0.3 }}
                  transition={{
                    delay: 1.8,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              )}

              {/* Percentage text */}
              <motion.text
                x={predZoneX + barMaxWidth + 40}
                y={y + 11}
                textAnchor="end"
                className="font-mono"
                fill={isTop ? accent : "#555577"}
                fontSize="10"
                fontWeight={isTop ? "bold" : "normal"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 + i * 0.1, duration: 0.4 }}
              >
                {pred.probability}%
              </motion.text>
            </motion.g>
          );
        })}

        {/* ── FLOW ARROWS (decorative) ── */}
        {/* Arrow: tokens → layers */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <line
            x1={tokenZoneX + 130}
            y1={svgHeight / 2}
            x2={layerZoneX - 10}
            y2={svgHeight / 2}
            stroke={accent}
            strokeWidth="1"
            strokeDasharray="4 3"
          />
          <polygon
            points={`${layerZoneX - 10},${svgHeight / 2 - 4} ${layerZoneX - 2},${svgHeight / 2} ${layerZoneX - 10},${svgHeight / 2 + 4}`}
            fill={accent}
            opacity="0.5"
          />
        </motion.g>

        {/* Arrow: layers → predictions */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <line
            x1={layerZoneX + layerZoneWidth + 10}
            y1={svgHeight / 2}
            x2={predZoneX - 15}
            y2={svgHeight / 2}
            stroke={accent}
            strokeWidth="1"
            strokeDasharray="4 3"
          />
          <polygon
            points={`${predZoneX - 15},${svgHeight / 2 - 4} ${predZoneX - 7},${svgHeight / 2} ${predZoneX - 15},${svgHeight / 2 + 4}`}
            fill={accent}
            opacity="0.5"
          />
        </motion.g>

        {/* ── BOTTOM LABEL ── */}
        <motion.text
          x={svgWidth / 2}
          y={svgHeight - 15}
          textAnchor="middle"
          className="font-mono"
          fill={accent}
          fontSize="10"
          letterSpacing="3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          STATISTICAL PREDICTION ENGINE
        </motion.text>

        {/* ── AMBIENT FLOATING PARTICLES ── */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.circle
            key={`ambient-${i}`}
            r={1 + Math.random() * 1.5}
            fill={accent}
            opacity="0"
            initial={{
              cx: 100 + Math.random() * 500,
              cy: 50 + Math.random() * 320,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.2, 0],
              cy: [50 + Math.random() * 320, 30 + Math.random() * 340],
            }}
            transition={{
              delay: i * 0.7,
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
