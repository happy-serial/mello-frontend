"use client";

import Image from "next/image";

import styles from "./css/header.module.css";
import { blackOpsOne } from "../../../public/styles/fonts/fonts";
import { Colors } from "../../../public/styles/colors/colors";

import { Button } from "../common/button";
import { Profile } from "../common/profile";
import Cookies from "js-cookie";
import { tokenHeader } from "@/model";

import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { validateToken } from "@/utils/tokenHandler";
import { verifyToken } from "@/api";
import { useState } from "react";

import { RiBellLine, RiQuillPenLine } from "react-icons/ri";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const accessToken = Cookies.get("access-token");
  const refreshToken = Cookies.get("refresh-token");

  // TODO: zustand로 바꾸기
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("non-login");

  // TODO: 함수로 만들어서 뺴기
  // TODO: 바꾸는거 빠르게 하는방법 알아보기(예를 들어 로그인에서 바꿔준다던가.)
  if (accessToken && refreshToken) {
    const decodedToken = jwtDecode(accessToken, {
      header: true,
    }) as unknown as tokenHeader;

    if (validateToken(accessToken)) {
      verifyToken(accessToken, false).then((response) => {
        if (response && decodedToken) {
          if (response.accessToken) {
            Cookies.set("access-token", response.accessToken);
          }
          setIsLogin(true);
          setUsername(decodedToken.Username);
        }
      });
    } else if (validateToken(refreshToken)) {
      verifyToken(refreshToken, true).then((response) => {
        if (response && decodedToken) {
          if (response.accessToken) {
            Cookies.set("access-token", response.accessToken);
          }
          if (response.refreshToken) {
            Cookies.set("refresh-token", response.refreshToken);
          }
          setIsLogin(true);
          setUsername(decodedToken.Username);
        }
      });
    } else {
      setIsLogin(false);
      setUsername("non-login");
    }
  }

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
        {isLogin ? (
          <div className={styles.userInteractionSection}>
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
            <Profile username={username} size="header"></Profile>
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
