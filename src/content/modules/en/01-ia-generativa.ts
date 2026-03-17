import type { ModuleDefinition } from "@/types/content";

export const iaGenerativaModuleEn: ModuleDefinition = {
  id: "ia-generativa",
  order: 1,
  title: "Generative AI: The Engine Without a Steering Wheel",
  shortTitle: "Generative AI",
  description:
    "An LLM doesn't think. It predicts. Understanding this distinction is the foundation for everything that follows.",
  icon: "brain",
  accentColor: "#F59E0B",
  slides: [
    {
      id: "ia-gen-hero",
      moduleId: "ia-generativa",
      order: 1,
      title: "Prediction, not reasoning",
      eyebrow: "01 \u00b7 GENERATIVE AI",
      subtitle: "What a language model actually does under the hood",
      body: "An LLM is a ridiculously sophisticated statistical prediction engine. It doesn't understand. It doesn't reason. It has zero intent. It ships the most probable next token given context. That's it. Full stop. And yet \u2014 with the right architecture wrapping it \u2014 that engine can produce output that looks like genuine intelligence. The gap between 'looks like' and 'is' defines everything we're about to build.",
      keyMessage:
        "The model is the engine. No steering wheel, no map, no destination. Architecture is what turns prediction into a system.",
      nextBridge:
        "To understand what we can build, let's first look at how that prediction actually works under the hood.",
      visualType: "neural-prediction",
      visualData: {
        inputTokens: ["The", "context", "defines", "the"],
        layers: [
          "Embedding",
          "Attention",
          "FFN",
          "Attention",
          "FFN",
          "Output",
        ],
        outputPredictions: [
          { token: "response", probability: 72 },
          { token: "quality", probability: 15 },
          { token: "output", probability: 8 },
          { token: "nothing", probability: 5 },
        ],
      },
      tags: ["fundamentals", "llm", "prediction"],
    },
    {
      id: "ia-gen-tokens",
      moduleId: "ia-generativa",
      order: 2,
      title: "How an LLM predicts",
      eyebrow: "Token by token",
      body: "The model doesn't generate complete responses. It ships one token at a time, picking the most probable one based on the statistical distribution of the context it received. Each generated token gets concatenated to the context and feeds the next prediction. It's autoregressive: output becomes input. That's why context is everything \u2014 change the context, you completely change the output.",
      bullets: [
        "Each token is predicted based on ALL preceding tokens",
        "Temperature controls how much 'creativity' (randomness) you allow",
        "There's zero 'thinking' between tokens \u2014 just conditional probability",
        "Noisy context produces noisy predictions. Garbage in, garbage out.",
      ],
      keyMessage:
        "An LLM doesn't write responses. It predicts sequences, one token at a time. That's the entire mental model.",
      nextBridge:
        "If it's all statistical prediction, what can an LLM genuinely NOT do?",
      visualType: "token-prediction",
      visualData: {
        tokens: ["The", "context", "defines", "the"],
        predictions: [
          { label: "response", probability: 72 },
          { label: "quality", probability: 15 },
          { label: "output", probability: 8 },
          { label: "nothing", probability: 5 },
        ],
      },
      tags: ["tokens", "prediction", "autoregressive"],
    },
    {
      id: "ia-gen-limites",
      moduleId: "ia-generativa",
      order: 3,
      title: "What an LLM does NOT do",
      eyebrow: "Debunking the magic",
      body: "The illusion of intelligence is so convincing that we confuse pattern matching with comprehension. An LLM doesn't store memories, doesn't learn from your conversation, doesn't have a world model. When it 'reasons', it's replicating reasoning patterns it saw in training data. When it 'remembers', it's processing tokens that are still in the context window. No context, no nothing.",
      keyMessage:
        "What looks like comprehension is prediction. What looks like memory is context. What looks like reasoning is pattern matching at scale.",
      nextBridge:
        "If the model only sees what you give it, then the context window is literally its entire universe. Let's unpack what that means.",
      visualType: "comparison-table",
      visualData: {
        headers: ["What it looks like", "What it actually does"],
        rows: [
          [
            "Understands your question",
            "Completes a statistical pattern",
          ],
          [
            "Remembers conversations",
            "Processes tokens still in the window",
          ],
          [
            "Reasons logically",
            "Predicts the most probable sequence",
          ],
          [
            "Learns from you",
            "Retains absolutely nothing between sessions",
          ],
        ],
      },
      tags: ["limitations", "myths", "reality"],
    },
  ],
};
