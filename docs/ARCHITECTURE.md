# Nafs – System Architecture

## 1. High-Level Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT (Next.js 15)                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────────────┐│
│  │  Pages   │ │ Features │ │  Hooks   │ │  Zustand + RQ Cache  ││
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └──────────┬───────────┘│
│       └────────────┴────────────┴───────────────────┘             │
│                              │                                   │
│                    ┌─────────▼─────────┐                        │
│                    │    API Client     │                        │
│                    │  (axios + interceptors)                   │
│                    └─────────┬─────────┘                        │
└──────────────────────────────┼──────────────────────────────────┘
                               │ HTTPS / JWT
┌──────────────────────────────▼──────────────────────────────────┐
│                     API GATEWAY (Express.js)                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────────────┐│
│  │  Routes  │→│Controllers│→│ Services │→│   Repositories       ││
│  └──────────┘ └──────────┘ └──────────┘ └──────────┬───────────┘│
│  ┌──────────┐ ┌──────────┐ ┌──────────┐            │            │
│  │Middleware│ │ Validators│ │  Jobs    │            │            │
│  └──────────┘ └──────────┘ └──────────┘            │            │
└────────────────────────────────────────────────────┼────────────┘
                                                     │
        ┌────────────────────────────────────────────┼────────────┐
        │                                            │            │
   ┌────▼────┐  ┌──────────┐  ┌──────────┐  ┌──────▼─────┐  ┌────▼────┐
   │ MongoDB │  │Cloudinary│  │  Redis   │  │ External   │  │  Cron   │
   │         │  │ (media)  │  │ (cache)  │  │   APIs     │  │  Jobs   │
   └─────────┘  └──────────┘  └──────────┘  └────────────┘  └─────────┘
```

---

## 2. Clean Architecture Layers

### 2.1 Frontend (`apps/web`)

```
apps/web/src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Login, register, forgot password
│   ├── (dashboard)/              # Authenticated shell
│   │   ├── dashboard/
│   │   ├── islamic/
│   │   ├── fitness/
│   │   ├── health/               # water, food, sleep, walk
│   │   ├── coding/
│   │   ├── reading/
│   │   ├── wellness/
│   │   ├── career/
│   │   ├── goals/
│   │   ├── habits/
│   │   ├── analytics/
│   │   ├── settings/
│   │   └── admin/
│   ├── api/                      # Next.js route handlers (BFF optional)
│   ├── layout.tsx
│   └── globals.css
│
├── features/                     # Feature-based modules
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── stores/
│   │   └── types/
│   ├── dashboard/
│   ├── islamic/
│   ├── fitness/
│   ├── health/
│   ├── coding/
│   ├── reading/
│   ├── books/
│   ├── wellness/
│   ├── recovery/
│   ├── lonely-mode/
│   ├── career/
│   ├── goals/
│   ├── habits/
│   ├── analytics/
│   ├── settings/
│   └── admin/
│
├── components/                   # Shared UI
│   ├── ui/                       # shadcn/ui primitives
│   ├── layout/                   # Sidebar, header, nav
│   ├── charts/                   # Recharts wrappers
│   ├── glass/                    # Glassmorphism components
│   ├── skeletons/
│   └── providers/
│
├── hooks/                        # Global custom hooks
├── lib/                          # Utilities, axios, cn()
├── stores/                       # Global Zustand stores (theme, sidebar)
├── types/                        # Global TypeScript types
└── config/                       # Routes, nav, constants
```

**Layer responsibilities:**

| Layer | Responsibility |
|-------|----------------|
| **Pages (app/)** | Route composition, metadata, SSR/SSG |
| **Features** | Domain UI, feature hooks, feature services |
| **Components** | Reusable, domain-agnostic UI |
| **Stores** | Client UI state (theme, modals, sidebar) |
| **React Query** | Server state, caching, optimistic updates |

### 2.2 Backend (`apps/api`)

```
apps/api/src/
├── config/                       # env, db, cloudinary, cors
├── middleware/
│   ├── auth.middleware.ts
│   ├── validate.middleware.ts
│   ├── rateLimit.middleware.ts
│   └── error.middleware.ts
├── modules/                      # Feature modules (mirrors frontend)
│   ├── auth/
│   │   ├── auth.routes.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.repository.ts
│   │   └── auth.schema.ts        # Zod validation
│   ├── users/
│   ├── dashboard/
│   ├── islamic/
│   ├── fitness/
│   ├── health/
│   ├── coding/
│   ├── reading/
│   ├── books/
│   ├── wellness/
│   ├── recovery/
│   ├── career/
│   ├── goals/
│   ├── habits/
│   ├── analytics/
│   ├── settings/
│   └── admin/
├── models/                       # Mongoose schemas
├── jobs/                         # Cron: reminders, streaks, reports
├── integrations/                 # External API clients
│   ├── alquran.client.ts
│   ├── aladhan.client.ts
│   ├── hadith.client.ts
│   ├── google-books.client.ts
│   ├── open-library.client.ts
│   ├── openweather.client.ts
│   └── github.client.ts
├── utils/
├── types/
├── app.ts
└── server.ts
```

**Layer flow per request:**

```
Route → Middleware → Controller → Service → Repository → Model
                              ↓
                        Integration (external APIs)
```

---

## 3. Shared Package (`packages/shared`)

Centralizes contracts between frontend and backend:

```
packages/shared/src/
├── schemas/          # Zod schemas (shared validation)
├── types/            # TypeScript interfaces
├── constants/        # Enums, prayer names, goal types
└── utils/            # Date helpers, score calculations
```

---

## 4. Core Domain Concepts

### 4.1 Life Score Engine

Aggregated daily score (0–100) computed from weighted module completion:

| Module | Weight |
|--------|--------|
| Islamic (prayer + Quran) | 20% |
| Fitness | 12% |
| Health (water, food, sleep, walk) | 18% |
| Habits | 15% |
| Goals | 10% |
| Mental wellness | 10% |
| Coding / Reading | 10% |
| Recovery (if enabled) | 5% |

Stored in `DailySnapshot` collection for historical analytics.

### 4.2 Unified Activity Log

All trackable events emit an `ActivityEvent`:

```typescript
{
  userId, module, action, metadata, timestamp, scoreImpact
}
```

Powers analytics heatmaps, streaks, and reports.

### 4.3 Streak System

Generic streak calculator used by prayers, habits, reading, recovery, etc.:

- `currentStreak`, `longestStreak`, `lastCompletedDate`
- Grace period configurable per module

---

## 5. Authentication & Security

| Concern | Implementation |
|---------|----------------|
| Auth | JWT access (15m) + refresh (7d) in httpOnly cookies |
| Password | bcrypt (12 rounds) |
| Rate limiting | express-rate-limit per IP + per user |
| Validation | Zod on both client and server |
| CORS | Whitelist frontend origin only |
| Helmet | Security headers |
| File upload | Cloudinary signed uploads, type/size limits |
| Admin | Role-based (`user`, `admin`) middleware |
| Secrets | Environment variables, never committed |

---

## 6. State Management Strategy

| State Type | Tool | Examples |
|------------|------|----------|
| Server data | React Query | Prayers, workouts, books, analytics |
| UI state | Zustand | Sidebar, theme, modals, rest timer |
| Form state | React Hook Form | All input forms |
| URL state | Next.js searchParams | Filters, date ranges |

---

## 7. External API Integration Pattern

```
Integration Client → Cache Layer (Redis/in-memory) → Service → Controller
```

| API | Cache TTL | Notes |
|-----|-----------|-------|
| AlAdhan | 24h per location | Prayer times |
| AlQuran Cloud | 24h | Daily verse |
| Hadith API | 24h | Daily hadith |
| OpenWeather | 30m | Weather widget |
| Google Books | 1h | Search results |
| Open Library | 1h | Fallback search |
| GitHub | 5m | Coding stats (OAuth) |

---

## 8. Real-Time & Notifications

| Feature | Approach |
|---------|----------|
| Prayer reminders | Server cron + web push / email |
| Meal reminders | Scheduled jobs |
| Rest timer | Client-side (Zustand) |
| Streak alerts | Daily cron check |

Phase 1: browser notifications. Phase 2: push service worker.

---

## 9. Performance Strategy

- **Frontend:** Route-level code splitting, React Query staleTime, skeleton loaders, image optimization (next/image)
- **Backend:** MongoDB indexes, lean queries, pagination, aggregation pipelines for analytics
- **Caching:** React Query + optional Redis for external APIs
- **SEO:** Metadata API, sitemap, structured data on marketing pages

---

## 10. Deployment Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Vercel    │────▶│  Express    │────▶│  MongoDB    │
│  (Next.js)  │     │  (Railway/  │     │   Atlas     │
│             │     │   Render)   │     │             │
└─────────────┘     └──────┬──────┘     └─────────────┘
                           │
                    ┌──────▼──────┐
                    │ Cloudinary  │
                    └─────────────┘
```

---

## 11. Module Dependency Graph

```
                    ┌─────────────┐
                    │    Auth     │
                    └──────┬──────┘
                           │
              ┌────────────▼────────────┐
              │   User + Settings       │
              └────────────┬────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐      ┌─────▼─────┐    ┌─────▼─────┐
    │Dashboard│      │  Habits   │    │   Goals   │
    └────┬────┘      └─────┬─────┘    └─────┬─────┘
         │                 │                 │
         └────────┬────────┴────────┬────────┘
                  │                 │
           ┌──────▼──────┐   ┌──────▼──────┐
           │  Analytics  │   │ Life Score  │
           └─────────────┘   └─────────────┘

All 20 modules feed into Analytics + Life Score via ActivityEvent.
```

---

## 12. Error Handling

**Frontend:** Error boundaries per route segment, toast notifications, retry via React Query.

**Backend:** Centralized error middleware returning consistent JSON:

```json
{
  "success": false,
  "error": { "code": "VALIDATION_ERROR", "message": "...", "details": [] }
}
```

---

## 13. Testing Strategy (Future Phases)

| Layer | Tool |
|-------|------|
| Unit | Vitest |
| Integration | Supertest (API) |
| E2E | Playwright |
| Component | Testing Library |

---

## 14. Naming Conventions

| Item | Convention | Example |
|------|------------|---------|
| Files | kebab-case | `prayer-tracker.tsx` |
| Components | PascalCase | `PrayerTracker` |
| Hooks | camelCase + use | `usePrayerStreak` |
| API routes | kebab-case | `/api/v1/islamic/prayers` |
| DB collections | camelCase plural | `prayerLogs` |
| Env vars | SCREAMING_SNAKE | `MONGODB_URI` |
