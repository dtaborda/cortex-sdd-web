import type { ModuleDefinition } from "@/types/content";

export const stackBibliotecasModule: ModuleDefinition = {
  id: "stack-bibliotecas",
  order: 9,
  title: "Stack y Bibliotecas",
  shortTitle: "Stack",
  description:
    "El ecosistema completo: SDD + Engram + Skills + MCP",
  icon: "boxes",
  accentColor: "#8B5CF6",
  slides: [
    {
      id: "stack-ecosistema",
      moduleId: "stack-bibliotecas",
      order: 1,
      title: "El ecosistema completo",
      eyebrow: "09 · STACK Y BIBLIOTECAS",
      body: "Ninguna pieza del stack funciona sola. SDD sin Engram pierde contexto entre sesiones. Engram sin Skills no sabe qué patrones aplicar. Skills sin SDD no tienen estructura de ejecución. MCP sin orquestación es una colección de APIs sin dirección. El poder real emerge cuando las piezas se componen: el orquestador SDD define fases, Engram persiste decisiones, Skills inyectan expertise, MCP conecta herramientas externas, y Context7 mantiene la documentación actualizada. Cada capa amplifica a las demás.",
      keyMessage:
        "El poder no está en ninguna pieza individual. Está en cómo se componen.",
      nextBridge:
        "Y dentro de este ecosistema, no todos los modelos sirven para todo.",
      visualType: "ecosystem-map",
      visualData: {
        center: { label: "Claude Code", color: "#8B5CF6" },
        satellites: [
          {
            label: "SDD",
            color: "#00F0FF",
            description: "Planificación estructurada por fases",
          },
          {
            label: "Engram",
            color: "#EC4899",
            description: "Memoria persistente cross-session",
          },
          {
            label: "Skills",
            color: "#84CC16",
            description: "Contexto técnico bajo demanda",
          },
          {
            label: "MCP",
            color: "#3B82F6",
            description: "Conexión con herramientas externas",
          },
          {
            label: "Context7",
            color: "#10B981",
            description: "Documentación actualizada al instante",
          },
        ],
      },
      tags: ["ecosistema", "composición", "stack"],
    },
    {
      id: "stack-model-router",
      moduleId: "stack-bibliotecas",
      order: 2,
      title: "Model Router: el motor correcto para cada fase",
      eyebrow: "09 · STACK Y BIBLIOTECAS",
      body: "Usar el mismo modelo para todo es como usar la misma herramienta para todo: funciona, pero no es óptimo. Opus para decisiones arquitectónicas complejas y orquestación de alto nivel. Sonnet para implementación de producción y refactoring preciso. Haiku para tareas rápidas donde la velocidad importa más que la profundidad. GPT-4o como segunda opinión en análisis extensos. El model router selecciona automáticamente el motor correcto según la fase SDD activa.",
      keyMessage:
        "No existe 'el mejor modelo'. Existe el modelo correcto para cada fase.",
      nextBridge:
        "El modelo es solo el motor. Veamos cómo todas las capas interactúan en la práctica.",
      visualType: "model-router",
      visualData: {
        models: [
          {
            name: "Claude Opus",
            bestFor: "Arquitectura, decisiones complejas, orquestación",
            tier: "premium",
          },
          {
            name: "Claude Sonnet",
            bestFor: "Implementación, refactoring, código de producción",
            tier: "balanced",
          },
          {
            name: "Claude Haiku",
            bestFor: "Tareas rápidas, formatting, búsquedas simples",
            tier: "fast",
          },
          {
            name: "GPT-4o",
            bestFor: "Análisis extenso, contexto largo, segunda opinión",
            tier: "alternative",
          },
        ],
      },
      tags: ["model-router", "modelos", "optimización"],
    },
    {
      id: "stack-capas",
      moduleId: "stack-bibliotecas",
      order: 3,
      title: "Interacción entre capas",
      eyebrow: "09 · STACK Y BIBLIOTECAS",
      body: "SDD define las fases del trabajo. Cada fase selecciona el modelo óptimo vía model router. El orquestador lanza sub-agentes con contexto fresco. Engram persiste las decisiones que cruzan sesiones. Skills inyectan conocimiento de dominio solo cuando se necesita. MCP conecta con Jira, Notion, GitHub, bases de datos. Context7 provee documentación actualizada de cualquier librería. El agente no es un chat que recibe instrucciones — es un sistema con arquitectura, memoria, conocimiento especializado, y conexiones externas.",
      keyMessage:
        "Un sistema cognitivo no es un modelo más grande. Es un modelo con arquitectura.",
      nextBridge:
        "Lo que separa un chat de un sistema cognitivo no es el modelo. Es todo lo que construís alrededor.",
      visualType: "architecture-map",
      visualData: {
        layers: [
          {
            label: "Orquestación (SDD)",
            description: "Define fases, coordina sub-agentes",
            color: "#00F0FF",
          },
          {
            label: "Memoria (Engram)",
            description: "Persiste decisiones cross-session",
            color: "#EC4899",
          },
          {
            label: "Conocimiento (Skills)",
            description: "Inyecta expertise bajo demanda",
            color: "#84CC16",
          },
          {
            label: "Conexiones (MCP)",
            description: "Integra herramientas externas",
            color: "#3B82F6",
          },
          {
            label: "Docs (Context7)",
            description: "Documentación actualizada en tiempo real",
            color: "#10B981",
          },
        ],
      },
      tags: ["capas", "interacción", "arquitectura"],
    },
  ],
};
