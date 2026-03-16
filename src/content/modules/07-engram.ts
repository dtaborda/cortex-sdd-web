import type { ModuleDefinition } from "@/types/content";

export const engramModule: ModuleDefinition = {
  id: "engram",
  order: 7,
  title: "Engram: Memoria Persistente para Agentes",
  shortTitle: "Engram",
  description:
    "Los agentes no recuerdan entre sesiones. Engram les da memoria persistente con búsqueda full-text, sin infraestructura pesada.",
  icon: "database",
  accentColor: "#EC4899",
  slides: [
    {
      id: "engram-hero",
      moduleId: "engram",
      order: 1,
      title: "Memoria persistente, no logs",
      eyebrow: "Módulo 7",
      subtitle: "El problema de la amnesia entre sesiones",
      body: "Cada vez que un agente termina una sesión, pierde todo. Las decisiones arquitectónicas, los bugs encontrados, las preferencias del usuario, los patrones establecidos — todo desaparece. La próxima sesión arranca de cero. Engram resuelve esto con una premisa simple: guardar solo lo que importa, en formato buscable, con costo de contexto cercano a cero hasta que se necesita.",
      keyMessage:
        "Un agente sin memoria repite errores, redescubre decisiones, y pierde el contexto que más costó construir.",
      nextBridge:
        "Pero no todo merece ser recordado. La clave es filtrar señal de ruido.",
      visualType: "hero",
      tags: ["engram", "memoria", "persistencia"],
    },
    {
      id: "engram-signal",
      moduleId: "engram",
      order: 2,
      title: "Señal vs Ruido: qué guardar, qué descartar",
      eyebrow: "El filtro crítico",
      body: "Engram no es un log de todo lo que pasó. Es una memoria curada de lo que importa. Guardar todo es tan inútil como no guardar nada — generás un pajar donde la aguja se pierde. La regla: si una información cambiaría el comportamiento del agente en una sesión futura, es señal. Si no, es ruido. Decisiones, bugs, patrones, preferencias: señal. Output de terminal, código completo, conversación casual: ruido.",
      keyMessage:
        "Memoria efectiva no es recordar todo. Es recordar lo correcto.",
      nextBridge:
        "¿Y cómo funciona el ciclo completo de guardar y recuperar?",
      visualType: "signal-vs-noise",
      visualData: {
        signals: [
          "Decisión arquitectónica",
          "Bug fix y causa raíz",
          "Patrón establecido",
          "Preferencia del usuario",
          "Descubrimiento técnico",
        ],
        noise: [
          "Output completo de terminal",
          "Código fuente entero",
          "Conversación casual",
          "Intentos fallidos intermedios",
          "Datos temporales de debug",
        ],
      },
      tags: ["señal", "ruido", "filtrado"],
    },
    {
      id: "engram-loop",
      moduleId: "engram",
      order: 3,
      title: "El loop de memoria persistente",
      eyebrow: "Guardar → Buscar → Recuperar",
      body: "El ciclo es elegante: durante el trabajo, el agente identifica decisiones y descubrimientos relevantes y los persiste con mem_save. Cuando el contexto se compacta o una nueva sesión comienza, el agente busca con mem_search y recupera el contenido completo con mem_get. El resultado es continuidad cognitiva — el agente retoma exactamente donde dejó, sin re-descubrir lo que ya sabía.",
      bullets: [
        "mem_save: persiste una observación con título, tipo, y contenido estructurado",
        "mem_search: búsqueda full-text sobre todas las observaciones",
        "mem_get: recupera el contenido completo (no truncado) de una observación",
        "topic_key: agrupa observaciones que evolucionan (ej: architecture/auth)",
        "session_summary: resumen de cierre para continuidad entre sesiones",
      ],
      keyMessage:
        "Engram no es RAG ni vector DB. Es memoria estructurada con búsqueda full-text. Simple, local, efectivo.",
      nextBridge:
        "¿Por qué algo tan simple y no una solución enterprise?",
      visualType: "engram-loop",
      visualData: {
        steps: [
          {
            label: "Sesión activa",
            description: "El agente trabaja y descubre",
          },
          {
            label: "mem_save",
            description: "Persiste decisiones y aprendizajes",
          },
          {
            label: "Compactación",
            description: "El contexto se pierde",
          },
          {
            label: "mem_search",
            description: "Nueva sesión busca contexto previo",
          },
          {
            label: "mem_get",
            description: "Recupera observación completa",
          },
          {
            label: "Continuidad",
            description: "Trabaja como si nunca se hubiera ido",
          },
        ],
      },
      tags: ["loop", "mem_save", "mem_search"],
    },
    {
      id: "engram-vs-alternativas",
      moduleId: "engram",
      order: 4,
      title: "SQLite + FTS5: simplicidad radical",
      eyebrow: "Por qué no RAG",
      body: "Engram usa SQLite con FTS5 para búsqueda full-text. No hay servidor, no hay embeddings, no hay vector database. ¿Por qué? Porque la memoria de un agente no necesita similaridad semántica — necesita búsqueda exacta por keywords técnicos. \"schema migration contacts\" no necesita embeddings: necesita FTS5 que encuentre esas palabras exactas. Menos infraestructura, menos latencia, menos puntos de falla.",
      visualType: "comparison-table",
      visualData: {
        headers: ["Aspecto", "Engram (SQLite+FTS5)", "RAG / Vector DB", "Fine-tuning"],
        rows: [
          ["Setup", "Zero config, un archivo", "Servidor + embeddings", "Re-entrenamiento costoso"],
          ["Latencia", "< 5ms local", "100-500ms (API)", "N/A (offline)"],
          ["Costo", "Cero", "Por consulta/storage", "Miles de USD"],
          ["Precisión", "Exacta por keywords", "Aproximada por semántica", "Generalizada"],
          ["Actualización", "Instantánea", "Re-indexar", "Re-entrenar"],
          ["Portabilidad", "Un archivo .db", "Depende del vendor", "Locked al modelo"],
        ],
      },
      keyMessage:
        "La solución más simple que funciona es la mejor. SQLite + FTS5 es esa solución para memoria de agentes.",
      nextBridge:
        "Engram da memoria. Pero ¿cómo le das conocimiento especializado al agente sin inflar su contexto?",
      tags: ["sqlite", "fts5", "comparación"],
    },
  ],
};
