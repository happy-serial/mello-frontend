import type { Metadata } from "next";
import AuthSession from "./authSession";
import "./globals.css";

export const metadata: Metadata = {
  title: "mello",
  description: "mello company",
  icons: {
    icon: "/Image/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}
