import { z } from 'zod';
import 'dotenv/config';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3001),
  DATABASE_URL: z.string().optional(),
  JWT_SECRET: z.string().default('development-jwt-secret'),
  JWT_REFRESH_SECRET: z.string().default('development-jwt-refresh-secret'),
  CORS_ORIGIN: z.string().default('http://localhost:5173'),
});

export const env = envSchema.parse(process.env);
