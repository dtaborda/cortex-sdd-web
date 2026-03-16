import type { ModuleDefinition } from "@/types/content";

export const chatVsAgenteModule: ModuleDefinition = {
  id: "chat-vs-agente",
  order: 3,
  title: "Chat vs Agente: De Responder a Actuar",
  shortTitle: "Chat vs Agente",
  description:
    "Un chat responde preguntas. Un agente ejecuta tareas. La diferencia es tools, loops y autonomía.",
  icon: "bot",
  accentColor: "#10B981",
  slides: [
    {
      id: "chat-agente-comparacion",
      moduleId: "chat-vs-agente",
      order: 1,
      title: "Chat responde. Agente actúa.",
      eyebrow: "La diferencia fundamental",
      body: "Un chat es una interfaz de pregunta-respuesta. Le preguntás, te contesta, fin. Un agente es un loop: recibe una tarea, planifica pasos, ejecuta acciones, observa resultados, y decide si necesita seguir iterando. El chat es reactivo. El agente es proactivo. El chat termina cuando vos dejás de escribir. El agente termina cuando la tarea está completa.",
      keyMessage:
        "Chat = una respuesta. Agente = un loop de acción-observación hasta completar la tarea.",
      nextBridge:
        "¿Qué le da al agente la capacidad de actuar en el mundo real? Las herramientas.",
      visualType: "comparison-table",
      visualData: {
        headers: ["Chat", "Agente"],
        rows: [
          ["Responde preguntas", "Ejecuta tareas completas"],
          ["Una interacción", "Loop iterativo"],
          ["Solo texto", "Texto + herramientas + código"],
          ["Reactivo", "Proactivo"],
          ["Termina cuando preguntás", "Termina cuando completa"],
          ["Sin memoria", "Persiste decisiones"],
          ["Sin acceso a archivos", "Lee, escribe, ejecuta"],
        ],
      },
      tags: ["chat", "agente", "comparación"],
    },
    {
      id: "chat-agente-tools",
      moduleId: "chat-vs-agente",
      order: 2,
      title: "Tools: la conexión con el mundo real",
      eyebrow: "De texto a acción",
      body: "Un LLM sin tools solo produce texto. Con tools, puede leer archivos, ejecutar comandos, buscar en bases de datos, llamar APIs, crear commits. Las herramientas transforman la predicción de texto en acción concreta. El modelo no \"ejecuta\" la herramienta directamente — genera una llamada estructurada que el runtime intercepta y ejecuta. El resultado vuelve al contexto y alimenta la siguiente decisión.",
      bullets: [
        "Bash: ejecutar comandos, correr tests, builds",
        "Read/Write/Edit: manipular archivos del proyecto",
        "Grep/Glob: buscar en el codebase",
        "MCP servers: conectar con servicios externos",
        "Web fetch: consultar documentación online",
      ],
      keyMessage:
        "Las tools no hacen al modelo más inteligente. Le dan manos para actuar sobre sus predicciones.",
      nextBridge:
        "Un agente con tools puede ejecutar. Pero ¿quién decide qué hacer, en qué orden, con qué criterio?",
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
      tags: ["tools", "herramientas", "mcp"],
    },
    {
      id: "chat-agente-executor",
      moduleId: "chat-vs-agente",
      order: 3,
      title: "El agente como ejecutor autónomo",
      eyebrow: "El loop completo",
      body: "El patrón de un agente es: recibir tarea → descomponer en pasos → ejecutar paso → observar resultado → decidir siguiente acción → repetir hasta completar. Cada iteración del loop consume contexto. Cada tool call agrega tokens. El agente gasta su \"presupuesto cognitivo\" a medida que trabaja. Por eso la eficiencia del contexto no es un lujo — es supervivencia operativa.",
      keyMessage:
        "Un agente es un LLM en un loop con herramientas. Su efectividad depende de cuánto contexto útil logre mantener.",
      nextBridge:
        "Y acá aparece el primer problema serio: ¿qué pasa cuando ese agente único intenta hacer todo en una sola conversación?",
      visualType: "role-specialization",
      visualData: {
        roles: [
          {
            name: "Tarea",
            description: "El usuario define el objetivo",
            color: "#3B82F6",
          },
          {
            name: "Planificación",
            description: "El agente descompone en pasos",
            color: "#10B981",
          },
          {
            name: "Ejecución",
            description: "Llama tools, escribe código",
            color: "#F59E0B",
          },
          {
            name: "Observación",
            description: "Evalúa el resultado obtenido",
            color: "#8B5CF6",
          },
          {
            name: "Decisión",
            description: "Continúa, ajusta o termina",
            color: "#EF4444",
          },
        ],
      },
      tags: ["loop", "autonomía", "ejecución"],
    },
  ],
};
