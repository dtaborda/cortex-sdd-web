import type { ModuleDefinition } from "@/types/content";

export const engramModuleEn: ModuleDefinition = {
  id: "engram",
  order: 7,
  title: "Persistent Memory",
  shortTitle: "Memory",
  description:
    "The amnesia problem and how Engram solves it",
  icon: "database",
  accentColor: "#EC4899",
  slides: [
    {
      id: "engram-amnesia",
      moduleId: "engram",
      order: 1,
      title: "The amnesia problem",
      eyebrow: "07 \u00b7 PERSISTENT MEMORY",
      subtitle: "Why agents forget everything between sessions",
      body: "Every time a session ends or the context gets compacted, the agent loses everything. Architectural decisions, bugs found, code conventions, user preferences \u2014 all gone. The next session starts from absolute zero. No continuity. No memory. This is the fundamental problem of working with AI agents at scale: inter-session amnesia. And it's not a bug \u2014 it's a design constraint of the context window itself.",
      keyMessage:
        "Without persistent memory, every session starts from scratch. Every discovery is lost. Every decision is forgotten. It's Groundhog Day for agents.",
      nextBridge:
        "What if there was a tool that solved exactly this?",
      visualType: "memory-amnesia",
      tags: ["amnesia", "memory", "problem", "sessions"],
    },
    {
      id: "engram-signal",
      moduleId: "engram",
      order: 2,
      title: "Engram: curated memory, not logs",
      eyebrow: "07 \u00b7 PERSISTENT MEMORY",
      subtitle: "The open source tool that gives your agents real persistent memory",
      body: "Engram is not a log dump. It's not a vector database. It's not RAG. It's a lightweight persistent memory system built on SQLite + FTS5. It stores curated observations \u2014 architectural decisions, bug fixes, patterns, discoveries. Signal, not noise. Designed for code agents (Claude Code, Cursor, anything with MCP) and survives sessions, compactions, and restarts. Zero config, batteries included.",
      keyMessage:
        "Engram doesn't store everything. It stores what matters. Signal, not noise. That's the entire design philosophy.",
      nextBridge:
        "Let's look at how the complete cycle works.",
      visualType: "signal-vs-noise",
      visualData: {
        signals: [
          "Decision: JWT over sessions",
          "Bug fix: FTS5 requires quoted terms",
          "Pattern: kebab-case for file names",
          "Preference: user prefers Spanish",
          "Discovery: Tailwind v4 uses @theme",
        ],
        noise: [
          "Full terminal output (500 lines)",
          "Complete source code of the file",
          "Casual conversation about approach",
          "10 failed attempts before the fix",
          "Temporary console.logs for debugging",
        ],
      },
      tags: ["engram", "signal", "noise", "curated"],
    },
    {
      id: "engram-loop",
      moduleId: "engram",
      order: 3,
      title: "Save \u2192 Search \u2192 Retrieve \u2192 Continue",
      eyebrow: "07 \u00b7 PERSISTENT MEMORY",
      subtitle: "The cycle that turns isolated sessions into accumulated knowledge",
      body: "The cycle is elegant: during work, the agent identifies relevant decisions and discoveries and persists them with mem_save. When context compacts or a new session starts, the agent searches with mem_search and retrieves full content with mem_get_observation. The result is cognitive continuity \u2014 session 47 knows what session 1 learned. No context loss. No repeated discoveries. Just continuous accumulation of institutional knowledge.",
      bullets: [
        "mem_save: persists an observation with title, type, and structured content",
        "mem_search: full-text search across all observations",
        "mem_get_observation: retrieves complete untruncated content",
        "topic_key: groups observations that evolve over time (e.g. architecture/auth)",
        "session_summary: end-of-session summary for cross-session continuity",
      ],
      keyMessage:
        "With Engram, session 47 knows what session 1 learned. That's the escape hatch from amnesia.",
      nextBridge:
        "Why something this simple and not an enterprise solution?",
      visualType: "engram-loop",
      visualData: {
        steps: [
          {
            label: "Sesi\u00f3n activa",
            description: "El agente trabaja y descubre",
          },
          {
            label: "mem_save",
            description: "Persiste decisiones clave",
          },
          {
            label: "Compactaci\u00f3n",
            description: "El contexto se pierde",
          },
          {
            label: "mem_search",
            description: "Nueva sesi\u00f3n busca contexto",
          },
          {
            label: "mem_get",
            description: "Recupera observaci\u00f3n completa",
          },
          {
            label: "Continuidad",
            description: "Trabaja como si nunca se fue",
          },
        ],
      },
      tags: ["loop", "mem_save", "mem_search", "cycle"],
    },
    {
      id: "engram-vs-alternativas",
      moduleId: "engram",
      order: 4,
      title: "SQLite + FTS5 vs the heavy artillery",
      eyebrow: "07 \u00b7 PERSISTENT MEMORY",
      body: "Engram chose radical simplicity. No Postgres, no Redis, no vector embeddings, no cloud infrastructure. Just SQLite + FTS5. Fast, local, zero-config, works offline. Agent memory doesn't need semantic similarity \u2014 it needs exact keyword search on technical terms. Less infrastructure, less latency, fewer failure points. The best architecture isn't the most complex one. It's the one that solves the problem with minimum friction and maximum reliability.",
      visualType: "comparison-table",
      visualData: {
        headers: [
          "Approach",
          "Infra required",
          "Speed",
          "Complexity",
        ],
        rows: [
          [
            "Engram (SQLite+FTS5)",
            "Zero. A local file.",
            "< 1ms search",
            "Minimal",
          ],
          [
            "RAG + Vector DB",
            "Embedding model + Pinecone/Weaviate",
            "~100ms",
            "High",
          ],
          [
            "Fine-tuning",
            "GPU, datasets, ML pipeline",
            "N/A (offline)",
            "Very high",
          ],
          [
            "Redis/Memcached",
            "Server, config, TTL",
            "< 1ms",
            "Medium (ephemeral)",
          ],
        ],
      },
      keyMessage:
        "The best architecture isn't the most complex. It's the one that ships the solution with the least friction.",
      nextBridge:
        "Engram is open source and ready to ship.",
      tags: ["sqlite", "fts5", "comparison", "rag"],
    },
    {
      id: "engram-cta",
      moduleId: "engram",
      order: 5,
      title: "Open source. Ready to ship.",
      eyebrow: "07 \u00b7 PERSISTENT MEMORY",
      subtitle: "Built by Gentleman Programming",
      body: "Engram is open source, free, and ready to install right now. Works with Claude Code, Cursor, and any agent that supports MCP. One line and your agents have real persistent memory. No setup, no config, no infrastructure. Just install and ship.",
      keyMessage: "Give your agents memory. Today.",
      visualType: "engram-cta",
      visualData: {
        author: "Gentleman Programming",
        repo: "https://github.com/gentleman-programming/engram",
        installCommand: "npx engram init",
        features: [
          "SQLite + FTS5 local",
          "Zero config",
          "Cross-session memory",
          "Claude Code & Cursor",
          "MCP compatible",
          "Open source MIT",
        ],
      },
      tags: ["engram", "cta", "install", "open-source"],
    },
  ],
};
