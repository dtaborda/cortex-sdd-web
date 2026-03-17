import type { ModuleDefinition } from "@/types/content";

export const chatVsAgenteModuleEn: ModuleDefinition = {
  id: "chat-vs-agente",
  order: 3,
  title: "Chat vs Agent: From Answering to Executing",
  shortTitle: "Chat vs Agent",
  description:
    "A chat answers questions. An agent ships tasks. The difference is tools, loops, and autonomy.",
  icon: "bot",
  accentColor: "#10B981",
  slides: [
    {
      id: "chat-agente-comparacion",
      moduleId: "chat-vs-agente",
      order: 1,
      title: "Chat answers. Agent ships.",
      eyebrow: "03 \u00b7 CHAT VS AGENT",
      body: "A chat is a question-answer interface. You ask, it responds, done. An agent is a loop: it receives a task, plans steps, executes actions, observes results, and decides whether to keep iterating. The chat is reactive. The agent is proactive. The chat ends when you stop typing. The agent ends when the task is complete. Fundamentally different execution models.",
      keyMessage:
        "Chat = one response. Agent = an action-observation loop until the task ships.",
      nextBridge:
        "What gives the agent the ability to act on the real world? Tools.",
      visualType: "comparison-table",
      visualData: {
        headers: ["Chat", "Agente"],
        rows: [
          ["Answers questions", "Ships complete tasks"],
          ["One interaction", "Iterative loop"],
          ["Text only", "Text + tools + code execution"],
          ["Reactive", "Proactive"],
          ["Ends when you stop asking", "Ends when it completes"],
          ["No memory", "Persists decisions"],
          ["No file access", "Reads, writes, executes"],
        ],
      },
      tags: ["chat", "agent", "comparison"],
    },
    {
      id: "chat-agente-tools",
      moduleId: "chat-vs-agente",
      order: 2,
      title: "Tools: the bridge to the real world",
      eyebrow: "From text to action",
      body: "An LLM without tools only produces text. With tools, it can read files, execute commands, query databases, call APIs, create commits. Tools transform text prediction into concrete action. The model doesn't 'execute' the tool directly \u2014 it generates a structured call that the runtime intercepts and executes. The result flows back into context and feeds the next decision. It's a clean separation of concerns: the model decides, the runtime acts.",
      bullets: [
        "Bash: run commands, execute tests, trigger builds",
        "Read/Write/Edit: manipulate project files directly",
        "Grep/Glob: search across the entire codebase",
        "MCP servers: connect to external services and APIs",
        "Web fetch: pull live documentation on demand",
      ],
      keyMessage:
        "Tools don't make the model smarter. They give it hands to act on its predictions.",
      nextBridge:
        "An agent with tools can execute. But who decides what to do, in what order, with what criteria?",
      visualType: "architecture-map",
      visualData: {
        center: { label: "LLM", color: "#10B981" },
        connections: [
          { label: "Bash", direction: "out", description: "Ejecutar comandos" },
          { label: "Read/Write", direction: "both", description: "Manipular archivos" },
          { label: "Search", direction: "out", description: "Buscar en codebase" },
          { label: "MCP", direction: "both", description: "Servicios externos" },
          { label: "Git", direction: "out", description: "Control de versiones" },
        ],
      },
      tags: ["tools", "mcp", "execution"],
    },
    {
      id: "chat-agente-executor",
      moduleId: "chat-vs-agente",
      order: 3,
      title: "The agent as autonomous executor",
      eyebrow: "The complete loop",
      body: "The agent pattern is: receive task \u2192 decompose into steps \u2192 execute step \u2192 observe result \u2192 decide next action \u2192 repeat until complete. Each loop iteration consumes context. Each tool call adds tokens. The agent burns its 'cognitive budget' as it works. That's why context efficiency isn't a nice-to-have \u2014 it's operational survival. Waste context, and the agent degrades before it finishes the job.",
      keyMessage:
        "An agent is an LLM in a loop with tools. Its effectiveness depends on how much useful context it can maintain before hitting the ceiling.",
      nextBridge:
        "And here's where the first serious problem shows up: what happens when a single agent tries to do everything in one conversation?",
      visualType: "role-specialization",
      visualData: {
        roles: [
          {
            name: "Task",
            description: "User defines the objective",
            color: "#3B82F6",
          },
          {
            name: "Planning",
            description: "Agent decomposes into steps",
            color: "#10B981",
          },
          {
            name: "Execution",
            description: "Calls tools, writes code",
            color: "#F59E0B",
          },
          {
            name: "Observation",
            description: "Evaluates the result",
            color: "#8B5CF6",
          },
          {
            name: "Decision",
            description: "Continue, adjust, or ship",
            color: "#EF4444",
          },
        ],
      },
      tags: ["loop", "autonomy", "execution"],
    },
  ],
};
