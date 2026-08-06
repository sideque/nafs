export type UserRole = "user" | "admin";
export type Theme = "light" | "dark" | "system";
export type Language = "en" | "ar" | "ml";

export interface UserLocation {
  city?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  isVerified: boolean;
  location?: UserLocation;
  onboardingCompleted: boolean;
  createdAt: string;
}

export interface NotificationSettings {
  enabled: boolean;
  prayerReminders: boolean;
  mealReminders: boolean;
  habitReminders: boolean;
  streakAlerts: boolean;
  quietHoursStart?: string;
  quietHoursEnd?: string;
}

export interface ModuleSettings {
  islamic: boolean;
  fitness: boolean;
  health: boolean;
  coding: boolean;
  reading: boolean;
  wellness: boolean;
  recovery: boolean;
  career: boolean;
}

export interface UserSettings {
  theme: Theme;
  language: Language;
  notifications: NotificationSettings;
  modules: ModuleSettings;
}

export interface AuthTokens {
  accessToken: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}
