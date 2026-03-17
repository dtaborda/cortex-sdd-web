import type { ModuleDefinition } from "@/types/content";

export const godAgentModuleEn: ModuleDefinition = {
  id: "god-agent",
  order: 5,
  title: "The God Agent: When One Does Everything",
  shortTitle: "God Agent",
  description:
    "An agent that designs, implements, tests, and deploys is a God Object with context. It scales until it doesn't.",
  icon: "alert-triangle",
  accentColor: "#EF4444",
  slides: [
    {
      id: "god-problema",
      moduleId: "god-agent",
      order: 1,
      title: "The God Agent: one agent to rule them all",
      eyebrow: "05 \u00b7 GOD AGENT",
      body: "A 500-line AGENTS.md with every instruction imaginable. A single agent that designs APIs, writes React components, configures Terraform, and drafts documentation. It works incredibly well for simple tasks. But as the project scales, the agent loads instructions for 15 different domains, most of them irrelevant to the current task. It's the God Object from OOP, but with cognitive context. Same anti-pattern, different abstraction layer.",
      bullets: [
        "System prompt bloated with instructions from every domain",
        "Every task competes for the same attention budget",
        "The agent 'knows' everything but is an expert in nothing",
        "Errors from one domain leak into and contaminate others",
      ],
      keyMessage:
        "The God Agent is seductive because it ships early. It's destructive because it fails when you need it most.",
      nextBridge:
        "How much context gets wasted? Let's look at the numbers.",
      visualType: "degradation-flow",
      visualData: {
        stages: [
          { label: "Proyecto chico", quality: 90, tokens: "15K" },
          { label: "Crecimiento", quality: 65, tokens: "50K" },
          { label: "Instrucciones infladas", quality: 40, tokens: "90K" },
          { label: "God Agent colapsa", quality: 15, tokens: "150K" },
        ],
      },
      tags: ["god-agent", "anti-pattern", "scale"],
    },
    {
      id: "god-mezcla",
      moduleId: "god-agent",
      order: 2,
      title: "Mixed layers, lost focus",
      eyebrow: "Anatomy of the problem",
      body: "When an agent loads instructions for designing database schemas AND writing CSS AND configuring CI pipelines, each instruction competes for attention. The model has a finite attention budget. Irrelevant instructions aren't harmless \u2014 they dilute the signal from the instructions that actually matter. It's like giving a surgeon a manual that includes cooking recipes: it doesn't completely confuse them, but it sure doesn't help. The cognitive load overhead is real and measurable.",
      visualType: "comparison-table",
      visualData: {
        headers: ["Aspect", "God Agent", "Specialized agents"],
        rows: [
          [
            "System prompt",
            "500+ lines, all domains",
            "50-100 lines, domain-specific",
          ],
          [
            "Useful context",
            "~20% relevant to the task",
            "~90% relevant to the task",
          ],
          [
            "Output quality",
            "Acceptable, generic",
            "Precise, specialized",
          ],
          [
            "Scalability",
            "Degrades with each new domain",
            "Grows without interference",
          ],
          [
            "Debugging",
            "Hard, cross-domain side effects",
            "Isolated, traceable",
          ],
        ],
      },
      keyMessage:
        "It's not that the model can't do everything. It's that it does everything worse when it tries to do everything at once.",
      nextBridge:
        "The solution is obvious in hindsight: orchestrate, don't accumulate.",
      tags: ["focus", "attention", "specialization"],
    },
    {
      id: "god-orquestacion",
      moduleId: "god-agent",
      order: 3,
      title: "From God Agent to orchestration",
      eyebrow: "The evolutionary leap",
      body: "The transition from God Agent to orchestration mirrors the evolution of software: from monolith to microservices. A lightweight coordinator that doesn't execute \u2014 it only delegates. Specialized sub-agents that boot with fresh, focused context. Each one is an expert in its domain. The coordinator maintains global state without loading implementation details. Less is more. Focus is everything. The blast radius of any failure stays contained.",
      keyMessage:
        "The leap from God Agent to orchestrator is the same as monolith to microservices. History repeats. The pattern is universal.",
      nextBridge:
        "But orchestrating without a methodology is just coordinated chaos. We need a planning framework. Enter SDD.",
      visualType: "architecture-map",
      visualData: {
        before: {
          label: "God Agent",
          description: "Un agente, todas las tareas",
          color: "#EF4444",
        },
        after: {
          label: "Orquestador",
          description: "Coordina sub-agentes especializados",
          color: "#10B981",
        },
        agents: [
          { label: "Spec Writer", color: "#3B82F6" },
          { label: "Designer", color: "#8B5CF6" },
          { label: "Implementer", color: "#F59E0B" },
          { label: "Verifier", color: "#EC4899" },
        ],
      },
      tags: ["orchestration", "evolution", "microservices"],
    },
  ],
};
