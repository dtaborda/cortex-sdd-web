"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
}

interface Card {
  title: string;
  description: string;
}

export function CardsGridVisual({ data, accent }: Props) {
  const cards = (data.cards as Card[]) || [
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
  ];

  const cols = cards.length <= 4 ? 2 : 3;

  return (
    <div className="w-full max-w-md">
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
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
            className="rounded-lg bg-bg-surface border border-border-subtle p-4 group hover:border-border-default transition-colors"
          >
            {/* Step number */}
            <span
              className="text-lg font-mono font-bold block mb-2"
              style={{ color: accent, opacity: 0.6 }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <h4 className="text-sm font-semibold text-text-primary mb-1 leading-snug">
              {card.title}
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
