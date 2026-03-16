export type ModuleId =
  | "ia-generativa"
  | "context-window"
  | "chat-vs-agente"
  | "evolucion-contexto"
  | "god-agent"
  | "sdd-orchestrator"
  | "engram"
  | "skills-registry"
  | "stack-bibliotecas"
  | "cierre";

export type VisualType =
  | "token-prediction"
  | "context-layers"
  | "comparison-table"
  | "degradation-flow"
  | "role-specialization"
  | "dag-flow"
  | "engram-loop"
  | "architecture-map"
  | "ecosystem-map"
  | "cards-grid"
  | "timeline"
  | "signal-vs-noise"
  | "model-router"
  | "skills-loading"
  | "outcome-comparison"
  | "text-only"
  | "neural-prediction"
  | "hero";

export interface SlideDefinition {
  id: string;
  moduleId: ModuleId;
  order: number;
  title: string;
  eyebrow?: string;
  subtitle?: string;
  body: string;
  bullets?: string[];
  keyMessage?: string;
  nextBridge?: string;
  visualType: VisualType;
  visualData?: Record<string, unknown>;
  tags?: string[];
}

export interface ModuleDefinition {
  id: ModuleId;
  order: number;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  accentColor: string;
  slides: SlideDefinition[];
}
