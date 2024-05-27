"use client";

// TODO: 로그인 상태로 인한 깜빡임 현상 해결을 위해 Page를 ssr로 하고 이 친구를 csr로 해서 이름이 이상함

import { UseLoginStatusStore } from "@/state-manage/store/auth.store";
import { useEffect } from "react";
import { Spacer } from "../common/spacer";
import { Introduction } from "./Introduction";
import { ArticleSection } from "./articleSection";

interface CombinationProps {
  isLogin: boolean;
}

export const Combination = ({ isLogin }: CombinationProps) => {
  let tempIsLogin = isLogin;

  const isLoginState = UseLoginStatusStore((store) => store.loginStatus);

  useEffect(() => {
    tempIsLogin = isLoginState;
    console.log("isLoginState: ", isLoginState);
  }, [isLoginState]);

  return (
    <>
      {!tempIsLogin ? <Introduction /> : <div></div>}
      <Spacer shape={"height"} size={"64px"} />
      <ArticleSection />
    </>
  );
};
