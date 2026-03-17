import type { ModuleDefinition } from "@/types/content";

export const cierreModuleEn: ModuleDefinition = {
  id: "cierre",
  order: 10,
  title: "Closing",
  shortTitle: "Closing",
  description:
    "The difference isn't the model. It's the system.",
  icon: "target",
  accentColor: "#A855F7",
  slides: [
    {
      id: "cierre-comparacion",
      moduleId: "cierre",
      order: 1,
      title: "Model alone vs model + architecture",
      eyebrow: "10 \u00b7 CLOSING",
      body: "Everything we've covered in this journey converges here. On one side, the model alone: a disposable chat that forgets everything, loads bloated instructions, can't distinguish signal from noise, and starts from zero every session. On the other side, the same model with architecture: SDD orchestration with clear phases, context isolated by responsibility, skills that load only what's needed, Engram persisting what matters, and specs as a verifiable source of truth. The model is the engine. The architecture is the car. Same engine, wildly different outcomes.",
      keyMessage:
        "The model is the engine, not the car. The architecture IS the car.",
      nextBridge:
        "And the final thesis fits in one sentence.",
      visualType: "outcome-comparison",
      visualData: {
        without: {
          title: "Solo el modelo",
          items: [
            "Disposable chat with no memory",
            "Ephemeral context that degrades",
            "Bloated prompts that dilute focus",
            "Total amnesia between sessions",
            "No structure, no verification",
          ],
        },
        with: {
          title: "Modelo + Arquitectura",
          items: [
            "SDD orchestration with clear phases",
            "Context isolated by responsibility",
            "Skills that load only what's needed",
            "Engram: real persistent memory",
            "Specs as verifiable source of truth",
          ],
        },
      },
      tags: ["comparison", "model", "architecture"],
    },
    {
      id: "cierre-tesis",
      moduleId: "cierre",
      order: 2,
      title: "The difference isn't the model. It's the system.",
      eyebrow: "10 \u00b7 CLOSING",
      body: "When you stop thinking about 'which model to use' and start thinking about 'what system to build', the quality leap is inevitable. SDD, Engram, Skills, MCP, model routing \u2014 these aren't features. They're the architecture that turns a disposable chat into a real cognitive system. Next time someone tells you the secret is the prompt, respond: the secret is everything that happens around the prompt. That's the whole thesis. Ship systems, not prompts.",
      keyMessage:
        "The difference isn't the model. It's the system you build around the model. Ship the system.",
      nextBridge:
        "Only one question remains: where do you start?",
      visualType: "hero",
      tags: ["thesis", "system", "cognitive"],
    },
    {
      id: "cierre-accion",
      moduleId: "cierre",
      order: 3,
      title: "Where do you start?",
      eyebrow: "10 \u00b7 CLOSING",
      body: "You don't need to implement everything at once. Each piece ships value independently. But together, they build something that no amount of prompt engineering can match. Install Claude Code as your entry point. Create your AGENTS.md as the project router. Document a recurring pattern as a skill. Activate Engram for persistent memory. Plan your next feature with SDD. Connect MCP to integrate external tools. Each step is incremental, each step is reversible, and each step moves the system closer to the goal.",
      keyMessage:
        "The best time to start was yesterday. The second best time is now. Ship it.",
      visualType: "cards-grid",
      visualData: {
        cards: [
          {
            title: "1. Install Claude Code",
            description:
              "Your entry point to the agent ecosystem",
          },
          {
            title: "2. Create your AGENTS.md",
            description:
              "Define the router that organizes your project",
          },
          {
            title: "3. Write your first Skill",
            description:
              "Document a recurring pattern from your team",
          },
          {
            title: "4. Activate Engram",
            description:
              "Give your sessions real persistent memory",
          },
          {
            title: "5. Init SDD",
            description:
              "Plan your next feature with real specs",
          },
          {
            title: "6. Connect MCP",
            description:
              "Integrate Jira, Notion, external APIs",
          },
        ],
      },
      tags: ["action", "steps", "start"],
    },
  ],
};
