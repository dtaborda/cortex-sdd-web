import type { ModuleDefinition, SlideDefinition } from "@/types/content";
import type { FlatSlide } from "@/types/navigation";
import type { Locale } from "@/lib/i18n";
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
import { enModules } from "@/content/modules/en";

/**
 * Spanish modules (default).
 */
const esModules: ModuleDefinition[] = [
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
 * Get all modules for a given locale.
 */
export function getAllModules(locale: Locale = "es"): ModuleDefinition[] {
  return locale === "en" ? enModules : esModules;
}

/**
 * Build flat slides from modules.
 */
export function buildFlatSlides(modules: ModuleDefinition[]): FlatSlide[] {
  const flat: FlatSlide[] = modules.flatMap((module) =>
    module.slides.map((slide) => ({
      id: slide.id,
      moduleId: module.id,
      moduleTitle: module.title,
      moduleOrder: module.order,
      order: slide.order,
      title: slide.title,
      globalIndex: 0,
    }))
  );
  flat.forEach((slide, idx) => {
    slide.globalIndex = idx;
  });
  return flat;
}

// Backward-compatible exports (Spanish default)
export const allModules = esModules;
export const allFlatSlides = buildFlatSlides(esModules);
export const totalSlideCount = allFlatSlides.length;

/**
 * Get a module by ID (from a given set of modules).
 */
export function getModuleById(
  id: string,
  modules: ModuleDefinition[] = esModules
): ModuleDefinition | undefined {
  return modules.find((m) => m.id === id);
}

/**
 * Get a slide by ID (from a given set of modules).
 */
export function getSlideById(
  id: string,
  modules: ModuleDefinition[] = esModules
): SlideDefinition | undefined {
  for (const module of modules) {
    const slide = module.slides.find((s) => s.id === id);
    if (slide) return slide;
  }
  return undefined;
}
