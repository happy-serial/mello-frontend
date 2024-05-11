"use client";

import Image from "next/image";

import { Colors, NewColors } from "../../../public/styles/colors/colors";
import styles from "./css/header.module.css";

import { LinkButton } from "../common/button";
import { Profile } from "../common/profile";

import Link from "next/link";

import { UseLoginStatusStore } from "@/state-manage/store";
import { checkLogin } from "@/utils/tokenHandler";
import { useEffect, useState } from "react";
import { RiBellLine, RiQuillPenLine } from "react-icons/ri";
import { Spacer } from "../common/spacer";
import { TextField } from "../common/textField";

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
            <TextField
              width="500px"
              color={Colors.black}
              borderRadius="30px"
              borderColor={Colors.transparent}
              backgroundColor={Colors.lightGrayTransparent}
              type={"search"}
              placeholder="search..."
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <Spacer shape="width" size="10px" />
            <RiQuillPenLine
              size="30px"
              color={Colors.black}
              style={{ padding: "12px 4px 12px 12px" }}
            ></RiQuillPenLine>
            <RiBellLine
              size="30px"
              color={Colors.black}
              style={{ padding: "12px 20px 12px 12px" }}
            ></RiBellLine>
            <Profile username={tempUsername} size="header"></Profile>
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
