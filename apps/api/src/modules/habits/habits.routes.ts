import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { Habit } from "../../models/habit.model.js";

const router: Router = Router();

router.use(authMiddleware);

router.post("/", async (req, res, next) => {
  try {
    const { name, description, category, frequency } = req.body;

    const habit = await Habit.create({
      userId: req.user!.userId,
      name,
      description,
      category,
      frequency,
    });

    res.status(201).json({
      success: true,
      data: habit,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const habits = await Habit.find({
      userId: req.user!.userId,
      isActive: true,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: habits,
    });
  } catch (error) {
    next(error);
  }
});

export default router;