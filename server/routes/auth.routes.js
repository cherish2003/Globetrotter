import express from "express";
import passport from "passport";
import {
  signup,
  login,
  logout,
  getSession,
} from "../controllers/authController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/session", isAuthenticated, getSession);

export default router;
