export const ROLES = ['ASHA', 'PHC_STAFF', 'DISTRICT_OFFICER'] as const;
export type Role = (typeof ROLES)[number];
