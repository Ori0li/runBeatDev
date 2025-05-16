import { create } from "zustand";

type AuthState = {
  accessToken: string | null;
  role: "user" | "trainer" | null;
  setAuth: (token: string, role: "user" | "trainer") => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  role: null,
  setAuth: (token, role) => set({ accessToken: token, role }),
  clearAuth: () => set({ accessToken: null, role: null }),
}));
