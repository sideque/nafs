export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
  group?: string;
}

export const MAIN_NAV: NavItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { id: "islamic", label: "Islamic Hub", href: "/islamic", icon: "Moon" },
  { id: "fitness", label: "Gym & Fitness", href: "/fitness", icon: "Dumbbell" },
  { id: "water", label: "Water", href: "/health?tab=water", icon: "Droplets", group: "Health" },
  { id: "food", label: "Food", href: "/health?tab=food", icon: "Utensils", group: "Health" },
  { id: "sleep", label: "Sleep", href: "/health?tab=sleep", icon: "MoonStar", group: "Health" },
  { id: "walk", label: "Walking", href: "/health?tab=walk", icon: "Footprints", group: "Health" },
  { id: "coding", label: "Coding", href: "/coding", icon: "Code2", group: "Growth" },
  { id: "reading", label: "Reading", href: "/reading", icon: "BookOpen", group: "Growth" },
  { id: "wellness", label: "Mental Wellness", href: "/wellness", icon: "Brain", group: "Wellness" },
  { id: "career", label: "Career Hub", href: "/career", icon: "Briefcase", group: "Life" },
  { id: "goals", label: "Goals", href: "/goals", icon: "Target", group: "Life" },
  { id: "habits", label: "Habits", href: "/habits", icon: "CheckCircle2", group: "Life" },
  { id: "analytics", label: "Analytics", href: "/analytics", icon: "BarChart3" },
];

export const LIFE_SCORE_WEIGHTS = {
  islamic: 0.2,
  fitness: 0.12,
  health: 0.18,
  habits: 0.15,
  goals: 0.1,
  wellness: 0.1,
  growth: 0.1,
  recovery: 0.05,
} as const;
