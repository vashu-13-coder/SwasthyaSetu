export const CLINICAL_REVIEW_STATUSES = ['pending', 'approved'] as const;
export type ClinicalReviewStatus = (typeof CLINICAL_REVIEW_STATUSES)[number];
