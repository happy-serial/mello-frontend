import { create } from "zustand";

interface LoginStatusStore {
  loginStatus: boolean;
  usernameStatus: string;
  setLoginStatus: (loginStatus: boolean) => void;
  setUsernameStatus: (usernameStatus: string) => void;
}

export const UseLoginStatusStore = (initialState: {
  isLogin: boolean;
  username: string;
}) => {
  return create<LoginStatusStore>((set) => ({
    loginStatus: initialState.isLogin,
    usernameStatus: initialState.username,
    setLoginStatus: (loginStatus) => set({ loginStatus: loginStatus }),
    setUsernameStatus: (usernameStatus) =>
      set({ usernameStatus: usernameStatus }),
  }));
};
