import type { ModuleDefinition } from "@/types/content";

export const godAgentModule: ModuleDefinition = {
  id: "god-agent",
  order: 5,
  title: "El God Agent: Cuando Uno Solo Hace Todo",
  shortTitle: "God Agent",
  description:
    "Un agente que diseña, implementa, testea y deploya es un God Object con contexto. Escala hasta que no escala.",
  icon: "alert-triangle",
  accentColor: "#EF4444",
  slides: [
    {
      id: "god-problema",
      moduleId: "god-agent",
      order: 1,
      title: "El God Agent: un agente que hace todo",
      eyebrow: "El antipatrón central",
      body: "Un AGENTS.md de 500 líneas con todas las instrucciones posibles. Un solo agente que diseña APIs, escribe componentes React, configura Terraform, y redacta documentación. Funciona increíblemente bien para tareas simples. Pero a medida que el proyecto crece, el agente carga instrucciones para 15 dominios distintos, la mayoría irrelevantes para la tarea actual. Es el God Object de la programación orientada a objetos, pero con contexto cognitivo.",
      bullets: [
        "System prompt inflado con instrucciones de todos los dominios",
        "Cada tarea compite por el mismo presupuesto de atención",
        "El agente \"sabe\" de todo pero no es experto en nada específico",
        "Los errores de un dominio contaminan otros",
      ],
      keyMessage:
        "El God Agent es seductor porque funciona al principio. Es destructivo porque falla cuando más lo necesitás.",
      nextBridge:
        "¿Cuánto contexto se desperdicia? Veamos los números.",
      visualType: "degradation-flow",
      visualData: {
        stages: [
          { label: "Proyecto chico", quality: 90, tokens: "15K" },
          { label: "Crecimiento", quality: 65, tokens: "50K" },
          { label: "Instrucciones infladas", quality: 40, tokens: "90K" },
          { label: "God Agent colapsa", quality: 15, tokens: "150K" },
        ],
      },
      tags: ["god-agent", "antipatrón", "escala"],
    },
    {
      id: "god-mezcla",
      moduleId: "god-agent",
      order: 2,
      title: "Mezcla de capas, pérdida de foco",
      eyebrow: "Anatomía del problema",
      body: "Cuando un agente carga instrucciones para diseñar esquemas de base de datos Y escribir CSS Y configurar pipelines de CI, cada instrucción compite por atención. El modelo tiene un \"attention budget\" finito. Instrucciones irrelevantes no son inocuas — dilyen la señal de las instrucciones que sí importan. Es como darle a un cirujano un manual que incluye recetas de cocina: no lo confunde del todo, pero tampoco ayuda.",
      visualType: "comparison-table",
      visualData: {
        headers: ["Aspecto", "God Agent", "Agentes especializados"],
        rows: [
          [
            "System prompt",
            "500+ líneas, todos los dominios",
            "50-100 líneas, dominio específico",
          ],
          [
            "Contexto útil",
            "~20% relevante para la tarea",
            "~90% relevante para la tarea",
          ],
          [
            "Calidad de output",
            "Aceptable, genérico",
            "Preciso, especializado",
          ],
          [
            "Escalabilidad",
            "Se degrada con cada dominio nuevo",
            "Crece sin interferencia",
          ],
          [
            "Debugging",
            "Difícil, causas cruzadas",
            "Aislado, trazable",
          ],
        ],
      },
      keyMessage:
        "No es que el modelo no pueda hacer todo. Es que hace todo peor cuando intenta hacer todo al mismo tiempo.",
      nextBridge:
        "La solución es obvia en retrospectiva: orquestar, no acumular.",
      tags: ["foco", "atención", "especialización"],
    },
    {
      id: "god-orquestacion",
      moduleId: "god-agent",
      order: 3,
      title: "De God Agent a orquestación",
      eyebrow: "El salto evolutivo",
      body: "La transición del God Agent a la orquestación replica la evolución del software: de monolito a microservicios. Un coordinador liviano que no ejecuta — solo delega. Sub-agentes especializados que arrancan con contexto fresco y enfocado. Cada uno es experto en su dominio. El coordinador mantiene el estado global sin cargar los detalles de implementación. Menos es más. Foco es todo.",
      keyMessage:
        "El paso de God Agent a orquestador es el mismo que de monolito a microservicios. La historia se repite.",
      nextBridge:
        "Pero orquestar sin método es caos coordinado. Necesitamos un framework de planificación. Ahí entra SDD.",
      visualType: "architecture-map",
      visualData: {
        before: {
          label: "God Agent",
          description: "Un agente, todas las tareas",
          color: "#EF4444",
        },
        after: {
          label: "Orquestador",
          description: "Coordina sub-agentes especializados",
          color: "#10B981",
        },
        agents: [
          { label: "Spec Writer", color: "#3B82F6" },
          { label: "Designer", color: "#8B5CF6" },
          { label: "Implementer", color: "#F59E0B" },
          { label: "Verifier", color: "#EC4899" },
        ],
      },
      tags: ["orquestación", "evolución", "microservicios"],
    },
  ],
};
