import { useState, useCallback, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, KeyRound } from "lucide-react";
import useAuthStore from "@/store/useAuthStore";
import { AnimatedEmojis } from "@/components/home/EmojiCom";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { login, signup, user } = useAuthStore();

  const handleAuth = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (isSignUp && formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      try {
        if (isSignUp) {
          await signup(formData.username, formData.password);
        } else {
          await login(formData.username, formData.password);
        }
        alert(`Welcome ${user?.username || "Back"}!`);
      } catch (error) {
        alert(error.message || "Authentication failed");
      }
    },
    [formData, isSignUp, login, signup, user]
  );

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-white">
      {useMemo(
        () => (
          <AnimatedEmojis />
        ),
        []
      )}

      <Card className="relative w-full max-w-md bg-white bg-opacity-30 backdrop-blur-lg p-6 shadow-xl rounded-2xl border border-gray-300">
        <CardContent>
          <h2 className="text-2xl font-bold text-center text-gray-900">
            {isSignUp ? "Create an Account" : "Welcome Back!"}
          </h2>
          <p className="text-sm text-center text-gray-600 mb-6">
            {isSignUp
              ? "Join the Globetrotter adventure!"
              : "Log in to continue your journey!"}
          </p>
          <form className="space-y-4" onSubmit={handleAuth}>
            <div className="relative">
              <Users className="absolute left-3 top-3 text-gray-500" />
              <Input
                type="text"
                placeholder="Username"
                className="pl-10"
                required
                value={formData.username}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, username: e.target.value }))
                }
              />
            </div>

            <div className="relative">
              <KeyRound className="absolute left-3 top-3 text-gray-500" />
              <Input
                type="password"
                placeholder="Password"
                className="pl-10"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>

            {isSignUp && (
              <div className="relative">
                <KeyRound className="absolute left-3 top-3 text-gray-500" />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="pl-10"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-customblack text-white text-lg rounded-lg py-3"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-700">
            {isSignUp ? "Already have an account?" : "New here?"}
            <span
              className="text-customblack cursor-pointer font-medium ml-1"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
