import type { ModuleDefinition } from "@/types/content";

export const sddOrchestratorModule: ModuleDefinition = {
  id: "sdd-orchestrator",
  order: 6,
  title: "SDD: Spec-Driven Development",
  shortTitle: "SDD Orchestrator",
  description:
    "Specs como fuente de verdad. Orquestador como coordinador. Sub-agentes como ejecutores. Verificación contra contrato.",
  icon: "git-branch",
  accentColor: "#00F0FF",
  slides: [
    {
      id: "sdd-hero",
      moduleId: "sdd-orchestrator",
      order: 1,
      title: "Specs como fuente de verdad",
      eyebrow: "Módulo 6",
      subtitle: "El framework que estructura el caos",
      body: "Spec-Driven Development invierte la dinámica habitual. En vez de pedirle al agente \"hacé un endpoint de usuarios\" y esperar que adivine los requisitos, primero se escribe una especificación formal: qué debe hacer, cómo debe comportarse, contra qué se va a validar. La spec es el contrato. Todo lo que se diseña, implementa y verifica se mide contra ella. Sin spec, no hay criterio objetivo de \"terminado\".",
      keyMessage:
        "Sin especificación, \"terminado\" es una opinión. Con especificación, es un hecho verificable.",
      nextBridge:
        "Y el que coordina todo esto no programa una sola línea.",
      visualType: "sdd-spec-flow",
      visualData: {
        chaosItems: [
          "¿Está terminado?",
          "// TODO: fix later",
          "prompt → código → 🤞",
          "Sin criterio de validación",
        ],
        pipeline: [
          { step: "SPEC", label: "Qué debe hacer", icon: "file-text" },
          { step: "DESIGN", label: "Cómo se construye", icon: "compass" },
          { step: "IMPLEMENT", label: "Código real", icon: "code" },
          { step: "VERIFY", label: "Validado contra spec", icon: "check-circle" },
        ],
        sourceOfTruth:
          "La spec es el contrato. Todo se mide contra ella.",
      },
      tags: ["sdd", "specs", "framework"],
    },
    {
      id: "sdd-orquestador",
      moduleId: "sdd-orchestrator",
      order: 2,
      title: "El orquestador no programa",
      eyebrow: "Separación de planos",
      body: "El orquestador es un thread liviano que mantiene estado y delega. No lee código fuente. No escribe implementación. No corre tests. Solo coordina: lanza sub-agentes con contexto preciso, recibe resultados resumidos, toma decisiones de alto nivel, y persiste el estado para sobrevivir compactaciones. Cada sub-agente arranca con contexto fresco — sin el ruido de las fases anteriores.",
      keyMessage:
        "El orquestador es al proyecto lo que un director técnico al equipo: no juega, pero decide quién entra, con qué rol, en qué momento.",
      nextBridge:
        "¿Y en qué orden trabajan estos sub-agentes? No es cascada. Es un grafo.",
      visualType: "role-specialization",
      visualData: {
        roles: [
          {
            name: "Orchestrator",
            description: "Coordina. No ejecuta. Mantiene estado global.",
            color: "#00F0FF",
          },
          {
            name: "Spec Writer",
            description: "Escribe requisitos formales y escenarios.",
            color: "#3B82F6",
          },
          {
            name: "Designer",
            description: "Define arquitectura técnica y decisiones.",
            color: "#10B981",
          },
          {
            name: "Implementer",
            description: "Escribe código real siguiendo specs y diseño.",
            color: "#8B5CF6",
          },
          {
            name: "Verifier",
            description: "Valida implementación contra specs originales.",
            color: "#EF4444",
          },
        ],
      },
      tags: ["orquestador", "roles", "delegación"],
    },
    {
      id: "sdd-dag",
      moduleId: "sdd-orchestrator",
      order: 3,
      title: "DAG: dependencias, no cascada",
      eyebrow: "Flujo de trabajo",
      body: "Las fases de SDD no son secuenciales — son un grafo dirigido acíclico (DAG). La propuesta alimenta en paralelo a specs y diseño. Ambos convergen en el task breakdown. Los tasks habilitan la implementación. La verificación cierra el loop contra las specs originales. Este modelo permite paralelismo real: specs y diseño se escriben simultáneamente, porque ambos dependen solo de la propuesta.",
      bullets: [
        "Proposal → Spec + Design (paralelo)",
        "Spec + Design → Tasks (convergencia)",
        "Tasks → Apply (implementación por batches)",
        "Apply → Verify (validación contra contrato)",
      ],
      keyMessage:
        "Un DAG de fases con dependencias explícitas elimina la ambigüedad de \"¿qué hago primero?\"",
      nextBridge:
        "Veamos esto en acción con un ejemplo concreto.",
      visualType: "dag-flow",
      visualData: {
        nodes: [
          { id: "proposal", label: "Proposal", x: 50, y: 50 },
          { id: "spec", label: "Spec", x: 200, y: 20 },
          { id: "design", label: "Design", x: 200, y: 80 },
          { id: "tasks", label: "Tasks", x: 350, y: 50 },
          { id: "apply", label: "Apply", x: 500, y: 50 },
          { id: "verify", label: "Verify", x: 650, y: 50 },
        ],
        edges: [
          { from: "proposal", to: "spec" },
          { from: "proposal", to: "design" },
          { from: "spec", to: "tasks" },
          { from: "design", to: "tasks" },
          { from: "tasks", to: "apply" },
          { from: "apply", to: "verify" },
        ],
      },
      tags: ["dag", "fases", "dependencias"],
    },
    {
      id: "sdd-ejemplo",
      moduleId: "sdd-orchestrator",
      order: 4,
      title: "Ejemplo real: crear un endpoint",
      eyebrow: "SDD en acción",
      body: "Imaginá que necesitás un endpoint POST /api/contacts. Con SDD: el orquestador lanza un spec writer que define campos, validaciones, respuestas de error, y escenarios edge case. En paralelo, un designer define la arquitectura: tabla en Supabase, middleware de auth, schema Zod. El task breakdown genera 6 tareas ordenadas. El implementer las ejecuta. El verifier valida cada escenario contra la spec original.",
      keyMessage:
        "Un endpoint que \"funciona\" no es lo mismo que un endpoint verificado contra contrato. SDD cierra esa brecha.",
      nextBridge:
        "Todo esto funciona dentro de una sesión. Pero ¿qué pasa entre sesiones? ¿Cómo sobrevive el conocimiento a la compactación?",
      visualType: "timeline",
      visualData: {
        events: [
          {
            phase: "Proposal",
            description: "POST /api/contacts con validación y auth",
            duration: "2 min",
          },
          {
            phase: "Spec",
            description: "Campos, validaciones, 4 escenarios de error, respuesta 201",
            duration: "3 min",
          },
          {
            phase: "Design",
            description: "Tabla contacts, schema Zod, middleware auth, rate limiting",
            duration: "3 min",
          },
          {
            phase: "Tasks",
            description: "6 tareas: migration, schema, route, handler, tests, docs",
            duration: "1 min",
          },
          {
            phase: "Apply",
            description: "Implementación task por task, 2 batches",
            duration: "8 min",
          },
          {
            phase: "Verify",
            description: "4/4 escenarios pasan. 6/6 tasks completos.",
            duration: "2 min",
          },
        ],
      },
      tags: ["ejemplo", "endpoint", "práctica"],
    },
  ],
};
