import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.use(authMiddleware);

router.get("/", async (_req, res) => {
  res.json({
    success: true,
    data: {
      lifeScore: 0,
      streaks: { overall: 0, prayer: 0, habits: 0, reading: 0 },
      todayGoals: [],
      weeklyStats: [],
      quote: "The journey of a thousand miles begins with a single step.",
      message: "Dashboard module coming in Phase 2",
    },
  });
});

export default router;
