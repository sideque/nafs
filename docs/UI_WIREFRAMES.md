# Nafs – UI Wireframes & Design System

## 1. Design Philosophy

**Inspiration blend:** Apple (clarity) + Linear (speed) + Raycast (command palette) + Notion (content) + Vercel (polish)

**Core principles:**
- Content-first with generous whitespace
- Glass surfaces over aurora gradients
- Motion that informs, never distracts
- Mobile-first, desktop-enhanced
- WCAG 2.1 AA accessible

---

## 2. Design Tokens

### 2.1 Color Palette

```css
/* Light Mode */
--background:        hsl(0 0% 99%)
--foreground:        hsl(240 10% 4%)
--card:              hsl(0 0% 100% / 0.7)      /* glass */
--primary:           hsl(262 83% 58%)           /* violet */
--primary-foreground:hsl(0 0% 100%)
--secondary:         hsl(240 5% 96%)
--accent:            hsl(172 66% 50%)           /* teal */
--muted:             hsl(240 5% 96%)
--muted-foreground:  hsl(240 4% 46%)
--destructive:       hsl(0 84% 60%)
--success:           hsl(142 76% 36%)
--warning:           hsl(38 92% 50%)
--border:            hsl(240 6% 90% / 0.5)
--ring:              hsl(262 83% 58%)

/* Dark Mode */
--background:        hsl(240 10% 4%)
--foreground:        hsl(0 0% 98%)
--card:              hsl(240 10% 8% / 0.6)
--primary:           hsl(263 70% 65%)
--accent:            hsl(172 66% 50%)
--border:            hsl(240 4% 16% / 0.5)

/* Aurora Gradients */
--aurora-1: radial-gradient(ellipse at 20% 0%, hsl(262 83% 58% / 0.15), transparent 50%)
--aurora-2: radial-gradient(ellipse at 80% 20%, hsl(172 66% 50% / 0.1), transparent 50%)
--aurora-3: radial-gradient(ellipse at 50% 100%, hsl(330 80% 60% / 0.08), transparent 50%)
```

### 2.2 Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| Display | Geist Sans | 36–48px | 600 |
| H1 | Geist Sans | 28–32px | 600 |
| H2 | Geist Sans | 22–24px | 600 |
| H3 | Geist Sans | 18–20px | 500 |
| Body | Geist Sans | 14–16px | 400 |
| Caption | Geist Sans | 12–13px | 400 |
| Mono | Geist Mono | 13–14px | 400 |
| Arabic | Noto Naskh Arabic | 18–24px | 400 |

### 2.3 Spacing Scale

Base unit: 4px — `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`

### 2.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| sm | 6px | Buttons, inputs |
| md | 10px | Cards inner elements |
| lg | 16px | Cards |
| xl | 24px | Modals, hero sections |
| full | 9999px | Pills, avatars |

### 2.5 Shadows & Glass

```css
.glass-card {
  background: var(--card);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 24px hsl(0 0% 0% / 0.06);
}

.dark .glass-card {
  box-shadow: 0 4px 24px hsl(0 0% 0% / 0.3);
}
```

---

## 3. Global Layout

### 3.1 Desktop (≥1024px)

```
┌──────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░ AURORA BACKGROUND ░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ┌────────┐ ┌─────────────────────────────────────────────────┐ │
│ │        │ │  Header: Search ⌘K  |  Life Score  |  Avatar ▼  │ │
│ │        │ ├─────────────────────────────────────────────────┤ │
│ │  Side  │ │                                                 │ │
│ │  bar   │ │              MAIN CONTENT AREA                  │ │
│ │  240px │ │                                                 │ │
│ │        │ │                                                 │ │
│ │  Nav   │ │                                                 │ │
│ │  Items │ │                                                 │ │
│ │        │ │                                                 │ │
│ │        │ │                                                 │ │
│ │ ────── │ │                                                 │ │
│ │ Lonely │ │                                                 │ │
│ │  Mode  │ │                                                 │ │
│ └────────┘ └─────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────┘
```

### 3.2 Mobile (<768px)

```
┌─────────────────────────┐
│ ☰  Nafs    Life Score 🟢│
├─────────────────────────┤
│                         │
│    MAIN CONTENT         │
│    (full width)         │
│                         │
├─────────────────────────┤
│ 🏠  📿  💪  📊  ⚙️     │  ← Bottom tab bar
└─────────────────────────┘
```

### 3.3 Sidebar Navigation

```
┌──────────────────────┐
│  ◉ Nafs              │
│  Master Yourself     │
├──────────────────────┤
│  🏠 Dashboard        │
│  📿 Islamic Hub      │
│  💪 Gym & Fitness    │
│  ── Health ──        │
│  💧 Water            │
│  🍽 Food             │
│  😴 Sleep            │
│  🚶 Walking          │
│  ── Growth ──        │
│  💻 Coding           │
│  📚 Reading          │
│  📖 Book Recs        │
│  ── Wellness ──      │
│  🧠 Mental           │
│  ✨ Self Respect     │
│  🛡 Recovery         │
│  ── Life ──          │
│  💼 Career           │
│  🎯 Goals            │
│  ✅ Habits           │
│  📈 Analytics        │
├──────────────────────┤
│  💙 Lonely Mode      │  ← Prominent CTA
├──────────────────────┤
│  ⚙️ Settings         │
│  👤 Profile          │
└──────────────────────┘
```

---

## 4. Page Wireframes

### 4.1 Dashboard

```
┌─────────────────────────────────────────────────────────────────┐
│  Good morning, Ahmad                    Thursday, Aug 6, 2026   │
│  "The best of you are those who learn the Quran..."             │
├──────────────────────────────┬──────────────────────────────────┤
│                              │                                  │
│   ┌─────────────────────┐    │  ┌──────────┐  ┌──────────┐      │
│   │                     │    │  │ ☀ 32°C   │  │ 📅 Today │      │
│   │    LIFE SCORE       │    │  │  Dubai   │  │ 3 events │      │
│   │       78            │    │  └──────────┘  └──────────┘      │
│   │    ▲ +5 from yesterday   │                                  │
│   │   [radial progress] │    │  ┌──────────────────────────┐    │
│   │                     │    │  │ 📖 Daily Verse            │    │
│   └─────────────────────┘    │  │ Al-Baqarah 286            │    │
│                              │  │ "Allah does not burden..." │    │
│   ┌────┐ ┌────┐ ┌────┐      │  └──────────────────────────┘    │
│   │🔥12│ │✅8/│ │📿5/│      │                                  │
│   │Days│ │12  │ │5   │      │  ┌──────────────────────────┐    │
│   │Strk│ │Goal│ │Pray│      │  │ 📜 Daily Hadith           │    │
│   └────┘ └────┘ └────┘      │  │ "The strong believer..."  │    │
│                              │  └──────────────────────────┘    │
├──────────────────────────────┴──────────────────────────────────┤
│  Today's Goals                                                    │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐│
│  │ ✅ Morning   │ │ ⬜ Gym Push  │ │ ⬜ Read 20pg │ │ ⬜ Code 2hr  ││
│  │   Adhkar     │ │   Day       │ │             │ │             ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘│
├───────────────────────────────────────────────────────────────────┤
│  Weekly Overview                              [Line Chart Area]   │
│  ▁▂▃▅▇█▆ — Life Score trend (7 days)                             │
└───────────────────────────────────────────────────────────────────┘
```

**Components:** `LifeScoreRing`, `StreakCard`, `DailyVerseCard`, `DailyHadithCard`, `WeatherWidget`, `CalendarWidget`, `GoalChecklist`, `WeeklyChart`

---

### 4.2 Islamic Hub

```
┌─────────────────────────────────────────────────────────────────┐
│  Islamic Hub                                    [⚙ Reminders]   │
├─────────────────────────────────────────────────────────────────┤
│  Prayer Tracker — Today                                           │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐          │
│  │  Fajr  │ │ Dhuhr  │ │  Asr   │ │Maghrib │ │  Isha  │          │
│  │  ✅    │ │  ✅    │ │  ⬜    │ │  ⬜    │ │  ⬜    │          │
│  │ 5:12am │ │ 12:30  │ │  3:45  │ │  6:52  │ │  8:15  │          │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘          │
│  🔥 Prayer Streak: 14 days                                        │
├──────────────────────────────┬──────────────────────────────────┤
│  Quran Progress              │  Quick Actions                    │
│  ┌────────────────────────┐  │  ┌──────────┐ ┌──────────┐       │
│  │ Juz: ████░░░░ 4/30     │  │  │ Morning  │ │ Evening  │       │
│  │ Pages today: 3/5       │  │  │ Adhkar   │ │ Adhkar   │       │
│  │ [Continue Reading →]   │  │  └──────────┘ └──────────┘       │
│  └────────────────────────┘  │  ┌──────────┐ ┌──────────┐       │
│                              │  │ Dua      │ │ My Duas  │       │
│  Bookmarks (3)               │  │ Library  │ │          │       │
│  • Al-Kahf 10                │  └──────────┘ └──────────┘       │
│  • Ya-Sin 1                  │                                  │
├──────────────────────────────┴──────────────────────────────────┤
│  Prayer History — Heatmap (last 90 days)                          │
│  ░░▓▓██▓░▓▓███▓▓░░▓▓███...                                      │
└───────────────────────────────────────────────────────────────────┘
```

---

### 4.3 Gym & Fitness

```
┌─────────────────────────────────────────────────────────────────┐
│  Gym & Fitness                    [+ Log Workout] [Rest Timer ⏱]  │
├─────────────────────────────────────────────────────────────────┤
│  This Week's Split                                                │
│  Mon      Tue       Wed      Thu       Fri      Sat      Sun     │
│  [Push]   [Pull]    [Legs]   [Push]    [Pull]   [Rest]   [Rest]  │
│   ●        ○         ○        ○         ○                          │
├──────────────────────────────┬──────────────────────────────────┤
│  Today's Workout: PUSH DAY   │  Personal Records                 │
│  ┌────────────────────────┐  │  Bench Press    80kg × 5          │
│  │ Bench Press            │  │  Squat         100kg × 3          │
│  │ 4 × 8-10  |  90s rest  │  │  Deadlift      120kg × 1         │
│  │ [Log Sets →]           │  │                                   │
│  ├────────────────────────┤  │  Body Measurements                │
│  │ Incline DB Press       │  │  Weight: 75kg  ▼ -0.5kg         │
│  │ 3 × 10-12              │  │  [View Chart →]                   │
│  ├────────────────────────┤  │                                   │
│  │ Tricep Pushdown        │  │  Progress Photos                  │
│  │ 3 × 12-15              │  │  [📷] [📷] [📷] [+ Add]           │
│  └────────────────────────┘  │                                   │
└──────────────────────────────┴──────────────────────────────────┘
```

**Rest Timer Modal:** Full-screen glass overlay, large countdown, vibration on complete.

---

### 4.4 Health Trackers (Water / Food / Sleep / Walk)

Unified health hub with tab navigation:

```
┌─────────────────────────────────────────────────────────────────┐
│  Health Hub                                                       │
│  [💧 Water] [🍽 Food] [😴 Sleep] [🚶 Walk]                       │
├─────────────────────────────────────────────────────────────────┤
│  WATER TAB                                                        │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              💧 1,750 / 2,500 ml                          │    │
│  │           [===========░░░░░░░] 70%                        │    │
│  │     [+250ml]  [+500ml]  [+750ml]  [Custom]                 │    │
│  └─────────────────────────────────────────────────────────┘    │
│  Today's Log: 8:00am +500ml | 10:30am +250ml | ...               │
└─────────────────────────────────────────────────────────────────┘
```

---

### 4.5 Coding Tracker

```
┌─────────────────────────────────────────────────────────────────┐
│  Coding Tracker                    [▶ Start Pomodoro] [+ Log]   │
├──────────────────────────────┬──────────────────────────────────┤
│  Today: 1h 45m / 3h goal     │  GitHub Stats                     │
│  [████████░░░░] 58%          │  @username — 🔥 12 day streak     │
│                              │  847 commits this year            │
│  Active Projects             │  [Connect GitHub →]               │
│  ┌────────────────────────┐  │                                   │
│  │ 🟢 Nafs App   12.5 hrs  │  │  Learning Roadmap                 │
│  │ 🟡 Portfolio   4.2 hrs  │  │  ✅ HTML/CSS                      │
│  │ ⚪ SaaS Idea   0 hrs    │  │  ✅ JavaScript                    │
│  └────────────────────────┘  │  ⬜ TypeScript  ← current         │
│                              │  ⬜ System Design                 │
└──────────────────────────────┴──────────────────────────────────┘
```

---

### 4.6 Reading & Books

```
┌─────────────────────────────────────────────────────────────────┐
│  Reading                          [🔍 Discover Books] [+ Add]     │
├─────────────────────────────────────────────────────────────────┤
│  Currently Reading                                                │
│  ┌──────────────┐  Atomic Habits — James Clear                    │
│  │   [cover]    │  Page 142 / 320  [██████░░░░] 44%              │
│  │              │  🔥 7 day streak  |  [▶ Read Timer]             │
│  └──────────────┘  [Log Pages] [Notes (3)] [Highlights (12)]     │
├──────────────────────────────┬──────────────────────────────────┤
│  Library                     │  Recommendations                    │
│  Reading (2) | Done (15)     │  Categories:                        │
│  Wishlist (8)                │  [Programming] [Islamic] [Self-Imp] │
│  ┌────┐ ┌────┐ ┌────┐       │  [Business] [Malayalam] [English]  │
│  │ 📕 │ │ 📗 │ │ 📘 │       │  ┌────┐ ┌────┐ ┌────┐ ┌────┐       │
│  └────┘ └────┘ └────┘       │  │ 📕 │ │ 📗 │ │ 📘 │ │ 📙 │       │
│                              │  └────┘ └────┘ └────┘ └────┘       │
└──────────────────────────────┴──────────────────────────────────┘
```

---

### 4.7 Mental Wellness

```
┌─────────────────────────────────────────────────────────────────┐
│  Mental Wellness                                                  │
│  [Mood] [Journal] [Gratitude] [Reflection]                        │
├─────────────────────────────────────────────────────────────────┤
│  How are you feeling today?                                       │
│  😔    😕    😐    🙂    😊                                       │
│   1     2     3     4     5                                       │
│                                                                   │
│  Emotions: [Anxious] [Grateful] [Tired] [Motivated] [+ Add]      │
├─────────────────────────────────────────────────────────────────┤
│  Mood Trend (30 days)              [Line chart]                   │
├─────────────────────────────────────────────────────────────────┤
│  Recent Journal Entries                                           │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Aug 5 — Reflection on patience                           │    │
│  │ Today I learned that...                                  │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

---

### 4.8 Addiction Recovery

```
┌─────────────────────────────────────────────────────────────────┐
│  Recovery Hub                                                     │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              🛡 47 DAYS STRONG                             │    │
│  │         Longest: 62 days  |  Started: Jun 20             │    │
│  │              [████████████░░]                             │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                   │
│  [🚨 Emergency Mode]  ← Full-screen supportive overlay          │
│                                                                   │
│  Quick Actions                                                    │
│  [Log Urge] [Log Trigger] [Read Dua] [View Analytics]            │
├─────────────────────────────────────────────────────────────────┤
│  Urge Analytics                    Trigger Patterns               │
│  [Bar chart: urges/week]           [Pie chart: categories]        │
└─────────────────────────────────────────────────────────────────┘
```

**Emergency Mode:** Full-screen aurora background, calming dua, breathing exercise animation, quick links to walk/exercise/Quran/call contact.

---

### 4.9 Lonely Mode

Triggered from sidebar CTA or floating button:

```
┌─────────────────────────────────────────────────────────────────┐
│                         💙                                        │
│              You're not alone, Ahmad.                             │
│         Here are some things that might help:                     │
│                                                                   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐               │
│  │ 📖 Read     │  │ 🚶 Go for   │  │ 💪 Exercise │               │
│  │   Quran     │  │   a Walk    │  │             │               │
│  └─────────────┘  └─────────────┘  └─────────────┘               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐               │
│  │ 📚 Read a   │  │ 🎧 Listen   │  │ ✍️ Journal  │               │
│  │   Book      │  │   to Quran  │  │             │               │
│  └─────────────┘  └─────────────┘  └─────────────┘               │
│  ┌─────────────┐  ┌─────────────┐                                │
│  │ 📞 Call     │  │ ✨ Random   │                                │
│  │   Family    │  │   Activity  │                                │
│  └─────────────┘  └─────────────┘                                │
│                                                                   │
│              [I'm feeling better]                                 │
└─────────────────────────────────────────────────────────────────┘
```

Animation: Cards stagger-fade in with Framer Motion spring physics.

---

### 4.10 Analytics

```
┌─────────────────────────────────────────────────────────────────┐
│  Analytics          [Week ▼] [Month] [Year]                       │
├─────────────────────────────────────────────────────────────────┤
│  Activity Heatmap (GitHub-style)                                  │
│  ░░▓▓██▓░▓▓███▓▓░░▓▓███▓▓░░▓▓██...                               │
├──────────────────────────────┬──────────────────────────────────┤
│  Life Score Trend            │  Module Breakdown                 │
│  [Line chart]                │  [Radar chart]                    │
├──────────────────────────────┼──────────────────────────────────┤
│  Habits Completion           │  Time Distribution                │
│  [Bar chart]                 │  [Pie chart]                      │
├──────────────────────────────┴──────────────────────────────────┤
│  Weekly Report Summary                                            │
│  "You completed 85% of habits, prayed 34/35 times, read 47..."   │
└─────────────────────────────────────────────────────────────────┘
```

---

### 4.11 Goals & Vision Board

```
┌─────────────────────────────────────────────────────────────────┐
│  Goals                    [Daily|Weekly|Monthly|Yearly|Lifetime]│
├──────────────────────────────┬──────────────────────────────────┤
│  Active Goals (8)            │  Vision Board                     │
│  ┌────────────────────────┐  │  ┌────────────────────────────┐  │
│  │ 🎯 Read Quran daily     │  │  │  [img]  [img]  [img]      │  │
│  │ ████████░░ 80%  Daily  │  │  │       [img]               │  │
│  ├────────────────────────┤  │  │  [img]        [img]       │  │
│  │ 🎯 Lose 5kg             │  │  └────────────────────────────┘  │
│  │ ███░░░░░░░ 30%  Monthly│  │  [+ Add Vision]                   │
│  └────────────────────────┘  │                                   │
└──────────────────────────────┴──────────────────────────────────┘
```

---

### 4.12 Habits

```
┌─────────────────────────────────────────────────────────────────┐
│  Habits                              [+ New Habit] [Categories] │
├─────────────────────────────────────────────────────────────────┤
│  Today — Thursday, Aug 6                                          │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ ✅ 🧘 Meditate       🔥 21    │ ✅ 💧 Drink water  🔥 45   │    │
│  │ ⬜ 📖 Read 20 pages   🔥 7     │ ⬜ 🏃 Run 5km       🔥 3    │    │
│  │ ✅ 📿 Morning adhkar  🔥 14   │ ⬜ 📝 Journal        🔥 5    │    │
│  └─────────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────────┤
│  Weekly View                                                      │
│  Habit          Mon Tue Wed Thu Fri Sat Sun                       │
│  Meditate        ✅  ✅  ✅  ✅  ⬜  ⬜  ⬜                        │
│  Read 20 pages   ✅  ✅  ⬜  ✅  ⬜  ⬜  ⬜                        │
└─────────────────────────────────────────────────────────────────┘
```

---

## 5. Shared Components Library

| Component | Description |
|-----------|-------------|
| `GlassCard` | Base glassmorphism container |
| `AuroraBackground` | Animated gradient backdrop |
| `LifeScoreRing` | Animated radial progress (Recharts) |
| `StreakBadge` | Fire icon + count with tooltip |
| `StatCard` | Metric with trend indicator |
| `ModuleHeader` | Title + actions bar |
| `EmptyState` | Illustration + CTA |
| `LoadingSkeleton` | Shimmer placeholders per module |
| `CommandPalette` | ⌘K global search (Raycast-style) |
| `DatePicker` | Calendar popover |
| `HeatmapGrid` | GitHub-style activity grid |
| `ChartCard` | Glass wrapper for Recharts |
| `FloatingActionButton` | Mobile quick-add |
| `BottomSheet` | Mobile modal alternative |
| `ConfirmDialog` | Destructive action guard |
| `Toast` | Sonner notifications |

---

## 6. Animation Spec (Framer Motion)

| Interaction | Animation |
|-------------|-----------|
| Page enter | `opacity: 0→1, y: 8→0` duration 0.3s |
| Card hover | `scale: 1→1.02, shadow increase` |
| Card tap | `scale: 0.98` |
| Streak increment | `scale pulse + confetti particles` |
| Life Score update | `number count-up + ring animate` |
| Sidebar collapse | `width spring 240→64` |
| Lonely Mode cards | `staggerChildren: 0.08s, spring` |
| Rest timer | `scale pulse on last 3 seconds` |
| Prayer check | `checkmark draw + green glow` |
| Loading skeleton | `shimmer gradient slide` |
| Theme toggle | `rotate + fade crossfade` |

---

## 7. Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| xs | <640px | Single column, bottom nav |
| sm | 640px | Single column, larger cards |
| md | 768px | Two columns begin |
| lg | 1024px | Sidebar + content |
| xl | 1280px | Wider content, 3-col grids |
| 2xl | 1536px | Max-width container 1400px |

---

## 8. Accessibility Checklist

- [ ] All interactive elements keyboard navigable
- [ ] Focus rings visible (ring-2 ring-primary)
- [ ] Color contrast ≥ 4.5:1 for text
- [ ] ARIA labels on icon-only buttons
- [ ] Screen reader announcements for score/streak updates
- [ ] Reduced motion media query respected
- [ ] Form errors linked via aria-describedby
- [ ] Skip to main content link

---

## 9. Auth Pages

### Login

```
┌─────────────────────────────────────┐
│         ░ AURORA BG ░               │
│    ┌─────────────────────────┐      │
│    │      ◉ Nafs             │      │
│    │   Master Yourself       │      │
│    │                         │      │
│    │  Email                  │      │
│    │  [________________]     │      │
│    │  Password               │      │
│    │  [________________]     │      │
│    │                         │      │
│    │  [    Sign In    ]      │      │
│    │                         │      │
│    │  Don't have an account? │      │
│    │  Sign up                │      │
│    └─────────────────────────┘      │
└─────────────────────────────────────┘
```

---

## 10. Onboarding Flow (3 steps)

1. **Welcome** — Name, location (for prayer times & weather)
2. **Module Selection** — Toggle which life areas to track
3. **First Goals** — Set 3 starter goals + daily prayer/Quran targets

Each step: full-screen glass card, progress dots, smooth slide transitions.
