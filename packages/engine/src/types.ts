import type { RiskLevel } from '@swasthyasetu/shared';

/**
 * Placeholder types for the pathway engine.
 * The actual evaluate function will be implemented in Step 9.
 * Pathways are JSON data; evaluation is done by one generic function.
 */

export interface PathwayOption {
  id: string;
  label: string;
  isDangerSign?: boolean;
}

export interface PathwayStep {
  id: string;
  question: string;
  options: PathwayOption[];
}

export interface PathwayOutcome {
  riskLevel: RiskLevel;
  reasonText: string;
  actionText: string;
}

export interface PathwayDefinition {
  id: string;
  version: string;
  title: string;
  clinicalReview: 'pending' | 'approved';
  steps: PathwayStep[];
  rules: PathwayRule[];
}

export interface PathwayRule {
  id: string;
  condition: Record<string, string | string[]>;
  outcome: PathwayOutcome;
  isDangerSignRule?: boolean;
}
