import type { ModuleDefinition } from "@/types/content";

export const contextWindowModuleEn: ModuleDefinition = {
  id: "context-window",
  order: 2,
  title: "The Context Window: Everything Fits, Until It Doesn't",
  shortTitle: "Context Window",
  description:
    "The context window is the model's working memory. What goes in there determines output quality. Period.",
  icon: "layers",
  accentColor: "#3B82F6",
  slides: [
    {
      id: "ctx-capas",
      moduleId: "context-window",
      order: 1,
      title: "Everything goes through the window",
      eyebrow: "02 \u00b7 CONTEXT WINDOW",
      body: "An LLM has no disk, no persistent RAM. Everything it knows at any given moment is what fits in its context window. That's where the system prompt, previous conversation, injected files, and your current message all land. Everything competes for the same finite space. 128K tokens sounds like a lot until you start stuffing code, docs, and a long conversation into it.",
      bullets: [
        "System prompt: the agent's base instructions (~15%)",
        "Previous conversation: accumulated history (~35%)",
        "Files and code: injected context (~30%)",
        "Your current message: what you just typed (~20%)",
      ],
      keyMessage:
        "The context window is the model's only reality. What's not in there doesn't exist. Full stop.",
      nextBridge:
        "The problem isn't the size. It's what happens when it fills up.",
      visualType: "context-layers",
      visualData: {
        layers: [
          { label: "System prompt", size: 15, color: "#3B82F6" },
          { label: "Previous conversation", size: 35, color: "#6366F1" },
          { label: "Files/code", size: 30, color: "#8B5CF6" },
          { label: "Your current message", size: 20, color: "#A855F7" },
        ],
      },
      tags: ["context", "window", "tokens"],
    },
    {
      id: "ctx-degradacion",
      moduleId: "context-window",
      order: 2,
      title: "Noise, compaction, degradation",
      eyebrow: "The inevitable decay",
      body: "As the conversation grows, the context fills with noise: failed attempts, redundant output, contradictory instructions. When the limit is reached, the system compacts \u2014 summarizes and discards. Each compaction loses nuance, decisions, subtle context. After two or three compactions, the agent is working with a blurry shadow of what it once knew. Output quality tanks.",
      bullets: [
        "10K tokens: clean context, precise responses",
        "60K tokens: noise accumulation kicks in",
        "120K tokens: forced compaction, nuance loss",
        "180K+ tokens: severe degradation, frequent hallucinations",
      ],
      keyMessage:
        "Compaction is not lossless compression. Each summary drops what the summarizer considers 'not important' \u2014 and sometimes it's wrong.",
      nextBridge:
        "And when context degrades enough, the most dangerous symptom appears: hallucination.",
      visualType: "degradation-flow",
      visualData: {
        stages: [
          { label: "Clean context", quality: 95, tokens: "10K" },
          { label: "Accumulation", quality: 70, tokens: "60K" },
          { label: "Compaction", quality: 45, tokens: "120K" },
          { label: "Degradation", quality: 20, tokens: "180K" },
        ],
      },
      tags: ["degradation", "compaction", "noise"],
    },
    {
      id: "ctx-alucinacion",
      moduleId: "context-window",
      order: 3,
      title: "Hallucination: the symptom, not the cause",
      eyebrow: "When context fails",
      body: "Hallucination is not a model bug. It's the predictable result of insufficient or contaminated context. When you ask an LLM to generate code without giving it the specs, it invents APIs that don't exist. When the history has contradictory instructions, it produces incoherent responses. The fix is not a 'better' model. It's cleaner, more relevant, more structured context. The blast radius of bad context is the entire output.",
      visualType: "comparison-table",
      visualData: {
        headers: ["Root cause", "Visible symptom"],
        rows: [
          [
            "Insufficient context",
            "Invents data or APIs that don't exist",
          ],
          [
            "Contradictory instructions",
            "Incoherent or partial responses",
          ],
          [
            "Accumulated noise",
            "Ignores instructions that ARE in context",
          ],
          [
            "Post-compaction",
            "Loses the thread, redoes work already done",
          ],
        ],
      },
      keyMessage:
        "You don't need a model that doesn't hallucinate. You need an architecture that gives it the right context.",
      nextBridge:
        "If context is that critical, what happens when we give the model tools? We go from chat to agent.",
      tags: ["hallucination", "context", "quality"],
    },
  ],
};
