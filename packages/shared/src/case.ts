import type { RiskLevel } from './risk-levels.js';
import type { ClinicalReviewStatus } from './clinical-review.js';

export type CaseStatus = 'draft' | 'completed' | 'synced';

export interface Case {
  id: string;
  patientInitials: string;
  patientAge: number;
  patientGender: 'M' | 'F' | 'O';
  pathwayId: string;
  pathwayVersion: string;
  status: CaseStatus;
  riskLevel: RiskLevel | null;
  reasonText: string | null;
  actionText: string | null;
  clinicalReviewStatus: ClinicalReviewStatus;
  createdBy: string;
  blockId: string;
  districtId: string;
  createdAt: string;
  updatedAt: string;
  syncedAt: string | null;
}
