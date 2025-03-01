import express from "express";
import {
  getClue,
  checkAnswer,
  getUserScore,
  getLeaderboard,
} from "../controllers/gameController.js";

const router = express.Router();

router.get("/clue", getClue);
router.post("/answer", checkAnswer);
router.get("/score/:userId", getUserScore);
router.get("/leaderboard", getLeaderboard);

export default router;
