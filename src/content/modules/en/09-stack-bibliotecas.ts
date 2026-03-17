import type { ModuleDefinition } from "@/types/content";

export const stackBibliotecasModuleEn: ModuleDefinition = {
  id: "stack-bibliotecas",
  order: 9,
  title: "Stack & Libraries",
  shortTitle: "Stack",
  description:
    "The complete ecosystem: SDD + Engram + Skills + MCP",
  icon: "boxes",
  accentColor: "#8B5CF6",
  slides: [
    {
      id: "stack-ecosistema",
      moduleId: "stack-bibliotecas",
      order: 1,
      title: "The complete ecosystem",
      eyebrow: "09 \u00b7 STACK & LIBRARIES",
      body: "No single piece of the stack ships in isolation. SDD without Engram loses context between sessions. Engram without Skills doesn't know which patterns to apply. Skills without SDD have no execution structure. MCP without orchestration is a collection of APIs with no direction. The real power emerges when the pieces compose: the SDD orchestrator defines phases, Engram persists decisions, Skills inject domain expertise, MCP connects external tools, and Context7 keeps documentation current. Each layer amplifies the others. It's a force multiplier.",
      keyMessage:
        "The power isn't in any individual piece. It's in how they compose. The whole is greater than the sum of its parts.",
      nextBridge:
        "And within this ecosystem, not all models are right for every job.",
      visualType: "ecosystem-map",
      visualData: {
        center: { label: "Claude Code", color: "#8B5CF6" },
        satellites: [
          {
            label: "SDD",
            color: "#00F0FF",
            description: "Structured phase-based planning",
          },
          {
            label: "Engram",
            color: "#EC4899",
            description: "Persistent cross-session memory",
          },
          {
            label: "Skills",
            color: "#84CC16",
            description: "On-demand technical context",
          },
          {
            label: "MCP",
            color: "#3B82F6",
            description: "External tool connections",
          },
          {
            label: "Context7",
            color: "#10B981",
            description: "Real-time updated documentation",
          },
        ],
      },
      tags: ["ecosystem", "composition", "stack"],
    },
    {
      id: "stack-model-router",
      moduleId: "stack-bibliotecas",
      order: 2,
      title: "Model Router: the right engine for each phase",
      eyebrow: "09 \u00b7 STACK & LIBRARIES",
      body: "Using the same model for everything is like using the same tool for every job: it works, but it's suboptimal. Opus for complex architectural decisions and high-level orchestration. Sonnet for production implementation and precise refactoring. Haiku for quick tasks where speed matters more than depth. GPT-4o as a second opinion on extensive analysis. The model router automatically selects the right engine based on the active SDD phase. It's intelligent dispatching out of the box.",
      keyMessage:
        "There's no 'best model'. There's the right model for each phase. Model routing is the escape hatch from one-size-fits-all.",
      nextBridge:
        "The model is just the engine. Let's see how all the layers interact in practice.",
      visualType: "model-router",
      visualData: {
        models: [
          {
            name: "Claude Opus",
            bestFor: "Architecture, complex decisions, orchestration",
            tier: "premium",
          },
          {
            name: "Claude Sonnet",
            bestFor: "Implementation, refactoring, production code",
            tier: "balanced",
          },
          {
            name: "Claude Haiku",
            bestFor: "Quick tasks, formatting, simple searches",
            tier: "fast",
          },
          {
            name: "GPT-4o",
            bestFor: "Extensive analysis, long context, second opinion",
            tier: "alternative",
          },
        ],
      },
      tags: ["model-router", "models", "optimization"],
    },
    {
      id: "stack-capas",
      moduleId: "stack-bibliotecas",
      order: 3,
      title: "Layer interaction",
      eyebrow: "09 \u00b7 STACK & LIBRARIES",
      body: "SDD defines the phases of work. Each phase selects the optimal model via model router. The orchestrator launches sub-agents with fresh context. Engram persists decisions that cross session boundaries. Skills inject domain knowledge only when it's needed. MCP connects to Jira, Notion, GitHub, databases. Context7 provides up-to-date documentation for any library. The agent isn't a chat that receives instructions \u2014 it's a system with architecture, memory, specialized knowledge, and external connections. A cognitive system, not a chatbot.",
      keyMessage:
        "A cognitive system isn't a bigger model. It's a model with architecture. That's the whole thesis.",
      nextBridge:
        "What separates a chat from a cognitive system isn't the model. It's everything you build around it.",
      visualType: "architecture-map",
      visualData: {
        layers: [
          {
            label: "Orchestration (SDD)",
            description: "Defines phases, coordinates sub-agents",
            color: "#00F0FF",
          },
          {
            label: "Memory (Engram)",
            description: "Persists decisions cross-session",
            color: "#EC4899",
          },
          {
            label: "Knowledge (Skills)",
            description: "Injects expertise on demand",
            color: "#84CC16",
          },
          {
            label: "Connections (MCP)",
            description: "Integrates external tools",
            color: "#3B82F6",
          },
          {
            label: "Docs (Context7)",
            description: "Real-time updated documentation",
            color: "#10B981",
          },
        ],
      },
      tags: ["layers", "interaction", "architecture"],
    },
  ],
};
