export const API_ROUTES = {
  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    REFRESH: "/auth/refresh",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },
  USERS: {
    PROFILE: "/users/profile",
    SETTINGS: "/users/settings",
    AVATAR: "/users/avatar",
  },
  DASHBOARD: "/dashboard",
} as const;

export const APP_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  DASHBOARD: "/dashboard",
  ISLAMIC: "/islamic",
  FITNESS: "/fitness",
  HEALTH: "/health",
  CODING: "/coding",
  READING: "/reading",
  WELLNESS: "/wellness",
  CAREER: "/career",
  GOALS: "/goals",
  HABITS: "/habits",
  ANALYTICS: "/analytics",
  SETTINGS: "/settings",
  ADMIN: "/admin",
  ONBOARDING: "/onboarding",
} as const;
