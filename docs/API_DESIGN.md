# Nafs – API Design

Base URL: `/api/v1`

All responses follow:

```json
{
  "success": true,
  "data": { },
  "meta": { "page": 1, "limit": 20, "total": 100 }
}
```

Errors:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human readable message",
    "details": [{ "field": "email", "message": "Invalid email" }]
  }
}
```

---

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Create account |
| POST | `/auth/login` | Login, returns tokens in cookies |
| POST | `/auth/refresh` | Refresh access token |
| POST | `/auth/logout` | Clear tokens |
| POST | `/auth/forgot-password` | Send reset email |
| POST | `/auth/reset-password` | Reset with token |
| GET | `/auth/me` | Current user profile |

---

## Users & Settings

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users/profile` | Get profile |
| PATCH | `/users/profile` | Update profile |
| POST | `/users/avatar` | Upload avatar (Cloudinary) |
| GET | `/users/settings` | Get settings |
| PATCH | `/users/settings` | Update settings |
| POST | `/users/export` | Export all user data (JSON) |
| POST | `/users/backup` | Cloud backup |

---

## Dashboard

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/dashboard` | Aggregated dashboard data |
| GET | `/dashboard/life-score` | Current Life Score + breakdown |
| GET | `/dashboard/streaks` | All active streaks |
| GET | `/dashboard/weekly-stats` | 7-day statistics |
| GET | `/dashboard/quote` | Daily motivational quote |
| GET | `/dashboard/weather` | Weather by user location |
| GET | `/dashboard/calendar` | Today's calendar events |

---

## Islamic Hub

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/islamic/prayers/today` | Today's prayer log |
| POST | `/islamic/prayers/log` | Mark prayer complete |
| GET | `/islamic/prayers/history` | Prayer history (paginated) |
| GET | `/islamic/prayers/streak` | Prayer streak data |
| GET | `/islamic/prayers/times` | Prayer times (AlAdhan proxy) |
| GET | `/islamic/quran/progress` | Overall Quran progress |
| POST | `/islamic/quran/log` | Log reading session |
| GET | `/islamic/quran/bookmarks` | List bookmarks |
| POST | `/islamic/quran/bookmarks` | Add bookmark |
| DELETE | `/islamic/quran/bookmarks/:id` | Remove bookmark |
| GET | `/islamic/quran/verse/daily` | Daily verse (AlQuran Cloud) |
| GET | `/islamic/hadith/daily` | Daily hadith |
| GET | `/islamic/adhkar/:type` | Morning/evening adhkar |
| POST | `/islamic/adhkar/log` | Log adhkar completion |
| GET | `/islamic/duas` | Dua library |
| GET | `/islamic/duas/personal` | Personal dua collection |
| POST | `/islamic/duas/personal` | Add personal dua |
| GET | `/islamic/reminders` | List reminders |
| POST | `/islamic/reminders` | Create reminder |
| PATCH | `/islamic/reminders/:id` | Update reminder |

---

## Fitness

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/fitness/plans` | Workout plans |
| POST | `/fitness/plans` | Create plan |
| PATCH | `/fitness/plans/:id` | Update plan |
| GET | `/fitness/exercises` | Exercise database |
| POST | `/fitness/exercises` | Add custom exercise |
| GET | `/fitness/sessions` | Workout history |
| POST | `/fitness/sessions` | Log workout |
| GET | `/fitness/prs` | Personal records |
| GET | `/fitness/measurements` | Body measurements |
| POST | `/fitness/measurements` | Log measurement |
| GET | `/fitness/photos` | Progress photos |
| POST | `/fitness/photos` | Upload photo |

---

## Health

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health/water/today` | Today's water log |
| POST | `/health/water/log` | Add water entry |
| GET | `/health/water/history` | Water history |
| GET | `/health/meals/today` | Today's meals |
| POST | `/health/meals/log` | Log meal |
| GET | `/health/meals/history` | Meal history |
| GET | `/health/sleep/today` | Today's sleep |
| POST | `/health/sleep/log` | Log sleep |
| GET | `/health/sleep/history` | Sleep history |
| GET | `/health/walk/today` | Today's steps |
| POST | `/health/walk/log` | Log walk/steps |
| GET | `/health/walk/history` | Walk history |

---

## Coding

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/coding/sessions` | Coding sessions |
| POST | `/coding/sessions` | Log session |
| GET | `/coding/projects` | Projects list |
| POST | `/coding/projects` | Create project |
| PATCH | `/coding/projects/:id` | Update project |
| GET | `/coding/pomodoro/today` | Today's pomodoro stats |
| POST | `/coding/pomodoro/log` | Log pomodoro cycle |
| GET | `/coding/github` | GitHub connection status |
| POST | `/coding/github/connect` | OAuth connect |
| GET | `/coding/github/stats` | GitHub stats proxy |

---

## Reading & Books

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/reading/books` | User's library |
| POST | `/reading/books` | Add book |
| PATCH | `/reading/books/:id` | Update book progress |
| GET | `/reading/sessions` | Reading sessions |
| POST | `/reading/sessions` | Log reading session |
| GET | `/reading/notes/:bookId` | Book notes |
| POST | `/reading/notes` | Add note |
| GET | `/reading/highlights/:bookId` | Book highlights |
| POST | `/reading/highlights` | Add highlight |
| GET | `/reading/streak` | Reading streak |
| GET | `/books/search` | Search (Google Books + Open Library) |
| GET | `/books/recommendations` | Category-based recommendations |

---

## Wellness

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/wellness/mood/today` | Today's mood |
| POST | `/wellness/mood/log` | Log mood |
| GET | `/wellness/mood/history` | Mood history |
| GET | `/wellness/journal` | Journal entries |
| POST | `/wellness/journal` | Create entry |
| PATCH | `/wellness/journal/:id` | Update entry |
| GET | `/wellness/gratitude/today` | Today's gratitude |
| POST | `/wellness/gratitude/log` | Log gratitude |
| GET | `/wellness/affirmations/today` | Daily affirmation |
| POST | `/wellness/affirmations/complete` | Mark complete |
| GET | `/wellness/challenges` | Confidence challenges |
| POST | `/wellness/challenges/:id/complete` | Complete challenge |
| GET | `/wellness/discipline/today` | Discipline tracker |
| POST | `/wellness/discipline/log` | Log discipline action |

---

## Recovery

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/recovery/profile` | Recovery profile |
| PATCH | `/recovery/profile` | Update profile |
| POST | `/recovery/relapse` | Log relapse (resets streak) |
| GET | `/recovery/urges` | Urge history |
| POST | `/recovery/urges` | Log urge |
| GET | `/recovery/triggers` | Trigger history |
| POST | `/recovery/triggers` | Log trigger |
| GET | `/recovery/analytics` | Recovery analytics |
| GET | `/recovery/emergency` | Emergency mode content (duas, tips) |

---

## Lonely Mode

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/lonely-mode/suggestions` | Personalized suggestions |
| POST | `/lonely-mode/activate` | Log activation (analytics) |
| POST | `/lonely-mode/resolve` | User feeling better |

---

## Career

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/career/applications` | Job applications |
| POST | `/career/applications` | Add application |
| PATCH | `/career/applications/:id` | Update status |
| GET | `/career/interviews` | Interviews |
| POST | `/career/interviews` | Schedule interview |
| GET | `/career/portfolio` | Portfolio items |
| POST | `/career/portfolio` | Add portfolio item |

---

## Goals

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/goals` | List goals (filter by type) |
| POST | `/goals` | Create goal |
| PATCH | `/goals/:id` | Update goal |
| DELETE | `/goals/:id` | Delete goal |
| POST | `/goals/:id/progress` | Update progress |
| GET | `/goals/vision-board` | Vision board items |
| POST | `/goals/vision-board` | Add vision item |
| DELETE | `/goals/vision-board/:id` | Remove vision item |

---

## Habits

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/habits` | List habits |
| POST | `/habits` | Create habit |
| PATCH | `/habits/:id` | Update habit |
| DELETE | `/habits/:id` | Archive habit |
| POST | `/habits/:id/log` | Log completion |
| GET | `/habits/logs` | Habit logs (date range) |
| GET | `/habits/categories` | Categories |
| POST | `/habits/categories` | Create category |
| GET | `/habits/statistics` | Habit analytics |

---

## Analytics

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/analytics/overview` | Full analytics dashboard |
| GET | `/analytics/heatmap` | Activity heatmap data |
| GET | `/analytics/life-score` | Life Score trend |
| GET | `/analytics/modules` | Module breakdown (radar) |
| GET | `/analytics/reports/weekly` | Weekly report |
| GET | `/analytics/reports/monthly` | Monthly report |
| GET | `/analytics/reports/yearly` | Yearly report |

---

## Admin

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/users` | User list (paginated) |
| GET | `/admin/analytics` | Platform analytics |
| GET | `/admin/content` | CMS content list |
| POST | `/admin/content` | Create content |
| PATCH | `/admin/content/:id` | Update content |
| GET | `/admin/api-usage` | External API usage logs |

---

## Query Parameters (Common)

| Param | Type | Description |
|-------|------|-------------|
| `page` | number | Page number (default 1) |
| `limit` | number | Items per page (default 20, max 100) |
| `sort` | string | Sort field |
| `order` | `asc` \| `desc` | Sort direction |
| `from` | ISO date | Date range start |
| `to` | ISO date | Date range end |

---

## Rate Limits

| Tier | Limit |
|------|-------|
| Auth endpoints | 10 req/min |
| Read endpoints | 100 req/min |
| Write endpoints | 30 req/min |
| External API proxies | 20 req/min |
| Admin | 200 req/min |
