# Nafs – Master Yourself

> A premium Personal Life Operating System — not a habit tracker, but a complete platform to master every area of life.

## Overview

Nafs helps users improve spiritually, physically, mentally, professionally, and emotionally through 20 integrated modules unified by a single Life Score, analytics engine, and beautiful premium UI.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui |
| State | Zustand (client), React Query (server) |
| Forms | React Hook Form + Zod |
| Animation | Framer Motion |
| Charts | Recharts |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT (access + refresh tokens) |
| Media | Cloudinary |
| External APIs | AlQuran Cloud, AlAdhan, Hadith, Google Books, Open Library, OpenWeather, GitHub |

## Architecture

Monorepo with Clean Architecture and feature-based modules:

```
nafs/
├── apps/
│   ├── web/          # Next.js 15 frontend
│   └── api/          # Express.js REST API
├── packages/
│   ├── shared/       # Shared types, Zod schemas, constants
│   ├── ui/           # Shared UI primitives (optional)
│   └── config/       # ESLint, TypeScript, Tailwind configs
└── docs/             # Architecture, schema, wireframes
```

See [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) for full system design.

## Documentation

| Document | Description |
|----------|-------------|
| [Architecture](./docs/ARCHITECTURE.md) | System design, layers, data flow, security |
| [Database Schema](./docs/DATABASE_SCHEMA.md) | MongoDB collections and relationships |
| [UI Wireframes](./docs/UI_WIREFRAMES.md) | Layouts, components, design system |
| [API Design](./docs/API_DESIGN.md) | REST endpoints and contracts |

## Build Phases

| Phase | Scope | Status |
|-------|-------|--------|
| **0** | Architecture, schema, wireframes | ✅ Current |
| **1** | Auth, layout shell, theme system | Pending |
| **2** | Dashboard + Life Score | Pending |
| **3** | Islamic Hub | Pending |
| **4** | Health modules (Gym, Water, Food, Sleep, Walk) | Pending |
| **5** | Growth modules (Coding, Reading, Books) | Pending |
| **6** | Wellness modules (Mental, Self Respect, Recovery, Lonely Mode) | Pending |
| **7** | Career Hub + Goals + Habits | Pending |
| **8** | Analytics + Settings + Admin | Pending |

## Getting Started

> Implementation begins in Phase 1. Setup instructions will be added as modules are built.

```bash
# Coming in Phase 1
pnpm install
pnpm dev
```

## License

Private — All rights reserved.
