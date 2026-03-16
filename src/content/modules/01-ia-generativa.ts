import type { ModuleDefinition } from "@/types/content";

export const iaGenerativaModule: ModuleDefinition = {
  id: "ia-generativa",
  order: 1,
  title: "IA Generativa: El Motor Sin Volante",
  shortTitle: "IA Generativa",
  description:
    "Un LLM no piensa. Predice. Entender esta distinción es la base de todo lo que viene después.",
  icon: "brain",
  accentColor: "#F59E0B",
  slides: [
    {
      id: "ia-gen-hero",
      moduleId: "ia-generativa",
      order: 1,
      title: "Predicción, no pensamiento",
      eyebrow: "Módulo 1",
      subtitle: "Lo que realmente hace un modelo de lenguaje",
      body: "Un LLM es un motor de predicción estadística extraordinariamente sofisticado. No comprende. No razona. No tiene intenciones. Genera el token más probable dado un contexto. Eso es todo. Y sin embargo, con la arquitectura correcta, ese motor puede producir resultados que parecen inteligencia genuina. La diferencia entre \"parece\" y \"es\" define todo lo que vamos a construir.",
      keyMessage:
        "El modelo es el motor. Sin volante, sin mapa, sin destino. La arquitectura es lo que convierte predicción en sistema.",
      nextBridge:
        "Para entender qué podemos construir, primero veamos cómo funciona esa predicción por dentro.",
      visualType: "hero",
      tags: ["fundamentos", "llm", "predicción"],
    },
    {
      id: "ia-gen-tokens",
      moduleId: "ia-generativa",
      order: 2,
      title: "Cómo predice un LLM",
      eyebrow: "Token a token",
      body: "El modelo no genera respuestas completas. Produce un token a la vez, eligiendo el más probable según la distribución estadística del contexto que recibió. Cada token generado se concatena al contexto y alimenta la siguiente predicción. Es un proceso autoregresivo: la salida se convierte en entrada. Por eso el contexto lo es todo — cambiás el contexto, cambiás completamente la salida.",
      bullets: [
        "Cada token se predice basado en TODOS los tokens anteriores",
        "La temperatura controla cuánta \"creatividad\" (aleatoriedad) permitís",
        "No hay \"pensamiento\" entre tokens — solo probabilidad condicional",
        "Un contexto ruidoso produce predicciones ruidosas",
      ],
      keyMessage:
        "Un LLM no escribe respuestas. Predice secuencias, un token a la vez.",
      nextBridge:
        "Si todo es predicción estadística, ¿qué es lo que un LLM realmente NO puede hacer?",
      visualType: "token-prediction",
      visualData: {
        tokens: ["El", "contexto", "define", "la"],
        predictions: [
          { label: "respuesta", probability: 72 },
          { label: "calidad", probability: 15 },
          { label: "salida", probability: 8 },
          { label: "nada", probability: 5 },
        ],
      },
      tags: ["tokens", "predicción", "autoregresivo"],
    },
    {
      id: "ia-gen-limites",
      moduleId: "ia-generativa",
      order: 3,
      title: "Lo que un LLM NO hace",
      eyebrow: "Desmitificando",
      body: "La ilusión de inteligencia es tan convincente que confundimos pattern matching con comprensión. Un LLM no almacena recuerdos, no aprende de tu conversación, no tiene un modelo del mundo. Cuando \"razona\", está replicando patrones de razonamiento que vio en datos de entrenamiento. Cuando \"recuerda\", está procesando tokens que todavía están en la ventana de contexto. Sin contexto, no hay nada.",
      keyMessage:
        "Lo que parece comprensión es predicción. Lo que parece memoria es contexto. Lo que parece razonamiento es pattern matching.",
      nextBridge:
        "Si el modelo solo ve lo que le das, entonces la ventana de contexto es literalmente su único universo. Veamos qué significa eso.",
      visualType: "comparison-table",
      visualData: {
        headers: ["Lo que parece", "Lo que realmente hace"],
        rows: [
          [
            "Entiende tu pregunta",
            "Completa un patrón estadístico",
          ],
          [
            "Recuerda conversaciones",
            "Procesa tokens en ventana",
          ],
          [
            "Razona lógicamente",
            "Predice la secuencia más probable",
          ],
          [
            "Aprende de ti",
            "No retiene nada entre sesiones",
          ],
        ],
      },
      tags: ["limitaciones", "mitos", "realidad"],
    },
  ],
};
