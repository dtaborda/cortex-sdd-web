import type { ModuleDefinition, SlideDefinition } from "@/types/content";
import type { FlatSlide } from "@/types/navigation";
import { iaGenerativaModule } from "@/content/modules/01-ia-generativa";
import { contextWindowModule } from "@/content/modules/02-context-window";
import { chatVsAgenteModule } from "@/content/modules/03-chat-vs-agente";
import { evolucionContextoModule } from "@/content/modules/04-evolucion-contexto";
import { godAgentModule } from "@/content/modules/05-god-agent";
import { sddOrchestratorModule } from "@/content/modules/06-sdd-orchestrator";
import { engramModule } from "@/content/modules/07-engram";
import { skillsRegistryModule } from "@/content/modules/08-skills-registry";
import { stackBibliotecasModule } from "@/content/modules/09-stack-bibliotecas";
import { cierreModule } from "@/content/modules/10-cierre";

/**
 * All modules in order. Add new modules here as they are created.
 */
export const allModules: ModuleDefinition[] = [
  iaGenerativaModule,
  contextWindowModule,
  chatVsAgenteModule,
  evolucionContextoModule,
  godAgentModule,
  sddOrchestratorModule,
  engramModule,
  skillsRegistryModule,
  stackBibliotecasModule,
  cierreModule,
].sort((a, b) => a.order - b.order);

/**
 * Flat array of all slides across all modules, with global index.
 */
export const allFlatSlides: FlatSlide[] = allModules.flatMap((module, _moduleIdx) =>
  module.slides.map((slide, slideIdx) => ({
    id: slide.id,
    moduleId: module.id,
    moduleTitle: module.title,
    moduleOrder: module.order,
    order: slide.order,
    title: slide.title,
    globalIndex: 0, // will be set below
  }))
);

// Set global indices
allFlatSlides.forEach((slide, idx) => {
  slide.globalIndex = idx;
});

/**
 * Total number of slides across all modules.
 */
export const totalSlideCount = allFlatSlides.length;

/**
 * Get a module by ID.
 */
export function getModuleById(id: string): ModuleDefinition | undefined {
  return allModules.find((m) => m.id === id);
}

/**
 * Get a slide by ID.
 */
export function getSlideById(id: string): SlideDefinition | undefined {
  for (const module of allModules) {
    const slide = module.slides.find((s) => s.id === id);
    if (slide) return slide;
  }
  return undefined;
}
