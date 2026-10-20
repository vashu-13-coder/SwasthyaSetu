export const RISK_LEVELS = ['GREEN', 'YELLOW', 'RED'] as const;
export type RiskLevel = (typeof RISK_LEVELS)[number];
