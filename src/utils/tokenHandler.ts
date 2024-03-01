import { serverUrl } from "@/api";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

type TokenProps = {
  accessToken?: string;
  refreshToken?: string;
};

export const validateToken = (token: string): boolean => {
  const exp = jwtDecode(token).exp!;
  const iat = jwtDecode(token).iat!;
  const now = Math.floor(Date.now() / 1000);

  if (iat > now || exp < now) {
    return false;
  }

  return true;
};

export const getToken = (): TokenProps => {
  const accessToken = Cookies.get("access-token");
  const refreshToken = Cookies.get("refresh-token");

  return { accessToken, refreshToken };
};

export const setToken = ({ accessToken, refreshToken }: TokenProps) => {
  if (accessToken) {
    Cookies.set("access-token", accessToken);
  }
  if (refreshToken) {
    Cookies.set("refresh-token", refreshToken);
  }
};
