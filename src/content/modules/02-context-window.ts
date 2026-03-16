import type { ModuleDefinition } from "@/types/content";

export const contextWindowModule: ModuleDefinition = {
  id: "context-window",
  order: 2,
  title: "La Ventana de Contexto: Todo Cabe, Hasta Que No",
  shortTitle: "Context Window",
  description:
    "El context window es la memoria de trabajo del modelo. Lo que entra ahí determina la calidad de la salida. Punto.",
  icon: "layers",
  accentColor: "#3B82F6",
  slides: [
    {
      id: "ctx-capas",
      moduleId: "context-window",
      order: 1,
      title: "Todo entra por la ventana",
      eyebrow: "Context Window",
      body: "Un LLM no tiene disco duro, no tiene RAM persistente. Todo lo que sabe en un momento dado es lo que cabe en su ventana de contexto. Ahí van el system prompt, la conversación previa, los archivos que inyectás, y tu mensaje actual. Todo compite por el mismo espacio finito. 128K tokens suena a mucho hasta que empezás a meter código, documentación y conversación larga.",
      bullets: [
        "System prompt: las instrucciones base del agente (~15%)",
        "Conversación previa: historial acumulado (~35%)",
        "Archivos y código: contexto inyectado (~30%)",
        "Tu mensaje actual: lo que acabás de escribir (~20%)",
      ],
      keyMessage:
        "La ventana de contexto es la única realidad del modelo. Lo que no está ahí, no existe.",
      nextBridge:
        "El problema no es el tamaño. Es qué pasa cuando se llena.",
      visualType: "context-layers",
      visualData: {
        layers: [
          { label: "System prompt", size: 15, color: "#3B82F6" },
          { label: "Conversación previa", size: 35, color: "#6366F1" },
          { label: "Archivos/código", size: 30, color: "#8B5CF6" },
          { label: "Tu mensaje actual", size: 20, color: "#A855F7" },
        ],
      },
      tags: ["contexto", "ventana", "tokens"],
    },
    {
      id: "ctx-degradacion",
      moduleId: "context-window",
      order: 2,
      title: "Ruido, compactación, degradación",
      eyebrow: "El deterioro inevitable",
      body: "A medida que la conversación crece, el contexto se llena de ruido: intentos fallidos, output redundante, instrucciones contradictorias. Cuando se alcanza el límite, el sistema compacta — resume y descarta. Cada compactación pierde matices, decisiones, contexto sutil. Después de dos o tres compactaciones, el agente trabaja con una sombra borrosa de lo que sabía. La calidad cae en picada.",
      bullets: [
        "10K tokens: contexto limpio, respuestas precisas",
        "60K tokens: empieza la acumulación de ruido",
        "120K tokens: compactación forzada, pérdida de matices",
        "180K+ tokens: degradación severa, alucinaciones frecuentes",
      ],
      keyMessage:
        "La compactación no es compresión sin pérdida. Cada resumen pierde lo que el resumidor considera \"no importante\" — y a veces se equivoca.",
      nextBridge:
        "Y cuando el contexto se degrada lo suficiente, aparece el síntoma más peligroso: la alucinación.",
      visualType: "degradation-flow",
      visualData: {
        stages: [
          { label: "Contexto limpio", quality: 95, tokens: "10K" },
          { label: "Acumulación", quality: 70, tokens: "60K" },
          { label: "Compactación", quality: 45, tokens: "120K" },
          { label: "Degradación", quality: 20, tokens: "180K" },
        ],
      },
      tags: ["degradación", "compactación", "ruido"],
    },
    {
      id: "ctx-alucinacion",
      moduleId: "context-window",
      order: 3,
      title: "Alucinación: el síntoma, no la causa",
      eyebrow: "Cuando el contexto falla",
      body: "La alucinación no es un bug del modelo. Es el resultado predecible de un contexto insuficiente o contaminado. Cuando le pedís a un LLM que genere código sin darle las specs, inventa APIs que no existen. Cuando el historial tiene instrucciones contradictorias, produce respuestas incoherentes. La solución no es un modelo \"mejor\". Es un contexto más limpio, más relevante, más estructurado.",
      visualType: "comparison-table",
      visualData: {
        headers: ["Causa real", "Síntoma visible"],
        rows: [
          [
            "Contexto insuficiente",
            "Inventa datos o APIs que no existen",
          ],
          [
            "Instrucciones contradictorias",
            "Respuestas incoherentes o parciales",
          ],
          [
            "Ruido acumulado",
            "Ignora instrucciones que sí están en contexto",
          ],
          [
            "Post-compactación",
            "Pierde el hilo, repite trabajo ya hecho",
          ],
        ],
      },
      keyMessage:
        "No necesitás un modelo que no alucine. Necesitás una arquitectura que le dé el contexto correcto.",
      nextBridge:
        "Si el contexto es tan crítico, ¿qué pasa cuando le agregamos herramientas al modelo? Pasamos de chat a agente.",
      tags: ["alucinación", "contexto", "calidad"],
    },
  ],
};
