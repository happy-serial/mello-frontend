import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface LoginStatusStore {
  loginStatus: boolean;
  usernameStatus: string;
  setLoginStatus: (loginStatus: boolean) => void;
  setUsernameStatus: (usernameStatus: string) => void;
}

export const UseLoginStatusStore = create<LoginStatusStore>()(
  persist(
    (set) => ({
      loginStatus: false,
      usernameStatus: "non-login",
      setLoginStatus: (loginStatus) => set({ loginStatus: loginStatus }),
      setUsernameStatus: (usernameStatus) =>
        set({ usernameStatus: usernameStatus }),
    }),
    {
      name: "loginStatus",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
