import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/User.js";

passport.use(
  new LocalStrategy(

    { usernameField: "username" },
    async (username, password, done) => {
      try {
        console.log("Attempting login:", username);

        const user = await User.findOne({ username });
        if (!user) {
          return done(null, false, {
            message: "User not found. Please sign up.",
          });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          console.log("❌ Incorrect password");
          return done(null, false, { message: "Incorrect password" });
        }

        console.log("✅ Login successful:", username);
        return done(null, user);
      } catch (err) {
        console.error("🚨 Error in Passport Strategy:", err);
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
