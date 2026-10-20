import type { Role } from './roles.js';

export const PERMISSIONS = [
  'CASE_CREATE',
  'CASE_READ_OWN',
  'CASE_READ_BLOCK',
  'DASHBOARD_VIEW_AGGREGATE',
] as const;

export type Permission = (typeof PERMISSIONS)[number];

export const ROLE_PERMISSIONS: Record<Role, readonly Permission[]> = {
  ASHA: ['CASE_CREATE', 'CASE_READ_OWN'],
  PHC_STAFF: ['CASE_CREATE', 'CASE_READ_OWN', 'CASE_READ_BLOCK'],
  DISTRICT_OFFICER: ['DASHBOARD_VIEW_AGGREGATE'],
} as const;
