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
import { SddSpecVisual } from "./SddSpecVisual";
import { MemoryAmnesiaVisual } from "./MemoryAmnesiaVisual";
import { EngramCtaVisual } from "./EngramCtaVisual";
import { HeroVisual } from "./HeroVisual";

interface Props {
  slide: SlideDefinition;
  module: ModuleDefinition;
  locale?: string;
}

export function VisualRenderer({ slide, module, locale }: Props) {
  const data = slide.visualData || {};
  const accent = module.accentColor;

  switch (slide.visualType) {
    case "token-prediction":
      return <TokenPredictionVisual data={data} accent={accent} locale={locale} />;
    case "comparison-table":
      return <ComparisonTableVisual data={data} accent={accent} locale={locale} />;
    case "degradation-flow":
      return <DegradationFlowVisual data={data} accent={accent} locale={locale} />;
    case "context-layers":
      return <ContextLayersVisual data={data} accent={accent} locale={locale} />;
    case "role-specialization":
      return <RoleSpecializationVisual data={data} accent={accent} locale={locale} />;
    case "dag-flow":
      return <DagFlowVisual data={data} accent={accent} locale={locale} />;
    case "engram-loop":
      return <EngramLoopVisual data={data} accent={accent} locale={locale} />;
    case "signal-vs-noise":
      return <SignalVsNoiseVisual data={data} accent={accent} locale={locale} />;
    case "architecture-map":
      return <ArchitectureMapVisual data={data} accent={accent} locale={locale} />;
    case "ecosystem-map":
      return <EcosystemMapVisual data={data} accent={accent} locale={locale} />;
    case "model-router":
      return <ModelRouterVisual data={data} accent={accent} locale={locale} />;
    case "skills-loading":
      return <SkillsLoadingVisual data={data} accent={accent} locale={locale} />;
    case "outcome-comparison":
      return <OutcomeComparisonVisual data={data} accent={accent} locale={locale} />;
    case "cards-grid":
      return <CardsGridVisual data={data} accent={accent} locale={locale} />;
    case "timeline":
      return <TimelineVisual data={data} accent={accent} locale={locale} />;
    case "neural-prediction":
      return <NeuralPredictionVisual data={data} accent={accent} locale={locale} />;
    case "sdd-spec-flow":
      return <SddSpecVisual data={data} accent={accent} locale={locale} />;
    case "memory-amnesia":
      return <MemoryAmnesiaVisual data={data} accent={accent} locale={locale} />;
    case "engram-cta":
      return <EngramCtaVisual data={data} accent={accent} locale={locale} />;
    case "hero":
      return <HeroVisual data={data} accent={accent} locale={locale} />;
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
