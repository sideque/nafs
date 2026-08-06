import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUserSettings extends Document {
  userId: Types.ObjectId;
  theme: "light" | "dark" | "system";
  language: "en" | "ar" | "ml";
  notifications: {
    enabled: boolean;
    prayerReminders: boolean;
    mealReminders: boolean;
    habitReminders: boolean;
    streakAlerts: boolean;
    quietHoursStart?: string;
    quietHoursEnd?: string;
  };
  modules: {
    islamic: boolean;
    fitness: boolean;
    health: boolean;
    coding: boolean;
    reading: boolean;
    wellness: boolean;
    recovery: boolean;
    career: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

const defaultNotifications = {
  enabled: true,
  prayerReminders: true,
  mealReminders: true,
  habitReminders: true,
  streakAlerts: true,
};

const defaultModules = {
  islamic: true,
  fitness: true,
  health: true,
  coding: true,
  reading: true,
  wellness: true,
  recovery: false,
  career: true,
};

const userSettingsSchema = new Schema<IUserSettings>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    theme: { type: String, enum: ["light", "dark", "system"], default: "system" },
    language: { type: String, enum: ["en", "ar", "ml"], default: "en" },
    notifications: { type: Schema.Types.Mixed, default: defaultNotifications },
    modules: { type: Schema.Types.Mixed, default: defaultModules },
  },
  { timestamps: true }
);

export const UserSettings = mongoose.model<IUserSettings>("UserSettings", userSettingsSchema);

export function createDefaultSettings(userId: Types.ObjectId) {
  return UserSettings.create({ userId });
}
