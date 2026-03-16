"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
}

interface PipelineStep {
  step: string;
  label: string;
  icon: string;
}

const DEFAULT_CHAOS_ITEMS = [
  "¿Está terminado?",
  "// TODO: fix later",
  "prompt → código → 🤞",
  "Sin criterio de validación",
];

const DEFAULT_PIPELINE: PipelineStep[] = [
  { step: "SPEC", label: "Qué debe hacer", icon: "file-text" },
  { step: "DESIGN", label: "Cómo se construye", icon: "compass" },
  { step: "IMPLEMENT", label: "Código real", icon: "code" },
  { step: "VERIFY", label: "Validado contra spec", icon: "check-circle" },
];

const DEFAULT_SOURCE_OF_TRUTH =
  "La spec es el contrato. Todo se mide contra ella.";

// ---------- icon paths (inline SVG) ----------
function StepIcon({
  icon,
  color,
  size = 22,
}: {
  icon: string;
  color: string;
  size?: number;
}) {
  const s = size;
  const strokeProps = {
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };

  switch (icon) {
    case "file-text":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" {...strokeProps}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="16" y2="17" />
        </svg>
      );
    case "compass":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" {...strokeProps}>
          <circle cx="12" cy="12" r="10" />
          <polygon
            points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
            fill={color}
            fillOpacity="0.15"
          />
        </svg>
      );
    case "code":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" {...strokeProps}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "check-circle":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" {...strokeProps}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    default:
      return null;
  }
}

// Deterministic pseudo-random based on index for SSR safety
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

export function SddSpecVisual({ data, accent }: Props) {
  const chaosItems =
    (data.chaosItems as string[]) || DEFAULT_CHAOS_ITEMS;
  const pipeline =
    (data.pipeline as PipelineStep[]) || DEFAULT_PIPELINE;
  const sourceOfTruth =
    (data.sourceOfTruth as string) || DEFAULT_SOURCE_OF_TRUTH;

  const chaosColor = "#FF3366";

  const svgWidth = 740;
  const svgHeight = 460;

  // Layout zones
  const chaosZoneX = 15;
  const chaosZoneWidth = 230;
  const dividerX = 270;
  const pipeZoneX = 320;
  const pipeZoneWidth = 400;

  // Pipeline vertical layout
  const pipeStartY = 65;
  const pipeStepHeight = 72;
  const pipeNodeRadius = 28;

  // Chaos items vertical scatter
  const chaosStartY = 70;
  const chaosGap = 70;

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Ambient glow — dual tone */}
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: 250,
          height: 250,
          backgroundColor: chaosColor,
          opacity: 0.04,
          left: "15%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: 300,
          height: 300,
          backgroundColor: accent,
          opacity: 0.06,
          left: "70%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ opacity: [0.04, 0.09, 0.04] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full max-w-[740px]"
        style={{ maxHeight: "88vh" }}
      >
        <defs>
          {/* Glow filter — accent */}
          <filter id="ssv-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow filter — chaos red */}
          <filter
            id="ssv-glow-red"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft line glow */}
          <filter
            id="ssv-line-glow"
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

          {/* Pipeline node gradient */}
          <radialGradient id="ssv-node-grad">
            <stop offset="0%" stopColor={accent} stopOpacity="0.18" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.04" />
          </radialGradient>

          {/* Chaos node gradient */}
          <radialGradient id="ssv-chaos-grad">
            <stop offset="0%" stopColor={chaosColor} stopOpacity="0.12" />
            <stop offset="100%" stopColor={chaosColor} stopOpacity="0.02" />
          </radialGradient>

          {/* Divider gradient */}
          <linearGradient id="ssv-divider-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E1E2E" stopOpacity="0" />
            <stop offset="30%" stopColor="#1E1E2E" stopOpacity="1" />
            <stop offset="70%" stopColor="#1E1E2E" stopOpacity="1" />
            <stop offset="100%" stopColor="#1E1E2E" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ════════════════════════════════════════════
            SECTION LABELS
            ════════════════════════════════════════════ */}
        <motion.text
          x={chaosZoneX + chaosZoneWidth / 2}
          y={36}
          textAnchor="middle"
          className="font-mono"
          fill={chaosColor}
          fontSize="10"
          letterSpacing="3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          SIN SPEC
        </motion.text>

        <motion.text
          x={pipeZoneX + pipeZoneWidth / 2 - 20}
          y={36}
          textAnchor="middle"
          className="font-mono"
          fill={accent}
          fontSize="10"
          letterSpacing="3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          CON SPEC
        </motion.text>

        {/* ════════════════════════════════════════════
            CHAOS SIDE — scattered fragments
            ════════════════════════════════════════════ */}
        {chaosItems.map((item, i) => {
          const baseY = chaosStartY + i * chaosGap;
          // Stagger positions for "messy" feel
          const offsetX = (i % 2 === 0 ? 0 : 35) + seededRandom(i + 10) * 20;
          const rotation = (seededRandom(i + 5) - 0.5) * 12;
          const itemX = chaosZoneX + 15 + offsetX;

          return (
            <motion.g
              key={`chaos-${i}`}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2 + i * 0.18,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Fragment background — slightly rotated */}
              <motion.rect
                x={itemX}
                y={baseY - 14}
                width={180}
                height={30}
                rx={4}
                fill="#14141F"
                stroke={chaosColor}
                strokeWidth="0.8"
                strokeOpacity="0.2"
                strokeDasharray="4 3"
                transform={`rotate(${rotation} ${itemX + 90} ${baseY})`}
                animate={{ strokeOpacity: [0.15, 0.3, 0.15] }}
                transition={{
                  duration: 3 + seededRandom(i) * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Fragment text */}
              <motion.text
                x={itemX + 12}
                y={baseY + 4}
                className="font-mono"
                fill="#8888AA"
                fontSize="10"
                transform={`rotate(${rotation} ${itemX + 90} ${baseY})`}
              >
                {item}
              </motion.text>

              {/* Red "X" or "?" mark */}
              <motion.text
                x={itemX + 170}
                y={baseY + 5}
                textAnchor="end"
                className="font-mono"
                fill={chaosColor}
                fontSize="14"
                fontWeight="bold"
                opacity="0.5"
                transform={`rotate(${rotation} ${itemX + 90} ${baseY})`}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              >
                {i % 2 === 0 ? "?" : "✗"}
              </motion.text>
            </motion.g>
          );
        })}

        {/* Chaos — floating question marks */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.text
            key={`q-${i}`}
            x={chaosZoneX + 20 + seededRandom(i + 20) * 200}
            className="font-mono"
            fill={chaosColor}
            fontSize={10 + seededRandom(i + 30) * 8}
            opacity="0"
            initial={{
              y: chaosStartY + seededRandom(i + 40) * 280,
              opacity: 0,
            }}
            animate={{
              y: [
                chaosStartY + seededRandom(i + 40) * 280,
                chaosStartY + seededRandom(i + 40) * 280 - 20,
                chaosStartY + seededRandom(i + 40) * 280,
              ],
              opacity: [0, 0.15, 0],
            }}
            transition={{
              delay: 0.5 + i * 0.6,
              duration: 3 + seededRandom(i) * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ?
          </motion.text>
        ))}

        {/* Chaos — red crosshatch lines (background texture) */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.line
            key={`xline-${i}`}
            x1={chaosZoneX + seededRandom(i + 60) * chaosZoneWidth}
            y1={chaosStartY + seededRandom(i + 70) * 300}
            x2={
              chaosZoneX +
              seededRandom(i + 60) * chaosZoneWidth +
              40 +
              seededRandom(i + 80) * 50
            }
            y2={
              chaosStartY +
              seededRandom(i + 70) * 300 +
              (seededRandom(i + 90) - 0.5) * 60
            }
            stroke={chaosColor}
            strokeWidth="0.5"
            strokeDasharray="3 5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.08, 0] }}
            transition={{
              delay: 0.8 + i * 0.5,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* ════════════════════════════════════════════
            CENTER DIVIDER
            ════════════════════════════════════════════ */}
        <motion.line
          x1={dividerX}
          y1={30}
          x2={dividerX}
          y2={svgHeight - 50}
          stroke="url(#ssv-divider-grad)"
          strokeWidth="1"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${dividerX}px ${svgHeight / 2}px` }}
        />

        {/* Divider glow sweep */}
        <motion.rect
          x={dividerX - 15}
          y={30}
          width={30}
          height={8}
          rx={4}
          fill={accent}
          opacity="0"
          initial={{ y: 30 }}
          animate={{
            y: [30, svgHeight - 60, 30],
            opacity: [0, 0.12, 0],
          }}
          transition={{
            delay: 1.5,
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ════════════════════════════════════════════
            PIPELINE SIDE — structured flow
            ════════════════════════════════════════════ */}
        {pipeline.map((step, i) => {
          const y = pipeStartY + i * pipeStepHeight;
          const nodeX = pipeZoneX + 40;
          const nodeY = y + 20;
          const delayBase = 1.0 + i * 0.3;
          const isSpec = i === 0;

          return (
            <motion.g key={`step-${i}`}>
              {/* Connecting arrow to next step */}
              {i < pipeline.length - 1 && (
                <>
                  <motion.line
                    x1={nodeX}
                    y1={nodeY + pipeNodeRadius}
                    x2={nodeX}
                    y2={nodeY + pipeStepHeight - pipeNodeRadius}
                    stroke={accent}
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: delayBase + 0.25, duration: 0.5 }}
                  />
                  {/* Arrow head */}
                  <motion.polygon
                    points={`${nodeX - 4},${nodeY + pipeStepHeight - pipeNodeRadius - 4} ${nodeX},${nodeY + pipeStepHeight - pipeNodeRadius + 2} ${nodeX + 4},${nodeY + pipeStepHeight - pipeNodeRadius - 4}`}
                    fill={accent}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: delayBase + 0.35, duration: 0.3 }}
                  />
                  {/* Flow particle */}
                  <motion.circle
                    r="2.5"
                    fill={accent}
                    filter="url(#ssv-glow)"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.7, 0],
                      cx: [nodeX, nodeX],
                      cy: [
                        nodeY + pipeNodeRadius,
                        nodeY + pipeStepHeight - pipeNodeRadius,
                      ],
                    }}
                    transition={{
                      delay: delayBase + 0.5,
                      duration: 0.8,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 3.5 + i * 0.3,
                    }}
                  />
                </>
              )}

              {/* Node circle */}
              <motion.circle
                cx={nodeX}
                cy={nodeY}
                r={pipeNodeRadius}
                fill="url(#ssv-node-grad)"
                stroke={accent}
                strokeWidth={isSpec ? 1.5 : 1}
                strokeOpacity={isSpec ? 0.6 : 0.3}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: delayBase,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 18,
                }}
                style={{ transformOrigin: `${nodeX}px ${nodeY}px` }}
              />

              {/* Spec glow pulse (only for SPEC node) */}
              {isSpec && (
                <motion.circle
                  cx={nodeX}
                  cy={nodeY}
                  r={pipeNodeRadius + 6}
                  fill="none"
                  stroke={accent}
                  strokeWidth="1.5"
                  filter="url(#ssv-glow)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.35, 0], scale: [0.9, 1.1, 0.9] }}
                  transition={{
                    delay: delayBase + 0.6,
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: `${nodeX}px ${nodeY}px` }}
                />
              )}

              {/* Icon inside node */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delayBase + 0.15, duration: 0.4 }}
              >
                <foreignObject
                  x={nodeX - 11}
                  y={nodeY - 11}
                  width={22}
                  height={22}
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <StepIcon icon={step.icon} color={accent} size={20} />
                  </div>
                </foreignObject>
              </motion.g>

              {/* Step name */}
              <motion.text
                x={nodeX + pipeNodeRadius + 16}
                y={nodeY - 4}
                className="font-mono"
                fill="#F0F0F5"
                fontSize="13"
                fontWeight="600"
                letterSpacing="1"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: delayBase + 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {step.step}
              </motion.text>

              {/* Step label */}
              <motion.text
                x={nodeX + pipeNodeRadius + 16}
                y={nodeY + 14}
                className="font-mono"
                fill="#8888AA"
                fontSize="10"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 0.7, x: 0 }}
                transition={{
                  delay: delayBase + 0.2,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {step.label}
              </motion.text>

              {/* Step number badge */}
              <motion.text
                x={nodeX + pipeNodeRadius + pipeZoneWidth - 110}
                y={nodeY + 4}
                textAnchor="end"
                className="font-mono"
                fill={accent}
                fontSize="9"
                opacity="0.3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: delayBase + 0.3, duration: 0.3 }}
              >
                {String(i + 1).padStart(2, "0")}
              </motion.text>
            </motion.g>
          );
        })}

        {/* ════════════════════════════════════════════
            VERIFICATION FEEDBACK LOOP (spec → verify arc)
            ════════════════════════════════════════════ */}
        {(() => {
          const specNodeX = pipeZoneX + 40;
          const specNodeY = pipeStartY + 20;
          const verifyNodeY =
            pipeStartY + (pipeline.length - 1) * pipeStepHeight + 20;
          const arcX = pipeZoneX + pipeZoneWidth - 30;

          return (
            <motion.path
              d={`M ${specNodeX + pipeNodeRadius} ${specNodeY} C ${arcX} ${specNodeY}, ${arcX} ${verifyNodeY}, ${specNodeX + pipeNodeRadius} ${verifyNodeY}`}
              stroke={accent}
              strokeWidth="1"
              strokeDasharray="4 4"
              fill="none"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 0.15, pathLength: 1 }}
              transition={{
                delay: 2.4,
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })()}

        {/* Feedback label */}
        <motion.text
          x={pipeZoneX + pipeZoneWidth - 40}
          y={pipeStartY + ((pipeline.length - 1) * pipeStepHeight) / 2 + 20}
          textAnchor="middle"
          className="font-mono"
          fill={accent}
          fontSize="8"
          letterSpacing="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          transform={`rotate(90, ${pipeZoneX + pipeZoneWidth - 40}, ${pipeStartY + ((pipeline.length - 1) * pipeStepHeight) / 2 + 20})`}
        >
          VALIDAR CONTRA SPEC
        </motion.text>

        {/* ════════════════════════════════════════════
            BOTTOM — SOURCE OF TRUTH LABEL
            ════════════════════════════════════════════ */}
        <motion.g
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label background */}
          <rect
            x={svgWidth / 2 - 180}
            y={svgHeight - 52}
            width={360}
            height={32}
            rx={6}
            fill="#14141F"
            stroke={accent}
            strokeWidth="0.8"
            strokeOpacity="0.2"
          />

          {/* Main label */}
          <motion.text
            x={svgWidth / 2}
            y={svgHeight - 36}
            textAnchor="middle"
            className="font-mono"
            fill={accent}
            fontSize="11"
            fontWeight="600"
            letterSpacing="2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            SPEC = FUENTE DE VERDAD
          </motion.text>

          {/* Subtitle */}
          <motion.text
            x={svgWidth / 2}
            y={svgHeight - 14}
            textAnchor="middle"
            className="font-mono"
            fill="#8888AA"
            fontSize="9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 3.0, duration: 0.6 }}
          >
            {sourceOfTruth}
          </motion.text>
        </motion.g>

        {/* ════════════════════════════════════════════
            AMBIENT PARTICLES
            ════════════════════════════════════════════ */}
        {/* Cyan particles — pipeline side */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.circle
            key={`ap-cyan-${i}`}
            r={1 + seededRandom(i + 100) * 1.5}
            fill={accent}
            initial={{
              cx: pipeZoneX + seededRandom(i + 110) * pipeZoneWidth,
              cy: 50 + seededRandom(i + 120) * 340,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.25, 0],
              cy: [
                50 + seededRandom(i + 120) * 340,
                30 + seededRandom(i + 120) * 340,
              ],
            }}
            transition={{
              delay: 1.5 + i * 0.8,
              duration: 3 + seededRandom(i + 130) * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Red particles — chaos side */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.circle
            key={`ap-red-${i}`}
            r={1 + seededRandom(i + 200) * 1.2}
            fill={chaosColor}
            initial={{
              cx: chaosZoneX + seededRandom(i + 210) * chaosZoneWidth,
              cy: 60 + seededRandom(i + 220) * 300,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.15, 0],
              cy: [
                60 + seededRandom(i + 220) * 300,
                80 + seededRandom(i + 220) * 300,
              ],
            }}
            transition={{
              delay: 0.8 + i * 0.9,
              duration: 4 + seededRandom(i + 230) * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
