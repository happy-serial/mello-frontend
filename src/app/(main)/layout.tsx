import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Header } from "../../components/layout/header";

import { checkAllTokenLife } from "@/utils/tokenHandler";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serial",
  description: "serial company",
  icons: {
    icon: "/Image/favicon.svg",
  },
};

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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
