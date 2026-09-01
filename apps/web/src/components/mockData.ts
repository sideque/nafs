export interface Habit {
  id: string;
  name: string;
  category: 'Fitness' | 'Spiritual' | 'Coding' | 'Health' | 'Reading' | 'Career';
  completed: boolean;
  streak: number;
}

export interface Goal {
  id: string;
  title: string;
  progress: number;
  deadline: string;
  status: 'In Progress' | 'Near Completion' | 'On Track';
}

export interface RecentActivity {
  id: string;
  title: string;
  time: string;
  category: string;
}

export const MOCK_DASHBOARD_DATA = {
  user: {
    name: "Aboobakkar",
    status: "Online",
  },
  stats: {
    todayProgress: 72,
    habitsCompleted: 6,
    habitsTotal: 8,
    focusTime: "3h 25m",
    currentStreak: 12,
  },
  habits: [
    { id: '1', name: 'Morning workout', category: 'Fitness', completed: true, streak: 12 },
    { id: '2', name: 'Quran reading', category: 'Spiritual', completed: true, streak: 30 },
    { id: '3', name: 'Coding practice', category: 'Coding', completed: true, streak: 8 },
    { id: '4', name: 'Drink enough water', category: 'Health', completed: true, streak: 14 },
    { id: '5', name: 'Read book', category: 'Reading', completed: false, streak: 5 },
    { id: '6', name: 'Job applications', category: 'Career', completed: false, streak: 2 },
  ] as Habit[],
  goals: [
    { id: '1', title: 'Become a MERN Stack Developer', progress: 68, deadline: 'Dec 2026', status: 'On Track' },
    { id: '2', title: 'Build Nafs', progress: 45, deadline: 'Nov 2026', status: 'In Progress' },
    { id: '3', title: 'Improve Coding Skills', progress: 80, deadline: 'Oct 2026', status: 'Near Completion' },
    { id: '4', title: 'Get a Job', progress: 35, deadline: 'Jan 2027', status: 'In Progress' },
    { id: '5', title: 'Improve Fitness', progress: 60, deadline: 'Dec 2026', status: 'On Track' },
  ] as Goal[],
  coding: {
    today: '2h 40m',
    thisWeek: '14h 20m',
    problemsSolved: 24,
    streak: 8,
  },
  fitness: {
    workout: 'Chest & Triceps',
    progress: 65,
    calories: 420,
    duration: '52 min',
  },
  islamic: {
    quranPages: 8,
    prayersCompleted: 4,
    prayersTotal: 5,
    dhikrCompleted: true,
    tahajjudCompleted: false,
    message: 'Keep your heart connected to Allah.',
  },
  career: {
    applications: 12,
    interviews: 3,
    offers: 1,
    weeklyApps: 5,
  },
  reading: {
    book: 'Atomic Habits',
    progress: 64,
    currentPages: 172,
    totalPages: 268,
  },
  recentActivities: [
    { id: '1', title: 'Completed Morning Workout', time: '7:30 AM', category: 'Fitness' },
    { id: '2', title: 'Completed Quran Reading', time: '8:15 AM', category: 'Spiritual' },
    { id: '3', title: 'Solved 3 Coding Problems', time: '11:40 AM', category: 'Coding' },
    { id: '4', title: 'Applied for Web Developer Job', time: '2:15 PM', category: 'Career' },
    { id: '5', title: 'Log 1.5L Water', time: '4:00 PM', category: 'Health' },
  ] as RecentActivity[],
};