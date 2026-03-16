import type { ModuleDefinition } from "@/types/content";

export const evolucionContextoModule: ModuleDefinition = {
  id: "evolucion-contexto",
  order: 4,
  title: "Evolución del Contexto: De Todo-en-Uno a Aislamiento",
  shortTitle: "Evolución Contexto",
  description:
    "Un solo chat para todo es el antipatrón más común. Separar responsabilidades en contextos aislados cambia todo.",
  icon: "trending-up",
  accentColor: "#F97316",
  slides: [
    {
      id: "evo-antipatron",
      moduleId: "evolucion-contexto",
      order: 1,
      title: "Un solo chat para todo: el antipatrón",
      eyebrow: "Lo que todos hacemos mal",
      body: "El instinto natural es usar un solo chat para todo el proyecto: diseñar la base de datos, escribir el frontend, configurar el deploy, arreglar bugs. Cada tarea inyecta contexto diferente. A los 40 mensajes, el modelo arrastra fragments de cinco tareas distintas, instrucciones obsoletas, y código que ya cambiaste. El contexto se convierte en un pantano donde la señal se ahoga en ruido.",
      bullets: [
        "Mensaje 1-10: contexto limpio, respuestas excelentes",
        "Mensaje 20-30: empieza a olvidar decisiones tempranas",
        "Mensaje 40-60: mezcla instrucciones de tareas distintas",
        "Mensaje 80+: compactación, pérdida severa, alucinaciones",
      ],
      keyMessage:
        "Un chat largo no es productividad. Es deuda de contexto acumulada.",
      nextBridge:
        "La solución no es chatear menos. Es separar responsabilidades.",
      visualType: "degradation-flow",
      visualData: {
        stages: [
          { label: "Chat nuevo", quality: 98, tokens: "2K" },
          { label: "Multi-tarea", quality: 60, tokens: "50K" },
          { label: "Pantano contextual", quality: 30, tokens: "100K" },
          { label: "Colapso", quality: 10, tokens: "180K" },
        ],
      },
      tags: ["antipatrón", "contexto", "degradación"],
    },
    {
      id: "evo-separacion",
      moduleId: "evolucion-contexto",
      order: 2,
      title: "Separar responsabilidades",
      eyebrow: "El primer insight arquitectónico",
      body: "La misma regla que aplica al código aplica al contexto de un agente: separación de responsabilidades. Una conversación para diseñar el esquema de datos. Otra para implementar la API. Otra para los tests. Cada contexto arranca limpio, enfocado, con solo las instrucciones y archivos relevantes para esa tarea. El modelo trabaja mejor porque su ventana contiene señal pura, no ruido acumulado.",
      keyMessage:
        "Separar contextos es el equivalente cognitivo de Single Responsibility Principle para agentes.",
      nextBridge:
        "Pero separar por tarea abre una pregunta: ¿cómo coordinás entre contextos aislados?",
      visualType: "architecture-map",
      visualData: {
        center: { label: "Proyecto", color: "#F97316" },
        connections: [
          { label: "Contexto DB", direction: "out", description: "Diseño de esquema" },
          { label: "Contexto API", direction: "out", description: "Endpoints y lógica" },
          { label: "Contexto UI", direction: "out", description: "Componentes y UX" },
          { label: "Contexto Tests", direction: "out", description: "Testing y QA" },
          { label: "Contexto Deploy", direction: "out", description: "CI/CD y config" },
        ],
      },
      tags: ["separación", "responsabilidades", "arquitectura"],
    },
    {
      id: "evo-aislamiento",
      moduleId: "evolucion-contexto",
      order: 3,
      title: "Contexto aislado por tarea",
      eyebrow: "El patrón que funciona",
      body: "Contexto aislado no significa contexto ignorante. Cada sub-agente arranca con un system prompt específico, recibe solo los artefactos que necesita, y devuelve un resultado acotado. El coordinador no le manda todo el codebase — le manda las specs relevantes, los archivos afectados, y las decisiones previas. Menos contexto, más relevante, mejores resultados.",
      visualType: "comparison-table",
      visualData: {
        headers: ["Chat monolítico", "Contextos aislados"],
        rows: [
          ["Todo en una conversación", "Una conversación por tarea"],
          ["Contexto acumulativo", "Contexto fresco por tarea"],
          ["Compactación frecuente", "Rara vez se compacta"],
          ["Mezcla de instrucciones", "Instrucciones enfocadas"],
          ["Degradación progresiva", "Calidad consistente"],
          ["Debug imposible", "Trazabilidad clara"],
        ],
      },
      keyMessage:
        "El mejor contexto no es el más grande. Es el más relevante para la tarea en curso.",
      nextBridge:
        "Separar contextos resuelve la degradación. Pero si un solo agente sigue haciendo todas las tareas, el problema solo cambia de forma.",
      tags: ["aislamiento", "sub-agentes", "calidad"],
    },
  ],
};
