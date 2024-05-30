"use client";

import Image from "next/image";
import Link from "next/link";

import { NewColors } from "../../../public/styles/colors/colors";
import styles from "./css/header.module.css";

import { LinkButton } from "../common/button";

import { UseLoginStatusStore } from "@/state-manage/store";
import { checkLogin } from "@/utils/tokenHandler";
import { useEffect, useState } from "react";
import { Spacer } from "../common/spacer";

interface HeaderProps {
  isLogin: boolean;
  username: string;
  accessToken?: string | undefined;
  refreshToken?: string | undefined;
}

export const Header = ({
  isLogin,
  username,
  accessToken,
  refreshToken,
}: HeaderProps) => {
  let tempIsLogin = isLogin;
  let tempUsername = username;

  const [isLoginState, setIsLogin, usernameState, setUsername] =
    UseLoginStatusStore((store) => [
      store.loginStatus,
      store.setLoginStatus,
      store.usernameStatus,
      store.setUsernameStatus,
    ]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (accessToken && refreshToken) {
      checkLogin(accessToken, refreshToken, setIsLogin, setUsername);
      console.log("isLoginState: ", isLoginState);
    }
  }, []);

  useEffect(() => {
    tempIsLogin = isLoginState;
    tempUsername = usernameState;
  }, [isLoginState, usernameState]);

  return (
    <header
      className={[styles.header].join(" ")}
      style={{ borderBottom: `1px solid ${NewColors.weakWhite}` }}
    >
      <div className={[styles.headerContents].join(" ")}>
        <div className={styles.linkSection}>
          <Link
            href={"/"}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "28px",
            }}
          >
            <Image
              alt="company logo"
              src="/Image/logo.svg"
              width={102}
              height={26}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>
          <LinkButton
            href={"/"}
            disabled={false}
            label={"아티클"}
            width={41}
            height={18}
            padding={"0px"}
            fontSize={16}
            fontWeight={700}
            color={NewColors.buttonWhite}
          />
          <Spacer shape="width" size="14px" />
          <LinkButton
            href={"/"}
            disabled={false}
            label={"커뮤니티"}
            width={54}
            height={18}
            padding={"0px"}
            fontSize={16}
            fontWeight={500}
            color={NewColors.buttonGray}
          />
          <Spacer shape="width" size="14px" />
          <LinkButton
            href={"/"}
            disabled={false}
            label={"프로필"}
            width={41}
            height={18}
            padding={"0px"}
            fontSize={16}
            fontWeight={500}
            color={NewColors.buttonGray}
          />
        </div>
        {tempIsLogin ? (
          <div className={styles.userInteractionSection}>
            <Link
              href={"/blog/write_mk1"}
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0px 10px",
              }}
            >
              <Image
                src={"Image/writeBtn.svg"}
                alt="header_icon"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href={"/"}
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0px 10px",
              }}
            >
              <Image
                src={"Image/alarmBtn.svg"}
                alt="header_icon"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href={"/"}
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0px 10px",
              }}
            >
              <Image
                src={"Image/searchBtn.svg"}
                alt="header_icon"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href={"/"}
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "32px",
              }}
            >
              <Image
                src={"Image/defaultProfile.svg"}
                alt="header_icon"
                width={40}
                height={40}
              />
            </Link>
          </div>
        ) : (
          <div
            style={{
              width: "243px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              alt="searchIcon"
              src="/Image/searchIconWhite.svg"
              width={19}
              height={19}
              style={{ marginLeft: "12px" }}
            />
            <LinkButton
              label="로그인"
              backgroundColor={NewColors.transparent}
              color={NewColors.buttonWhite}
              href="/login"
              disabled={false}
              width={41}
              height={19}
              padding={""}
              fontSize={16}
              fontWeight={400}
            />
            <LinkButton
              label="시작하기"
              backgroundColor={NewColors.primary}
              color={NewColors.backgroundBlack}
              href="/join"
              disabled={false}
              borderRadius={100}
              width={102}
              height={49}
              padding={"15px 24px"}
              fontSize={16}
              fontWeight={600}
            />
          </div>
        )}
      </div>
    </header>
  );
};
