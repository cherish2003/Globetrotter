import bcrypt from "bcrypt";
import User from "../models/User.js";
import passport from "passport";

export const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err)
      return res.status(500).json({ message: "Server error", error: err });

    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) return res.status(500).json({ message: "Login failed" });

      return res.json({ message: "Logged in successfully", user });
    });
  })(req, res, next);
};

export const logout = (req, res) => {
  req.logout(() => {
    res.json({ message: "Logged out" });
  });
};

export const getSession = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
};
