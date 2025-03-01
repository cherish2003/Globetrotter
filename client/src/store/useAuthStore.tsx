import { create } from "zustand";
import axios from "axios";

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkSession: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (username, password) => {
    try {
      const { data } = await axios.post<{ user: User }>(
        "http://localhost:5678/api/auth/login",
        { username, password },
        { withCredentials: true }
      );
      set({ user: data.user, isAuthenticated: true });
    } catch (error) {
      console.error("Login failed", error);
      throw new Error(error.response?.data?.message || "Login failed");
    }
  },

  signup: async (username, password) => {
    try {
      const { data } = await axios.post<{ user: User }>(
        "http://localhost:5678/api/auth/signup",
        { username, password },
        { withCredentials: true }
      );
      set({ user: data.user, isAuthenticated: true });
    } catch (error) {
      console.error("Signup failed", error);
      throw new Error(error.response?.data?.message || "Signup failed");
    }
  },

  logout: async () => {
    try {
      await axios.post("/api/auth/logout", {}, { withCredentials: true });
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      console.error("Logout failed", error);
    }
  },

  checkSession: async () => {
    try {
      const { data } = await axios.get<{ user: User }>("/api/auth/session", {
        withCredentials: true,
      });
      set({ user: data.user, isAuthenticated: true });
    } catch {
      set({ user: null, isAuthenticated: false });
    }
  },
}));

export default useAuthStore;
