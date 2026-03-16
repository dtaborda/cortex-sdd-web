import type { ModuleDefinition } from "@/types/content";

export const cierreModule: ModuleDefinition = {
  id: "cierre",
  order: 10,
  title: "Cierre",
  shortTitle: "Cierre",
  description:
    "La diferencia no es el modelo. Es el sistema.",
  icon: "target",
  accentColor: "#A855F7",
  slides: [
    {
      id: "cierre-comparacion",
      moduleId: "cierre",
      order: 1,
      title: "Modelo solo vs modelo + arquitectura",
      eyebrow: "10 · CIERRE",
      body: "Todo lo que recorrimos en este viaje converge acá. De un lado, el modelo solo: un chat descartable que olvida todo, carga instrucciones infladas, no distingue señal de ruido, y arranca de cero cada sesión. Del otro, el mismo modelo con arquitectura: orquestación SDD con fases claras, contexto aislado por responsabilidad, skills que cargan solo lo necesario, Engram que persiste lo que importa, y specs como fuente de verdad verificable. El modelo es el motor. La arquitectura es el auto.",
      keyMessage:
        "El modelo es el motor, no el auto. La arquitectura ES el auto.",
      nextBridge:
        "Y la tesis final se resume en una oración.",
      visualType: "outcome-comparison",
      visualData: {
        without: {
          title: "Solo el modelo",
          items: [
            "Chat descartable sin memoria",
            "Contexto efímero que se degrada",
            "Prompts gigantes que diluyen foco",
            "Amnesia total entre sesiones",
            "Sin estructura ni verificación",
          ],
        },
        with: {
          title: "Modelo + Arquitectura",
          items: [
            "Orquestación SDD con fases claras",
            "Contexto aislado por responsabilidad",
            "Skills que cargan solo lo necesario",
            "Engram: memoria persistente real",
            "Specs como fuente de verdad verificable",
          ],
        },
      },
      tags: ["comparación", "modelo", "arquitectura"],
    },
    {
      id: "cierre-tesis",
      moduleId: "cierre",
      order: 2,
      title: "La diferencia no es el modelo. Es el sistema.",
      eyebrow: "10 · CIERRE",
      body: "Cuando dejás de pensar en 'qué modelo uso' y empezás a pensar en 'qué sistema construyo', el salto de calidad es inevitable. SDD, Engram, Skills, MCP, model routing — no son features. Son la arquitectura que convierte un chat descartable en un sistema cognitivo real. La próxima vez que alguien te diga que el secreto es el prompt, respondé: el secreto es todo lo que pasa alrededor del prompt.",
      keyMessage:
        "La diferencia no es el modelo. Es el sistema que construís alrededor del modelo.",
      nextBridge:
        "Queda una sola pregunta: ¿por dónde empezar?",
      visualType: "hero",
      tags: ["tesis", "sistema", "cognitivo"],
    },
    {
      id: "cierre-accion",
      moduleId: "cierre",
      order: 3,
      title: "¿Por dónde empezar?",
      eyebrow: "10 · CIERRE",
      body: "No necesitás implementar todo de una. Cada pieza suma valor por separado. Pero juntas, construyen algo que ningún prompt engineering puede igualar. Instalá Claude Code como punto de entrada. Creá tu AGENTS.md como router del proyecto. Documentá un patrón recurrente como skill. Activá Engram para memoria persistente. Planificá tu próximo feature con SDD. Conectá MCP para integrar herramientas externas. Cada paso es incremental, cada paso es reversible, y cada paso acerca el sistema al objetivo.",
      keyMessage:
        "El mejor momento para empezar fue ayer. El segundo mejor momento es ahora.",
      visualType: "cards-grid",
      visualData: {
        cards: [
          {
            title: "1. Instalá Claude Code",
            description:
              "Tu punto de entrada al ecosistema de agentes",
          },
          {
            title: "2. Creá tu AGENTS.md",
            description:
              "Definí el router que organiza tu proyecto",
          },
          {
            title: "3. Escribí tu primer Skill",
            description:
              "Documentá un patrón recurrente de tu equipo",
          },
          {
            title: "4. Activá Engram",
            description:
              "Dale memoria persistente a tus sesiones",
          },
          {
            title: "5. Iniciá SDD",
            description:
              "Planificá tu próximo feature con specs reales",
          },
          {
            title: "6. Conectá MCP",
            description:
              "Integrá Jira, Notion, APIs externas",
          },
        ],
      },
      tags: ["acción", "pasos", "inicio"],
    },
  ],
};
