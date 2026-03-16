import type { ModuleId } from "./content";

export interface NavigationState {
  activeModuleId: ModuleId;
  activeSlideId: string;
  activeModuleIndex: number;
  activeSlideIndex: number;
  totalSlides: number;
  completedSlideIds: string[];
  isFocusMode: boolean;
}

export interface FlatSlide {
  id: string;
  moduleId: ModuleId;
  moduleTitle: string;
  moduleOrder: number;
  order: number;
  title: string;
  globalIndex: number;
}
