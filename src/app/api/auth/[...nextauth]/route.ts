import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";
import { socialLogin } from "@/api";
import { SocialLoginRequest } from "@/model";

const handler = NextAuth({
  providers: [
    NaverProvider({
      async profile(profile) {
        const requestData: SocialLoginRequest = {
          id: profile.id,
          provider: "NAVER",
          email: profile.email,
          name: profile.name,
        };
        const response = await socialLogin(requestData);
        return {
          id: profile.response.id,
        };
      },
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      async profile(profile) {
        const requestData: SocialLoginRequest = {
          id: profile.id,
          provider: "KAKAO",
          email: profile.kakao_account.email,
          name: profile.kakao_account.nickname,
        };
        const response = await socialLogin(requestData);
        return {
          id: profile.response.id,
        };
      },
      clientId: process.env.KAKAO_CLIENT_ID || " ",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || " ",
    }),
    GoogleProvider({
      async profile(profile) {
        const requestData: SocialLoginRequest = {
          id: profile.sub,
          provider: "GOOGLE",
          email: profile.email,
          name: profile.name,
        };
        const response = await socialLogin(requestData);
        return {
          id: profile.sub,
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID || " ",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || " ",
    }),
  ],
  secret: "DLrZrrwH8v4QgF/3n0Nd28qAW9i3pO5Mlg==",
});

export { handler as GET, handler as POST };
