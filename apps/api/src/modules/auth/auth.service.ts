import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
import type { AuthPayload } from "../../middleware/auth.middleware.js";

export function signAccessToken(payload: AuthPayload): string {
  return jwt.sign(payload, env.JWT_ACCESS_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRES as jwt.SignOptions["expiresIn"],
  });
}

export function signRefreshToken(payload: AuthPayload): string {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_REFRESH_EXPIRES as jwt.SignOptions["expiresIn"],
  });
}

export function verifyRefreshToken(token: string): AuthPayload {
  return jwt.verify(token, env.JWT_REFRESH_SECRET) as AuthPayload;
}

export function toPublicUser(user: {
  _id: { toString(): string };
  email: string;
  name: string;
  avatar?: string;
  role: "user" | "admin";
  isVerified: boolean;
  location?: Record<string, unknown>;
  onboardingCompleted: boolean;
  createdAt: Date;
}) {
  return {
    id: user._id.toString(),
    email: user.email,
    name: user.name,
    avatar: user.avatar,
    role: user.role,
    isVerified: user.isVerified,
    location: user.location,
    onboardingCompleted: user.onboardingCompleted,
    createdAt: user.createdAt.toISOString(),
  };
}
