import bcrypt from "bcryptjs";
import { User, IUser } from "../../models/user.model.js";
import { createDefaultSettings } from "../../models/userSettings.model.js";
import { AppError } from "../../middleware/error.middleware.js";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  toPublicUser,
} from "./auth.service.js";
import type { RegisterInput, LoginInput } from "@nafs/shared";

const SALT_ROUNDS = 12;

export async function registerUser(input: RegisterInput) {
  const existing = await User.findOne({ email: input.email.toLowerCase() });
  if (existing) {
    throw new AppError(409, "EMAIL_EXISTS", "An account with this email already exists");
  }

  const passwordHash = await bcrypt.hash(input.password, SALT_ROUNDS);
  const user = await User.create({
    email: input.email.toLowerCase(),
    passwordHash,
    name: input.name,
  });

  await createDefaultSettings(user._id);

  return generateAuthResponse(user);
}

export async function loginUser(input: LoginInput) {
  const user = await User.findOne({ email: input.email.toLowerCase() });
  if (!user) {
    throw new AppError(401, "INVALID_CREDENTIALS", "Invalid email or password");
  }

  const valid = await bcrypt.compare(input.password, user.passwordHash);
  if (!valid) {
    throw new AppError(401, "INVALID_CREDENTIALS", "Invalid email or password");
  }

  user.lastActiveAt = new Date();
  await user.save();

  return generateAuthResponse(user);
}

export async function refreshTokens(refreshToken: string) {
  try {
    const payload = verifyRefreshToken(refreshToken);
    const user = await User.findById(payload.userId);

    if (!user || user.refreshToken !== refreshToken) {
      throw new AppError(401, "INVALID_TOKEN", "Invalid refresh token");
    }

    return generateAuthResponse(user);
  } catch {
    throw new AppError(401, "INVALID_TOKEN", "Invalid or expired refresh token");
  }
}

export async function logoutUser(userId: string) {
  await User.findByIdAndUpdate(userId, { $unset: { refreshToken: 1 } });
}

export async function getUserById(userId: string) {
  const user = await User.findById(userId);
  if (!user) {
    throw new AppError(404, "NOT_FOUND", "User not found");
  }
  return toPublicUser(user);
}

async function generateAuthResponse(user: IUser) {
  const payload = {
    userId: user._id.toString(),
    email: user.email,
    role: user.role,
  };

  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  user.refreshToken = refreshToken;
  await user.save();

  return {
    user: toPublicUser(user),
    accessToken,
    refreshToken,
  };
}
