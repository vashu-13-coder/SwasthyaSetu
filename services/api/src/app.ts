import express, { type Express, type Request, type Response, type NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import type { ApiResponse } from '@swasthyasetu/shared';
import { env } from './env.js';

export function createApp(): Express {
  const app: Express = express();

  // Security & parsing middleware
  app.use(helmet());
  app.use(cors({ origin: env.CORS_ORIGIN }));
  app.use(express.json());

  // Rate limiting with envelope error response
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
      standardHeaders: true,
      legacyHeaders: false,
      handler: (_req: Request, res: Response) => {
        const response: ApiResponse = {
          success: false,
          data: null,
          error: {
            code: 'RATE_LIMIT_EXCEEDED',
            message: 'Too many requests, please try again later.',
          },
        };
        res.status(429).json(response);
      },
    }),
  );

  // Health check endpoint
  app.get('/health', (_req: Request, res: Response) => {
    const response: ApiResponse<{ status: string }> = {
      success: true,
      data: { status: 'ok' },
      error: null,
    };
    res.json(response);
  });

  // 404 Not Found handler in standard envelope
  app.use((_req: Request, res: Response) => {
    const response: ApiResponse = {
      success: false,
      data: null,
      error: {
        code: 'NOT_FOUND',
        message: 'Route not found',
      },
    };
    res.status(404).json(response);
  });

  // Error handling middleware in standard envelope
  app.use((err: Error & { status?: number; code?: string }, _req: Request, res: Response, _next: NextFunction) => {
    const statusCode = err.status && Number.isInteger(err.status) ? err.status : 500;
    const response: ApiResponse = {
      success: false,
      data: null,
      error: {
        code: err.code || (statusCode === 400 ? 'BAD_REQUEST' : 'INTERNAL_ERROR'),
        message: err.message || 'An unexpected error occurred',
      },
    };
    res.status(statusCode).json(response);
  });

  return app;
}

export const app = createApp();
