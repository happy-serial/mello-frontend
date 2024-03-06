"use client";

import { UseLoginStatusStore } from "@/state-manage/store/auth.store";
import { useEffect } from "react";
import { Content } from "./Content";
import { Introduction } from "./Introduction";

interface ArticleSectionProps {
  isLogin: boolean;
}

export const ArticleSection = ({ isLogin }: ArticleSectionProps) => {
  let tempIsLogin = isLogin;

  const isLoginState = UseLoginStatusStore((store) => store.loginStatus);

  useEffect(() => {
    tempIsLogin = isLoginState;
    console.log("isLoginState: ", isLoginState);
  }, [isLoginState]);

  return (
    <>
      {tempIsLogin ? (
        <>
            <div>지금이니?</div>
        </>
      ) : (
        <>
          <Content />
          <Introduction />
        </>
      )}
    </>
  );
};
