# SwasthyaSetu

Offline-first clinical decision-support PWA for rural frontline health workers (ASHA/ANM).

> **Decision support, not diagnosis.** Rule-based and explainable. No ML in the MVP.

## Quick Start

```bash
pnpm install
pnpm dev          # starts web (Vite) + API (Express) together
pnpm build        # builds all packages
pnpm lint         # runs ESLint across all packages
pnpm typecheck    # runs tsc --noEmit across all packages
pnpm test         # runs vitest / jest across all packages
```

## Structure

```
apps/web           React PWA (Vite, TypeScript, Dexie, react-router)
services/api       Express API (TypeScript, PostgreSQL, zod)
packages/engine    Pure TypeScript triage engine (vitest)
packages/shared    Shared types (Role, Permission, RiskLevel, etc.)
```

## Team

Team Neural Nexus — CodeSlayers 2K26 Healthcare Track
