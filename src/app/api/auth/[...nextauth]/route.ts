"server action";

import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";
import { socialLogin } from "@/api";
import { SocialLoginRequest } from "@/model";
// import Cookies from "js-cookie";
import { cookies } from "next/headers";

const handler = NextAuth({
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || " ",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || " ",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || " ",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || " ",
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        delete account.accessToken;
        delete account.refreshToken;
      }
      return token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      let requestData;
      const cookieStore = cookies();

      if (account && profile) {
        console.log(JSON.stringify(profile));
        switch (account.provider) {
          case "naver":
            requestData = {
              // @ts-ignore
              id: profile.response.id,
              provider: "NAVER",
              // @ts-ignore
              email: profile.response.email,
              // @ts-ignore
              name: profile.response.name,
            };
            break;
          case "kakao":
            requestData = {
              // @ts-ignore
              id: profile.id,
              provider: "KAKAO",
              // @ts-ignore
              email: profile.kakao_account.email,
              // @ts-ignore
              name: profile.kakao_account.profile.nickname,
            };
            break;
          case "google":
            requestData = {
              id: profile.sub!,
              provider: "GOOGLE",
              email: profile.email!,
              name: profile.name!,
            };
            break;
          default:
        }
        console.log(JSON.stringify(requestData));
        try {
          const response = await socialLogin(requestData!);
          if (response) {
            cookieStore.set("access-token", response.accessToken);
            cookieStore.set("refresh-token", response.refreshToken);
            return true;
          }
        } catch (error) {
          return false;
        }
      }

      return false;
    },
  },
  secret: "DLrZrrwH8v4QgF/3n0Nd28qAW9i3pO5Mlg==",
});

export { handler as GET, handler as POST };
