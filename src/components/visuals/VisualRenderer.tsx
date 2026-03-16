"use client";

import { SlideDefinition, ModuleDefinition } from "@/types/content";
import { TokenPredictionVisual } from "./TokenPredictionVisual";
import { ComparisonTableVisual } from "./ComparisonTableVisual";
import { DegradationFlowVisual } from "./DegradationFlowVisual";
import { ContextLayersVisual } from "./ContextLayersVisual";
import { RoleSpecializationVisual } from "./RoleSpecializationVisual";
import { DagFlowVisual } from "./DagFlowVisual";
import { EngramLoopVisual } from "./EngramLoopVisual";
import { SignalVsNoiseVisual } from "./SignalVsNoiseVisual";
import { ArchitectureMapVisual } from "./ArchitectureMapVisual";
import { EcosystemMapVisual } from "./EcosystemMapVisual";
import { ModelRouterVisual } from "./ModelRouterVisual";
import { SkillsLoadingVisual } from "./SkillsLoadingVisual";
import { OutcomeComparisonVisual } from "./OutcomeComparisonVisual";
import { CardsGridVisual } from "./CardsGridVisual";
import { TimelineVisual } from "./TimelineVisual";
import { NeuralPredictionVisual } from "./NeuralPredictionVisual";
import { HeroVisual } from "./HeroVisual";

interface Props {
  slide: SlideDefinition;
  module: ModuleDefinition;
}

export function VisualRenderer({ slide, module }: Props) {
  const data = slide.visualData || {};
  const accent = module.accentColor;

  switch (slide.visualType) {
    case "token-prediction":
      return <TokenPredictionVisual data={data} accent={accent} />;
    case "comparison-table":
      return <ComparisonTableVisual data={data} accent={accent} />;
    case "degradation-flow":
      return <DegradationFlowVisual data={data} accent={accent} />;
    case "context-layers":
      return <ContextLayersVisual data={data} accent={accent} />;
    case "role-specialization":
      return <RoleSpecializationVisual data={data} accent={accent} />;
    case "dag-flow":
      return <DagFlowVisual data={data} accent={accent} />;
    case "engram-loop":
      return <EngramLoopVisual data={data} accent={accent} />;
    case "signal-vs-noise":
      return <SignalVsNoiseVisual data={data} accent={accent} />;
    case "architecture-map":
      return <ArchitectureMapVisual data={data} accent={accent} />;
    case "ecosystem-map":
      return <EcosystemMapVisual data={data} accent={accent} />;
    case "model-router":
      return <ModelRouterVisual data={data} accent={accent} />;
    case "skills-loading":
      return <SkillsLoadingVisual data={data} accent={accent} />;
    case "outcome-comparison":
      return <OutcomeComparisonVisual data={data} accent={accent} />;
    case "cards-grid":
      return <CardsGridVisual data={data} accent={accent} />;
    case "timeline":
      return <TimelineVisual data={data} accent={accent} />;
    case "neural-prediction":
      return <NeuralPredictionVisual data={data} accent={accent} />;
    case "hero":
      return <HeroVisual data={data} accent={accent} />;
    default:
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-text-muted font-mono text-sm">
            Visual: {slide.visualType}
          </p>
        </div>
      );
  }
}
