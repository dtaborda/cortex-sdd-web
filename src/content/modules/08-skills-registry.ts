import type { ModuleDefinition } from "@/types/content";

export const skillsRegistryModule: ModuleDefinition = {
  id: "skills-registry",
  order: 8,
  title: "Skills Registry",
  shortTitle: "Skills",
  description:
    "Contexto bajo demanda en vez de prompt gigante",
  icon: "puzzle",
  accentColor: "#84CC16",
  slides: [
    {
      id: "skills-prompt-gigante",
      moduleId: "skills-registry",
      order: 1,
      title: "El problema del prompt gigante",
      eyebrow: "08 · SKILLS REGISTRY",
      body: "La tentación es obvia: meter todo lo que el agente necesita saber en un system prompt monolítico. Reglas de React, convenciones de testing, patrones de API, estándares de CSS — todo junto, todo siempre. El resultado es predecible: a medida que el prompt crece, la calidad de las respuestas se degrada. No es un bug, es matemática. Cada token de instrucción irrelevante compite por atención con los tokens que sí importan. A 80K tokens de instrucciones, el modelo hace todo mediocre en vez de hacer algo bien.",
      keyMessage:
        "Más contexto no es mejor contexto. Es más ruido.",
      nextBridge:
        "La solución no es un prompt más grande. Es un router que sepa qué cargar.",
      visualType: "degradation-flow",
      visualData: {
        stages: [
          { label: "Prompt base", quality: 95, tokens: "2K" },
          { label: "+Framework rules", quality: 75, tokens: "15K" },
          { label: "+All conventions", quality: 50, tokens: "40K" },
          { label: "+Every pattern", quality: 25, tokens: "80K" },
        ],
      },
      tags: ["skills", "prompt", "degradación"],
    },
    {
      id: "skills-agents-md",
      moduleId: "skills-registry",
      order: 2,
      title: "AGENTS.md como router liviano",
      eyebrow: "08 · SKILLS REGISTRY",
      body: "AGENTS.md no es un manual de 500 páginas. Es un índice inteligente. Contiene la información mínima para que el agente entienda la estructura del proyecto y sepa dónde buscar cuando necesita más. No carga reglas de React si la tarea es configurar Terraform. No carga convenciones de testing si está escribiendo documentación. Actúa como un router: recibe la tarea, identifica el dominio, y delega al skill correcto.",
      keyMessage:
        "AGENTS.md no contiene el conocimiento. Contiene el mapa hacia el conocimiento.",
      nextBridge:
        "Y ese mapa apunta a skills: paquetes de contexto que se cargan bajo demanda.",
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
      tags: ["agents-md", "router", "delegación"],
    },
    {
      id: "skills-bajo-demanda",
      moduleId: "skills-registry",
      order: 3,
      title: "SKILL.md: contexto bajo demanda",
      eyebrow: "08 · SKILLS REGISTRY",
      body: "Cada skill es un archivo SKILL.md que contiene las instrucciones, patrones y convenciones de un dominio específico. React 19 con sus nuevos patterns. Playwright con Page Objects y selectores. TypeScript strict con generics avanzados. El agente no carga los 8 skills disponibles — carga solo los 2 que necesita para la tarea actual. El resultado: contexto denso, relevante, y con ratio señal-ruido máximo.",
      keyMessage:
        "El agente no necesita saber todo. Necesita saber qué cargar y cuándo.",
      nextBridge:
        "Pero los skills no aparecen mágicamente. Alguien los crea. Y ahí está el verdadero poder.",
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
        task: "Implementar componente React con estilos Tailwind",
      },
      tags: ["skill-md", "bajo-demanda", "contexto"],
    },
    {
      id: "skills-conocimiento-institucional",
      moduleId: "skills-registry",
      order: 4,
      title: "skill-creator: conocimiento institucional",
      eyebrow: "08 · SKILLS REGISTRY",
      body: "El ciclo es simple pero poderoso: un equipo detecta que resuelve el mismo tipo de problema repetidamente. Extrae las reglas, convenciones y patrones en un SKILL.md. Lo registra en el skill-registry para que sea descubrible. A partir de ahí, cualquier agente que detecte el trigger correcto carga ese skill automáticamente. Es conocimiento institucional que no vive en la cabeza de un senior — vive en el sistema, disponible para cualquier agente, en cualquier sesión.",
      keyMessage:
        "Los skills convierten experiencia individual en conocimiento institucional reutilizable.",
      nextBridge:
        "Skills, Engram y SDD no son herramientas sueltas. Son partes de un mismo ecosistema.",
      visualType: "timeline",
      visualData: {
        entries: [
          {
            label: "Detectar patrón recurrente",
            description:
              "Un equipo resuelve el mismo tipo de problema repetidamente",
          },
          {
            label: "Documentar como SKILL.md",
            description:
              "Extraer las reglas, convenciones y triggers",
          },
          {
            label: "Registrar en skill-registry",
            description:
              "Hacer el skill descubrible por los agentes",
          },
          {
            label: "Uso automático",
            description:
              "Los agentes cargan el skill cuando detectan el trigger",
          },
        ],
      },
      tags: ["skill-creator", "institucional", "ciclo"],
    },
  ],
};
