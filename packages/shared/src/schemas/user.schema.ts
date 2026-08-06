import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  location: z
    .object({
      city: z.string().optional(),
      country: z.string().optional(),
      latitude: z.number().optional(),
      longitude: z.number().optional(),
      timezone: z.string().optional(),
    })
    .optional(),
});

export const updateSettingsSchema = z.object({
  theme: z.enum(["light", "dark", "system"]).optional(),
  language: z.enum(["en", "ar", "ml"]).optional(),
  notifications: z
    .object({
      enabled: z.boolean().optional(),
      prayerReminders: z.boolean().optional(),
      mealReminders: z.boolean().optional(),
      habitReminders: z.boolean().optional(),
      streakAlerts: z.boolean().optional(),
      quietHoursStart: z.string().optional(),
      quietHoursEnd: z.string().optional(),
    })
    .optional(),
  modules: z
    .object({
      islamic: z.boolean().optional(),
      fitness: z.boolean().optional(),
      health: z.boolean().optional(),
      coding: z.boolean().optional(),
      reading: z.boolean().optional(),
      wellness: z.boolean().optional(),
      recovery: z.boolean().optional(),
      career: z.boolean().optional(),
    })
    .optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type UpdateSettingsInput = z.infer<typeof updateSettingsSchema>;
