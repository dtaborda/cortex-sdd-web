import type { ModuleDefinition } from "@/types/content";

export const engramModule: ModuleDefinition = {
  id: "engram",
  order: 7,
  title: "Memoria Persistente",
  shortTitle: "Memoria",
  description:
    "El problema de la amnesia y c\u00f3mo Engram lo resuelve",
  icon: "database",
  accentColor: "#EC4899",
  slides: [
    {
      id: "engram-amnesia",
      moduleId: "engram",
      order: 1,
      title: "El problema de la amnesia",
      eyebrow: "07 \u00b7 MEMORIA PERSISTENTE",
      subtitle: "Por qu\u00e9 los agentes olvidan todo entre sesiones",
      body: "Cada vez que una sesi\u00f3n termina o el contexto se compacta, el agente pierde todo. Las decisiones arquitect\u00f3nicas, los bugs encontrados, las convenciones de c\u00f3digo, las preferencias del usuario \u2014 todo desaparece. La pr\u00f3xima sesi\u00f3n arranca de cero. No hay continuidad. No hay memoria. Este es el problema fundamental de trabajar con agentes de IA a escala: la amnesia entre sesiones.",
      keyMessage:
        "Sin memoria persistente, cada sesi\u00f3n empieza de cero. Cada descubrimiento se pierde. Cada decisi\u00f3n se olvida.",
      nextBridge:
        "\u00bfY si existiera una herramienta que resolviera exactamente esto?",
      visualType: "memory-amnesia",
      tags: ["amnesia", "memoria", "problema", "sesiones"],
    },
    {
      id: "engram-signal",
      moduleId: "engram",
      order: 2,
      title: "Engram: memoria curada, no logs",
      eyebrow: "07 \u00b7 MEMORIA PERSISTENTE",
      subtitle: "La herramienta open source que le da memoria real a tus agentes",
      body: "Engram no es un log dump. No es una vector database. No es RAG. Es un sistema de memoria persistente liviano, construido sobre SQLite + FTS5. Guarda observaciones curadas \u2014 decisiones arquitect\u00f3nicas, bug fixes, patrones, descubrimientos. Se\u00f1al, no ruido. Dise\u00f1ado para agentes de c\u00f3digo (Claude Code, Cursor, cualquiera con MCP) y sobrevive sesiones, compactaciones, y reinicios.",
      keyMessage:
        "Engram no guarda todo. Guarda lo que importa. Se\u00f1al, no ruido.",
      nextBridge:
        "Veamos c\u00f3mo funciona el ciclo completo.",
      visualType: "signal-vs-noise",
      visualData: {
        signals: [
          "Decisi\u00f3n: JWT over sessions",
          "Bug fix: FTS5 requires quoted terms",
          "Patr\u00f3n: kebab-case for file names",
          "Preferencia: user prefers Spanish",
          "Discovery: Tailwind v4 uses @theme",
        ],
        noise: [
          "Full terminal output (500 l\u00edneas)",
          "C\u00f3digo fuente completo del archivo",
          "Conversaci\u00f3n casual sobre enfoque",
          "10 intentos fallidos antes del fix",
          "console.logs temporales de debug",
        ],
      },
      tags: ["engram", "se\u00f1al", "ruido", "curado"],
    },
    {
      id: "engram-loop",
      moduleId: "engram",
      order: 3,
      title: "Guardar \u2192 Buscar \u2192 Recuperar \u2192 Continuar",
      eyebrow: "07 \u00b7 MEMORIA PERSISTENTE",
      subtitle: "El ciclo que convierte sesiones aisladas en conocimiento acumulativo",
      body: "El ciclo es elegante: durante el trabajo, el agente identifica decisiones y descubrimientos relevantes y los persiste con mem_save. Cuando el contexto se compacta o una nueva sesi\u00f3n comienza, el agente busca con mem_search y recupera el contenido completo con mem_get_observation. El resultado es continuidad cognitiva \u2014 la sesi\u00f3n 47 sabe lo que aprendi\u00f3 la sesi\u00f3n 1.",
      bullets: [
        "mem_save: persiste una observaci\u00f3n con t\u00edtulo, tipo, y contenido estructurado",
        "mem_search: b\u00fasqueda full-text sobre todas las observaciones",
        "mem_get_observation: recupera el contenido completo (no truncado)",
        "topic_key: agrupa observaciones que evolucionan (ej: architecture/auth)",
        "session_summary: resumen de cierre para continuidad entre sesiones",
      ],
      keyMessage:
        "Con Engram, la sesi\u00f3n 47 sabe lo que aprendi\u00f3 la sesi\u00f3n 1.",
      nextBridge:
        "\u00bfPor qu\u00e9 algo tan simple y no una soluci\u00f3n enterprise?",
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
      tags: ["loop", "mem_save", "mem_search", "ciclo"],
    },
    {
      id: "engram-vs-alternativas",
      moduleId: "engram",
      order: 4,
      title: "SQLite + FTS5 vs la artiller\u00eda pesada",
      eyebrow: "07 \u00b7 MEMORIA PERSISTENTE",
      body: "Engram eligi\u00f3 la simplicidad radical. Sin Postgres, sin Redis, sin vector embeddings, sin infraestructura cloud. Solo SQLite + FTS5. R\u00e1pido, local, zero-config, funciona offline. La memoria de un agente no necesita similaridad sem\u00e1ntica \u2014 necesita b\u00fasqueda exacta por keywords t\u00e9cnicos. Menos infraestructura, menos latencia, menos puntos de falla.",
      visualType: "comparison-table",
      visualData: {
        headers: [
          "Enfoque",
          "Infra necesaria",
          "Velocidad",
          "Complejidad",
        ],
        rows: [
          [
            "Engram (SQLite+FTS5)",
            "Cero. Un archivo local.",
            "< 1ms b\u00fasqueda",
            "M\u00ednima",
          ],
          [
            "RAG + Vector DB",
            "Embedding model + Pinecone/Weaviate",
            "~100ms",
            "Alta",
          ],
          [
            "Fine-tuning",
            "GPU, datasets, pipeline ML",
            "N/A (offline)",
            "Muy alta",
          ],
          [
            "Redis/Memcached",
            "Servidor, config, TTL",
            "< 1ms",
            "Media (ef\u00edmero)",
          ],
        ],
      },
      keyMessage:
        "La mejor arquitectura no es la m\u00e1s compleja. Es la que resuelve el problema con la menor fricci\u00f3n.",
      nextBridge:
        "Engram es open source y est\u00e1 listo para usar.",
      tags: ["sqlite", "fts5", "comparaci\u00f3n", "rag"],
    },
    {
      id: "engram-cta",
      moduleId: "engram",
      order: 5,
      title: "Open source. Listo para usar.",
      eyebrow: "07 \u00b7 MEMORIA PERSISTENTE",
      subtitle: "Creado por Gentleman Programming",
      body: "Engram es open source, gratuito y est\u00e1 listo para instalar ahora mismo. Funciona con Claude Code, Cursor, y cualquier agente que soporte MCP. Una sola l\u00ednea y tus agentes tienen memoria persistente real.",
      keyMessage: "Dale memoria a tus agentes. Hoy.",
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
      tags: ["engram", "cta", "instalaci\u00f3n", "open-source"],
    },
  ],
};
