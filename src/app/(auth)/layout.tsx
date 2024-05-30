import type { Metadata } from "next";
import { Header } from "../../components/layout/header";
import { cookies } from "next/headers";

import "./globals.css";
import {
  TokenProps,
  checkAllTokenLife,
  validateToken,
} from "@/utils/tokenHandler";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  let accessToken = cookieStore.get("access-token")?.value;
  let refreshToken = cookieStore.get("refresh-token")?.value;

  const { isLogin, username } = checkAllTokenLife({
    accessToken,
    refreshToken,
  });
  return (
    <html lang="en">
      <body>
        <Header
          isLogin={isLogin}
          username={username}
          accessToken={accessToken}
          refreshToken={refreshToken}
        />
        {children}
      </body>
    </html>
  );
}
