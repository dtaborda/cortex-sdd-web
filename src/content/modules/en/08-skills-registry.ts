import type { ModuleDefinition } from "@/types/content";

export const skillsRegistryModuleEn: ModuleDefinition = {
  id: "skills-registry",
  order: 8,
  title: "Skills Registry",
  shortTitle: "Skills",
  description:
    "On-demand context instead of a bloated prompt",
  icon: "puzzle",
  accentColor: "#84CC16",
  slides: [
    {
      id: "skills-prompt-gigante",
      moduleId: "skills-registry",
      order: 1,
      title: "The bloated prompt problem",
      eyebrow: "08 \u00b7 SKILLS REGISTRY",
      body: "The temptation is obvious: stuff everything the agent needs to know into a monolithic system prompt. React rules, testing conventions, API patterns, CSS standards \u2014 all together, all the time. The result is predictable: as the prompt grows, response quality degrades. It's not a bug, it's math. Every token of irrelevant instruction competes for attention with tokens that actually matter. At 80K tokens of instructions, the model does everything mediocre instead of doing something well. It's the cognitive load equivalent of a microservices anti-pattern: a distributed monolith.",
      keyMessage:
        "More context is not better context. It's more noise. Keep it lean.",
      nextBridge:
        "The solution isn't a bigger prompt. It's a router that knows what to load.",
      visualType: "degradation-flow",
      visualData: {
        stages: [
          { label: "Prompt base", quality: 95, tokens: "2K" },
          { label: "+Framework rules", quality: 75, tokens: "15K" },
          { label: "+All conventions", quality: 50, tokens: "40K" },
          { label: "+Every pattern", quality: 25, tokens: "80K" },
        ],
      },
      tags: ["skills", "prompt", "degradation"],
    },
    {
      id: "skills-agents-md",
      moduleId: "skills-registry",
      order: 2,
      title: "AGENTS.md as a lightweight router",
      eyebrow: "08 \u00b7 SKILLS REGISTRY",
      body: "AGENTS.md is not a 500-page manual. It's a smart index. It contains the minimum information for the agent to understand the project structure and know where to look when it needs more. It doesn't load React rules if the task is configuring Terraform. It doesn't load testing conventions if it's writing documentation. It acts as a router: receives the task, identifies the domain, and delegates to the right skill. Opinionated, minimal, zero waste.",
      keyMessage:
        "AGENTS.md doesn't contain the knowledge. It contains the map to the knowledge. Router, not encyclopedia.",
      nextBridge:
        "And that map points to skills: context packages that load on demand.",
      visualType: "architecture-map",
      visualData: {
        nodes: [
          { label: "AGENTS.md", type: "router" },
          { label: "react-19", type: "skill" },
          { label: "playwright", type: "skill" },
          { label: "typescript", type: "skill" },
          { label: "django-drf", type: "skill" },
        ],
        center: "AGENTS.md",
      },
      tags: ["agents-md", "router", "delegation"],
    },
    {
      id: "skills-bajo-demanda",
      moduleId: "skills-registry",
      order: 3,
      title: "SKILL.md: on-demand context",
      eyebrow: "08 \u00b7 SKILLS REGISTRY",
      body: "Each skill is a SKILL.md file that contains the instructions, patterns, and conventions for a specific domain. React 19 with its new patterns. Playwright with Page Objects and selectors. TypeScript strict with advanced generics. The agent doesn't load all 8 available skills \u2014 it loads only the 2 it needs for the current task. The result: dense, relevant context with maximum signal-to-noise ratio. First-class support for exactly what matters, nothing else.",
      keyMessage:
        "The agent doesn't need to know everything. It needs to know what to load and when. That's the escape hatch from prompt bloat.",
      nextBridge:
        "But skills don't appear magically. Someone creates them. And that's where the real leverage is.",
      visualType: "skills-loading",
      visualData: {
        available: [
          "react-19",
          "nextjs-15",
          "tailwind-4",
          "playwright",
          "pytest",
          "django-drf",
          "typescript",
          "zustand-5",
        ],
        loaded: ["react-19", "tailwind-4"],
        task: "Implement React component with Tailwind styles",
      },
      tags: ["skill-md", "on-demand", "context"],
    },
    {
      id: "skills-conocimiento-institucional",
      moduleId: "skills-registry",
      order: 4,
      title: "skill-creator: institutional knowledge",
      eyebrow: "08 \u00b7 SKILLS REGISTRY",
      body: "The cycle is simple but powerful: a team detects that it solves the same type of problem repeatedly. It extracts the rules, conventions, and patterns into a SKILL.md. Registers it in the skill-registry so it's discoverable. From that point on, any agent that detects the right trigger loads that skill automatically. It's institutional knowledge that doesn't live in a senior's head \u2014 it lives in the system, available to any agent, in any session. Knowledge that scales horizontally without human bottlenecks.",
      keyMessage:
        "Skills turn individual experience into reusable institutional knowledge. That's how you scale expertise.",
      nextBridge:
        "Skills, Engram, and SDD aren't standalone tools. They're parts of the same ecosystem.",
      visualType: "timeline",
      visualData: {
        entries: [
          {
            label: "Detect recurring pattern",
            description:
              "A team solves the same type of problem repeatedly",
          },
          {
            label: "Document as SKILL.md",
            description:
              "Extract the rules, conventions, and triggers",
          },
          {
            label: "Register in skill-registry",
            description:
              "Make the skill discoverable by agents",
          },
          {
            label: "Automatic usage",
            description:
              "Agents load the skill when they detect the trigger",
          },
        ],
      },
      tags: ["skill-creator", "institutional", "cycle"],
    },
  ],
};
