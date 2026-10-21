import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from './app.js';

describe('API Foundation and Health Endpoint', () => {
  const app = createApp();

  it('GET /health returns 200 with standard response envelope', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      success: true,
      data: { status: 'ok' },
      error: null,
    });
  });

  it('Unknown route returns 404 with standard error envelope', async () => {
    const res = await request(app).get('/unknown-route');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({
      success: false,
      data: null,
      error: {
        code: 'NOT_FOUND',
        message: 'Route not found',
      },
    });
  });
});
