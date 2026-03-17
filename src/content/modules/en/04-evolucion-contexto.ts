import type { ModuleDefinition } from "@/types/content";

export const evolucionContextoModuleEn: ModuleDefinition = {
  id: "evolucion-contexto",
  order: 4,
  title: "Context Evolution: From Monolith to Isolation",
  shortTitle: "Context Evolution",
  description:
    "A single chat for everything is the most common anti-pattern. Separating responsibilities into isolated contexts changes the game.",
  icon: "trending-up",
  accentColor: "#F97316",
  slides: [
    {
      id: "evo-antipatron",
      moduleId: "evolucion-contexto",
      order: 1,
      title: "One chat for everything: the anti-pattern",
      eyebrow: "04 \u00b7 CONTEXT EVOLUTION",
      body: "The natural instinct is to use a single chat for the entire project: design the database, write the frontend, configure the deploy, fix bugs. Each task injects different context. By message 40, the model is dragging fragments from five different tasks, obsolete instructions, and code you already changed. The context becomes a swamp where signal drowns in noise. This is the monolith problem, but for cognitive load instead of code.",
      bullets: [
        "Messages 1-10: clean context, excellent responses",
        "Messages 20-30: starts forgetting early decisions",
        "Messages 40-60: mixes instructions from different tasks",
        "Messages 80+: compaction, severe loss, hallucinations",
      ],
      keyMessage:
        "A long chat isn't productivity. It's accumulated context debt. And like tech debt, it compounds.",
      nextBridge:
        "The solution isn't to chat less. It's to separate responsibilities.",
      visualType: "degradation-flow",
      visualData: {
        stages: [
          { label: "Chat nuevo", quality: 98, tokens: "2K" },
          { label: "Multi-tarea", quality: 60, tokens: "50K" },
          { label: "Pantano contextual", quality: 30, tokens: "100K" },
          { label: "Colapso", quality: 10, tokens: "180K" },
        ],
      },
      tags: ["anti-pattern", "context", "degradation"],
    },
    {
      id: "evo-separacion",
      moduleId: "evolucion-contexto",
      order: 2,
      title: "Separate responsibilities",
      eyebrow: "The first architectural insight",
      body: "The same rule that applies to code applies to an agent's context: separation of concerns. One conversation to design the data schema. Another to implement the API. Another for tests. Each context starts clean, focused, with only the instructions and files relevant to that task. The model performs better because its window contains pure signal, not accumulated noise. It's the Single Responsibility Principle applied to cognitive architecture.",
      keyMessage:
        "Separating contexts is the cognitive equivalent of SRP for agents. Same principle, different domain, identical results.",
      nextBridge:
        "But separating by task opens a question: how do you coordinate between isolated contexts?",
      visualType: "architecture-map",
      visualData: {
        center: { label: "Proyecto", color: "#F97316" },
        connections: [
          { label: "Contexto DB", direction: "out", description: "Dise\u00f1o de esquema" },
          { label: "Contexto API", direction: "out", description: "Endpoints y l\u00f3gica" },
          { label: "Contexto UI", direction: "out", description: "Componentes y UX" },
          { label: "Contexto Tests", direction: "out", description: "Testing y QA" },
          { label: "Contexto Deploy", direction: "out", description: "CI/CD y config" },
        ],
      },
      tags: ["separation", "responsibilities", "architecture"],
    },
    {
      id: "evo-aislamiento",
      moduleId: "evolucion-contexto",
      order: 3,
      title: "Isolated context per task",
      eyebrow: "The pattern that scales",
      body: "Isolated context doesn't mean ignorant context. Each sub-agent boots with a specific system prompt, receives only the artifacts it needs, and returns a scoped result. The coordinator doesn't send the entire codebase \u2014 it sends the relevant specs, the affected files, and prior decisions. Less context, more relevance, better output. It's the same principle behind microservices: small, focused, loosely coupled.",
      visualType: "comparison-table",
      visualData: {
        headers: ["Monolithic chat", "Isolated contexts"],
        rows: [
          ["Everything in one conversation", "One conversation per task"],
          ["Cumulative context", "Fresh context per task"],
          ["Frequent compaction", "Rarely compacts"],
          ["Mixed instructions", "Focused instructions"],
          ["Progressive degradation", "Consistent quality"],
          ["Impossible to debug", "Clear traceability"],
        ],
      },
      keyMessage:
        "The best context isn't the largest. It's the most relevant for the current task.",
      nextBridge:
        "Separating contexts solves degradation. But if a single agent is still doing all the tasks, the problem just changes shape.",
      tags: ["isolation", "sub-agents", "quality"],
    },
  ],
};
