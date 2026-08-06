import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  passwordHash: string;
  name: string;
  avatar?: string;
  role: "user" | "admin";
  isVerified: boolean;
  refreshToken?: string;
  location?: {
    city?: string;
    country?: string;
    latitude?: number;
    longitude?: number;
    timezone?: string;
  };
  onboardingCompleted: boolean;
  lastActiveAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    avatar: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    isVerified: { type: Boolean, default: false },
    refreshToken: { type: String },
    location: {
      city: String,
      country: String,
      latitude: Number,
      longitude: Number,
      timezone: String,
    },
    onboardingCompleted: { type: Boolean, default: false },
    lastActiveAt: { type: Date },
  },
  { timestamps: true }
);

userSchema.index({ email: 1 });

export const User = mongoose.model<IUser>("User", userSchema);
