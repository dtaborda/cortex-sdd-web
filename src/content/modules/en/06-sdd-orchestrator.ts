import type { ModuleDefinition } from "@/types/content";

export const sddOrchestratorModuleEn: ModuleDefinition = {
  id: "sdd-orchestrator",
  order: 6,
  title: "SDD: Spec-Driven Development",
  shortTitle: "SDD Orchestrator",
  description:
    "Specs as the single source of truth. Orchestrator as coordinator. Sub-agents as executors. Verification against contract.",
  icon: "git-branch",
  accentColor: "#00F0FF",
  slides: [
    {
      id: "sdd-hero",
      moduleId: "sdd-orchestrator",
      order: 1,
      title: "Specs as the single source of truth",
      eyebrow: "06 \u00b7 SDD ORCHESTRATOR",
      subtitle: "The framework that tames the chaos",
      body: "Spec-Driven Development flips the default dynamic. Instead of telling the agent 'build me a users endpoint' and hoping it guesses the requirements, you first write a formal spec: what it must do, how it should behave, what it gets validated against. The spec is the contract. Everything designed, implemented, and verified gets measured against it. Without a spec, there's no objective definition of 'done'. With a spec, done is a verifiable fact.",
      keyMessage:
        "Without a spec, 'done' is an opinion. With a spec, it's a verifiable fact. Ship with contracts, not vibes.",
      nextBridge:
        "And the one who coordinates all of this doesn't write a single line of code.",
      visualType: "sdd-spec-flow",
      visualData: {
        chaosItems: [
          "Is it done yet?",
          "// TODO: fix later",
          "prompt \u2192 code \u2192 \ud83e\udd1e",
          "No validation criteria",
        ],
        pipeline: [
          { step: "SPEC", label: "What it should do", icon: "file-text" },
          { step: "DESIGN", label: "How it's built", icon: "compass" },
          { step: "IMPLEMENT", label: "Actual code", icon: "code" },
          { step: "VERIFY", label: "Validated against spec", icon: "check-circle" },
        ],
        sourceOfTruth:
          "The spec is the contract. Everything is measured against it.",
      },
      tags: ["sdd", "specs", "framework"],
    },
    {
      id: "sdd-orquestador",
      moduleId: "sdd-orchestrator",
      order: 2,
      title: "The orchestrator doesn't code",
      eyebrow: "Separation of planes",
      body: "The orchestrator is a lightweight thread that maintains state and delegates. It doesn't read source code. It doesn't write implementation. It doesn't run tests. It only coordinates: launches sub-agents with precise context, receives summarized results, makes high-level decisions, and persists state to survive compactions. Each sub-agent boots with fresh context \u2014 without the noise from previous phases. Zero context switching overhead.",
      keyMessage:
        "The orchestrator is to the project what a head coach is to the team: doesn't play, but decides who enters, with what role, at what moment.",
      nextBridge:
        "And in what order do these sub-agents work? It's not waterfall. It's a DAG.",
      visualType: "role-specialization",
      visualData: {
        roles: [
          {
            name: "Orchestrator",
            description: "Coordinates. Never executes. Maintains global state.",
            color: "#00F0FF",
          },
          {
            name: "Spec Writer",
            description: "Writes formal requirements and edge case scenarios.",
            color: "#3B82F6",
          },
          {
            name: "Designer",
            description: "Defines technical architecture and design decisions.",
            color: "#10B981",
          },
          {
            name: "Implementer",
            description: "Writes production code following specs and design.",
            color: "#8B5CF6",
          },
          {
            name: "Verifier",
            description: "Validates implementation against the original specs.",
            color: "#EF4444",
          },
        ],
      },
      tags: ["orchestrator", "roles", "delegation"],
    },
    {
      id: "sdd-dag",
      moduleId: "sdd-orchestrator",
      order: 3,
      title: "DAG: dependencies, not waterfall",
      eyebrow: "Execution flow",
      body: "SDD phases aren't sequential \u2014 they're a directed acyclic graph (DAG). The proposal feeds spec and design in parallel. Both converge into the task breakdown. Tasks enable implementation. Verification closes the loop against the original specs. This model enables real parallelism: specs and design get written simultaneously, because both depend only on the proposal. No blocking. No idle phases.",
      bullets: [
        "Proposal \u2192 Spec + Design (parallel, zero blocking)",
        "Spec + Design \u2192 Tasks (convergence point)",
        "Tasks \u2192 Apply (batched implementation)",
        "Apply \u2192 Verify (validation against contract)",
      ],
      keyMessage:
        "A DAG of phases with explicit dependencies eliminates the ambiguity of 'what do I do first?' — the graph tells you.",
      nextBridge:
        "Let's see this in action with a real-world example.",
      visualType: "dag-flow",
      visualData: {
        nodes: [
          { id: "proposal", label: "Proposal", x: 50, y: 50 },
          { id: "spec", label: "Spec", x: 200, y: 20 },
          { id: "design", label: "Design", x: 200, y: 80 },
          { id: "tasks", label: "Tasks", x: 350, y: 50 },
          { id: "apply", label: "Apply", x: 500, y: 50 },
          { id: "verify", label: "Verify", x: 650, y: 50 },
        ],
        edges: [
          { from: "proposal", to: "spec" },
          { from: "proposal", to: "design" },
          { from: "spec", to: "tasks" },
          { from: "design", to: "tasks" },
          { from: "tasks", to: "apply" },
          { from: "apply", to: "verify" },
        ],
      },
      tags: ["dag", "phases", "dependencies"],
    },
    {
      id: "sdd-ejemplo",
      moduleId: "sdd-orchestrator",
      order: 4,
      title: "Real-world example: building an endpoint",
      eyebrow: "SDD in action",
      body: "Say you need a POST /api/contacts endpoint. With SDD: the orchestrator launches a spec writer that defines fields, validations, error responses, and edge case scenarios. In parallel, a designer defines the architecture: Supabase table, auth middleware, Zod schema. The task breakdown generates 6 ordered tasks. The implementer ships them. The verifier validates every scenario against the original spec. What you get isn't 'working code' \u2014 it's verified code with a paper trail.",
      keyMessage:
        "An endpoint that 'works' is not the same as an endpoint verified against contract. SDD closes that gap.",
      nextBridge:
        "All of this works within a single session. But what happens between sessions? How does knowledge survive compaction?",
      visualType: "timeline",
      visualData: {
        events: [
          {
            phase: "Proposal",
            description: "POST /api/contacts with validation and auth",
            duration: "2 min",
          },
          {
            phase: "Spec",
            description: "Fields, validations, 4 error scenarios, 201 response",
            duration: "3 min",
          },
          {
            phase: "Design",
            description: "contacts table, Zod schema, auth middleware, rate limiting",
            duration: "3 min",
          },
          {
            phase: "Tasks",
            description: "6 tasks: migration, schema, route, handler, tests, docs",
            duration: "1 min",
          },
          {
            phase: "Apply",
            description: "Implementation task by task, 2 batches",
            duration: "8 min",
          },
          {
            phase: "Verify",
            description: "4/4 scenarios pass. 6/6 tasks complete.",
            duration: "2 min",
          },
        ],
      },
      tags: ["example", "endpoint", "practice"],
    },
  ],
};
