"use client";

import Image from "next/image";

import styles from "./css/header.module.css";
import { blackOpsOne } from "../../../public/styles/fonts/fonts";
import { Colors } from "../../../public/styles/colors/colors";

import { Button } from "../common/button";
import { Profile } from "../common/profile";

import Link from "next/link";

import { RiBellLine, RiQuillPenLine } from "react-icons/ri";
import { UseLoginStatusStore } from "@/state-manage/store/auth.store";
import { useEffect, useState } from "react";
import { checkLogin } from "@/utils/tokenHandler";
import { TextField } from "../common/textField";
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
  const authStore = UseLoginStatusStore({ isLogin, username });

  const [isLoginState, setIsLogin, usernameState, setUsername] = authStore(
    (store) => [
      store.loginStatus,
      store.setLoginStatus,
      store.usernameStatus,
      store.setUsernameStatus,
    ]
  );

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (accessToken && refreshToken) {
      checkLogin(accessToken, refreshToken, setIsLogin, setUsername);
    }
  }, []);

  return (
    <header
      className={[styles.header].join(" ")}
      style={{ borderBottom: "1px solid " + Colors.lightGray }}
    >
      <div className={[styles.headerContents].join(" ")}>
        <div className={styles.logo}>
          <Image
            alt="company logo"
            src="/Image/logo.png"
            width={60}
            height={60}
            style={{ objectFit: "contain" }}
            priority
          />
          <Link
            className={[styles.logoText, blackOpsOne.className].join(" ")}
            href={"/"}
          >
            mello
          </Link>
        </div>
        {isLoginState ? (
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
            <Profile username={usernameState} size="header"></Profile>
          </div>
        ) : (
          <div>
            <Button
              label="JOIN"
              backgroundColor={Colors.transparent}
              color={Colors.black}
              purpose="link"
              href="/join"
            />
            <Button
              label="LOG IN"
              backgroundColor={Colors.transparent}
              color={Colors.black}
              borderColor={Colors.black}
              purpose="link"
              href="/login"
            />
          </div>
        )}
      </div>
    </header>
  );
};
