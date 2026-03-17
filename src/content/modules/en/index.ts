import type { ModuleDefinition } from "@/types/content";
import { iaGenerativaModuleEn } from "./01-ia-generativa";
import { contextWindowModuleEn } from "./02-context-window";
import { chatVsAgenteModuleEn } from "./03-chat-vs-agente";
import { evolucionContextoModuleEn } from "./04-evolucion-contexto";
import { godAgentModuleEn } from "./05-god-agent";
import { sddOrchestratorModuleEn } from "./06-sdd-orchestrator";
import { engramModuleEn } from "./07-engram";
import { skillsRegistryModuleEn } from "./08-skills-registry";
import { stackBibliotecasModuleEn } from "./09-stack-bibliotecas";
import { cierreModuleEn } from "./10-cierre";

export const enModules: ModuleDefinition[] = [
  iaGenerativaModuleEn,
  contextWindowModuleEn,
  chatVsAgenteModuleEn,
  evolucionContextoModuleEn,
  godAgentModuleEn,
  sddOrchestratorModuleEn,
  engramModuleEn,
  skillsRegistryModuleEn,
  stackBibliotecasModuleEn,
  cierreModuleEn,
].sort((a, b) => a.order - b.order);
