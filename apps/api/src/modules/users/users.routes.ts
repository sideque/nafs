import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { UserSettings } from "../models/userSettings.model.js";
import { User } from "../models/user.model.js";
import { updateProfileSchema, updateSettingsSchema } from "@nafs/shared";
import { validateBody } from "../middleware/validate.middleware.js";
import { AppError } from "../middleware/error.middleware.js";
import { toPublicUser } from "../modules/auth/auth.service.js";

const router = Router();

router.use(authMiddleware);

router.get("/profile", async (req, res, next) => {
  try {
    const user = await User.findById(req.user!.userId);
    if (!user) throw new AppError(404, "NOT_FOUND", "User not found");
    res.json({ success: true, data: toPublicUser(user) });
  } catch (error) {
    next(error);
  }
});

router.patch("/profile", validateBody(updateProfileSchema), async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.user!.userId, req.body, { new: true });
    if (!user) throw new AppError(404, "NOT_FOUND", "User not found");
    res.json({ success: true, data: toPublicUser(user) });
  } catch (error) {
    next(error);
  }
});

router.get("/settings", async (req, res, next) => {
  try {
    const settings = await UserSettings.findOne({ userId: req.user!.userId });
    if (!settings) throw new AppError(404, "NOT_FOUND", "Settings not found");
    res.json({ success: true, data: settings });
  } catch (error) {
    next(error);
  }
});

router.patch("/settings", validateBody(updateSettingsSchema), async (req, res, next) => {
  try {
    const settings = await UserSettings.findOneAndUpdate(
      { userId: req.user!.userId },
      { $set: req.body },
      { new: true }
    );
    if (!settings) throw new AppError(404, "NOT_FOUND", "Settings not found");
    res.json({ success: true, data: settings });
  } catch (error) {
    next(error);
  }
});

export default router;
