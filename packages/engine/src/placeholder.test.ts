import { describe, it, expect } from 'vitest';
import {
  RISK_LEVELS,
  CLINICAL_REVIEW_STATUSES,
  ROLES,
  PERMISSIONS,
} from '@swasthyasetu/shared';
import type { PathwayDefinition } from './index.js';

describe('engine foundation', () => {
  it('loads shared risk levels with exact required values', () => {
    expect(RISK_LEVELS).toEqual(['GREEN', 'YELLOW', 'RED']);
  });

  it('loads shared clinical review statuses', () => {
    expect(CLINICAL_REVIEW_STATUSES).toEqual(['pending', 'approved']);
  });

  it('loads shared roles and permissions', () => {
    expect(ROLES).toEqual(['ASHA', 'PHC_STAFF', 'DISTRICT_OFFICER']);
    expect(PERMISSIONS).toContain('CASE_CREATE');
    expect(PERMISSIONS).toContain('CASE_READ_OWN');
    expect(PERMISSIONS).toContain('CASE_READ_BLOCK');
    expect(PERMISSIONS).toContain('DASHBOARD_VIEW_AGGREGATE');
  });

  it('typechecks a sample pathway definition shape', () => {
    const samplePathway: PathwayDefinition = {
      id: 'test-pathway',
      version: '1.0.0',
      title: 'Test Pathway',
      clinicalReview: 'pending',
      steps: [
        {
          id: 's1',
          question: 'Sample question?',
          options: [{ id: 'opt1', label: 'Yes' }],
        },
      ],
      rules: [],
    };
    expect(samplePathway.id).toBe('test-pathway');
    expect(samplePathway.clinicalReview).toBe('pending');
  });
});
