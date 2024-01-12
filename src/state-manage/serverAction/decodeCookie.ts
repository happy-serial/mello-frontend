"use server";

import { tokenHeader } from "@/model";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export async function decodeCookies() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access-token")?.value;

  let isLogin = false;
  let username = "non-login";

  if (accessToken) {
    const decodedToken = jwtDecode(accessToken, {
      header: true,
    }) as unknown as tokenHeader;

    if (decodedToken) {
      isLogin = true;
      username = decodedToken.Username;
    }
  }

  return { isLogin, username };
}
