import { verifyToken } from "@/api";
import { tokenHeader } from "@/model";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export type TokenProps = {
  accessToken?: string;
  refreshToken?: string;
};

export const validateToken = (token: string): boolean => {
  const exp = jwtDecode(token).exp!;
  const now = Math.floor(Date.now() / 1000);

  if (exp < now) {
    return false;
  }

  return true;
};

export const checkAllTokenLife = (
  tokens: TokenProps
): {
  isLogin: boolean;
  username: string;
} => {
  if (tokens.accessToken && tokens.refreshToken) {
    const decodedToken = jwtDecode(tokens.accessToken, {
      header: true,
    }) as unknown as tokenHeader;

    if (
      validateToken(tokens.accessToken) ||
      validateToken(tokens.refreshToken)
    ) {
      return {
        isLogin: true,
        username: decodedToken.Username,
      };
    }
  }
  return {
    isLogin: false,
    username: "non-login",
  };
};

export const checkLogin = (
  accessToken: string,
  refreshToken: string,
  setIsLogin: (isLogin: boolean) => void,
  setUsername: (username: string) => void
) => {
  console.log("checkLogin called");
  if (accessToken && refreshToken) {
    const decodedToken = jwtDecode(accessToken, {
      header: true,
    }) as unknown as tokenHeader;

    if (validateToken(accessToken)) {
      verifyToken(accessToken, false).then((response) => {
        if (response && decodedToken) {
          if (response.accessToken) {
            Cookies.set("access-token", response.accessToken);
          }
          setIsLogin(true);
          setUsername(decodedToken.Username);
        }
      });
    } else if (validateToken(refreshToken)) {
      verifyToken(refreshToken, true).then((response) => {
        if (response && decodedToken) {
          if (response.accessToken) {
            Cookies.set("access-token", response.accessToken);
          }
          if (response.refreshToken) {
            Cookies.set("refresh-token", response.refreshToken);
          }
          setIsLogin(true);
          setUsername(decodedToken.Username);
        }
      });
    } else {
      setIsLogin(false);
      setUsername("non-login");
    }
  }
};
