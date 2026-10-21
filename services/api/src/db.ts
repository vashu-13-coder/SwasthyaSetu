import pg from 'pg';
import { env } from './env.js';

const { Pool } = pg;

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export async function checkDatabaseConnection(): Promise<boolean> {
  if (!env.DATABASE_URL) {
    return false;
  }
  try {
    const client = await pool.connect();
    client.release();
    return true;
  } catch {
    return false;
  }
}
