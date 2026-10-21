import { app } from './app.js';
import { env } from './env.js';

app.listen(env.PORT, () => {
  console.log(`[api] Server running on port ${env.PORT}`);
});

export default app;
