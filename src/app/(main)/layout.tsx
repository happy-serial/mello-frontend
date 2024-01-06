import type { Metadata } from "next";
import { Header } from "../../components/layout/header";
import "./globals.css";


export const metadata: Metadata = {
  title: "mello",
  description: "mello company",
  icons: {
    icon: "/resources/logo.png",
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
        <Header />
        {children}
      </body>
    </html>
  );
}
