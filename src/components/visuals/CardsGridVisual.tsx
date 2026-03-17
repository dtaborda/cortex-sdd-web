"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
  locale?: string;
}

interface Card {
  title: string;
  description: string;
}

export function CardsGridVisual({ data, accent, locale }: Props) {
  const isEn = locale === "en";
  const cards = (data.cards as Card[]) || (isEn
    ? [
        {
          title: "Install Claude Code",
          description: "The code agent that executes, not just responds",
        },
        {
          title: "Configure AGENTS.md",
          description: "Base instructions that define behavior",
        },
        {
          title: "Create your first Skill",
          description: "Specialized knowledge loaded on-demand",
        },
        {
          title: "Activate Engram",
          description: "Persistent memory across sessions",
        },
      ]
    : [
        {
          title: "Instalar Claude Code",
          description: "El agente de código que ejecuta, no solo responde",
        },
        {
          title: "Configurar AGENTS.md",
          description: "Las instrucciones base que definen comportamiento",
        },
        {
          title: "Crear tu primer Skill",
          description: "Conocimiento especializado cargado on-demand",
        },
        {
          title: "Activar Engram",
          description: "Memoria persistente entre sesiones",
        },
      ]);

  return (
    <div className="w-full max-w-2xl">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="rounded-lg bg-bg-surface border border-border-subtle p-4 sm:p-5 group hover:border-border-default transition-colors"
          >
            {/* Step number */}
            <span
              className="text-lg font-mono font-bold block mb-2"
              style={{ color: accent, opacity: 0.6 }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <h4 className="text-base font-semibold text-text-primary mb-1 leading-snug">
              {card.title}
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
