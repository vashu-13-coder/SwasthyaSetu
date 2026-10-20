import type { RiskLevel } from './risk-levels.js';

export interface Assessment {
  caseId: string;
  pathwayId: string;
  pathwayVersion: string;
  answers: Record<string, string | number | boolean>;
  riskLevel: RiskLevel;
  reasonText: string;
  actionText: string;
  clinicalReviewStatus: 'pending' | 'approved';
  completedAt: string;
}
