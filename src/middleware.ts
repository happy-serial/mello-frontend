import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./api";

// TODO: 특정 페이지에 대해서 accessToken이 없으면 로그인 페이지로 리다이렉트. ()

async function getNewAccessToken(accessToken: string) {
  try {
    const result = await verifyToken(accessToken, false);
    return result.accessToken || accessToken;
  } catch {
    throw new Error("Access token invalid");
  }
}

async function getNewTokens(refreshToken: string) {
  try {
    const tokens = await verifyToken(refreshToken, true);
    return tokens;
  } catch {
    throw new Error("Refresh token invalid");
  }
}

function setHeadersAndCookies(
  response: NextResponse,
  newAccessToken: string,
  newRefreshToken?: string
) {
  response.headers.set("Authorization", `Bearer ${newAccessToken}`);
  response.cookies.set("access-token", newAccessToken);
  if (newRefreshToken) {
    response.cookies.set("refresh-token", newRefreshToken);
  }
}

async function handleTokenValidation(req: NextRequest) {
  const accessToken = req.cookies.get("access-token");
  const refreshToken = req.cookies.get("refresh-token");

  if (!accessToken) {
    throw new Error("Access token not found");
  }

  try {
    const newAccessToken = await getNewAccessToken(accessToken.value);
    const response = NextResponse.next();
    if (newAccessToken !== accessToken.value) {
      setHeadersAndCookies(response, newAccessToken);
    }
    return { response, newAccessToken };
  } catch {
    if (!refreshToken) {
      throw new Error("Refresh token not found");
    }
    const tokens = await getNewTokens(refreshToken.value);
    const response = NextResponse.next();
    setHeadersAndCookies(response, tokens.accessToken, tokens.refreshToken);
    return { response, newAccessToken: tokens.accessToken };
  }
}

export default async function addTokenMiddleWare(req: NextRequest) {
  try {
    const { response, newAccessToken } = await handleTokenValidation(req);
    const reqHeader = new Headers(req.headers);
    reqHeader.set("Authorization", `Bearer ${newAccessToken}`);
    return NextResponse.next({
      request: {
        headers: reqHeader,
      },
      ...response,
    });
  } catch (error) {
    console.error("Token validation failed : ", error);
    const response = NextResponse.redirect("/login");
    response.cookies.delete("access-token");
    response.cookies.delete("refresh-token");
    return response;
  }
}

export const config = {
  matcher: ["/api/v1/:path*"],
};
