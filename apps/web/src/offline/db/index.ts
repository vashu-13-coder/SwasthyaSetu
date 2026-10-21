import Dexie, { type Table } from 'dexie';
import type { Case } from '@swasthyasetu/shared';

export interface SyncQueueItem {
  id: string;
  caseId: string;
  action: 'create' | 'update';
  payload: string;
  createdAt: string;
  status: 'pending' | 'syncing' | 'failed';
  retryCount: number;
}

export class SwasthyaSetuDB extends Dexie {
  cases!: Table<Case, string>;
  syncQueue!: Table<SyncQueueItem, string>;

  constructor() {
    super('SwasthyaSetuDB');
    this.version(1).stores({
      cases: 'id, status, riskLevel, createdBy, blockId, districtId, createdAt',
      syncQueue: 'id, caseId, status, createdAt',
    });
  }
}

export const db = new SwasthyaSetuDB();
