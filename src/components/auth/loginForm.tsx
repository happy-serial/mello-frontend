// pages/index.js

"use client";

import { login } from "@/api";
import { TextField } from "@/components/common/textField";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Colors, NewColors } from "../../../public/styles/colors/colors";
import { EventButton } from "../common/button";
import { Spacer } from "../common/spacer";
import styles from "./css/loginForm.module.css";
import { SocialLogin } from "./socialLogin";

interface LoginFormProps {}

export const LoginForm = ({ ...props }: LoginFormProps) => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const joinText = "아직 회원이 아니신가요?";
  const router = useRouter();

  const handleLogin = async () => {
    const response = await login({
      email: emailState,
      password: passwordState,
    });

    if (typeof response === "string") {
      alert(response);
      return;
    }

    if (response.accessToken) {
      Cookies.set("access-token", response.accessToken, { secure: true });
      Cookies.set("refresh-token", response.refreshToken, { secure: true });
      router.push("/");
    }
  };

  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src={"/Image/serial.png"}
            alt="Serial logo"
            width={111}
            height={31}
          />
          <p className={styles.title}>모두를 위한 커리어 플랫폼, 시리얼</p>
        </Link>
      </div>

      {/* <Spacer shape="height" size="40px" /> */}
      <div>
        <p className={styles.inputLabel}>이메일 주소&nbsp;</p>
        <Spacer shape="height" size="8px" />

        {/* <div style={"size"}>

        </div> */}
        <TextField
          type="email"
          borderColor={Colors.userCardBorder}
          // boxShadowColor={Colors.grayTransparent}
          backgroundColor={Colors.userCard}
          placeholder="이메일을 입력해 주세요"
          onChange={(e) => {
            setEmailState(e.target.value);
          }}
        />
      </div>

      <Spacer shape="height" size="20px" />

      <div>
        <p className={styles.inputLabel}>비밀번호&nbsp;</p>
        <Spacer shape="height" size="8px" />
        <TextField
          type="password"
          borderColor={Colors.userCardBorder}
          // boxShadowColor={Colors.grayTransparent}
          backgroundColor={Colors.userCard}
          placeholder="비밀번호를 입력해 주세요"
          onChange={(e) => {
            setPasswordState(e.target.value);
          }}
        />
      </div>

      <Spacer shape="height" size="20px" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <label style={{ marginRight: "auto" }}>
          <input type="checkbox" style={{ marginRight: "8px" }} />
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "-0.02em",
              lineHeight: "22px",
              fontFamily: "Pretendard",
              color: "#F8F8F9",
              textAlign: "left",
            }}
          >
            로그인 정보 저장하기
          </span>
        </label>
        <a
          href="/"
          style={{
            fontSize: "14px",
            letterSpacing: "-0.02em",
            lineHeight: "22px",
            fontFamily: "Pretendard",
            color: "#F8F8F9",
            textAlign: "right",
          }}
        >
          비밀번호 찾기
        </a>
      </div>

      {/* <div className={styles.findPasswordContainer}>
        <LinkButton
          borderColor={NewColors.transparent}
          borderWidth={75}
          borderRadius={0}
          backgroundColor={NewColors.transparent}
          color={NewColors.ghostWhite}
          label="비밀번호 찾기"
          disabled={false}
          href="/"
          width={75}
          height={22}
          padding="0"
          fontSize={14}
          fontWeight={400}
        />
      </div> */}
      <SocialLogin />
      <Spacer shape="height" size="64px" />
      <div className={styles.loginButtonContainer}>
        <EventButton
          borderColor={NewColors.primary}
          borderRadius={16}
          backgroundColor={NewColors.primary}
          color={NewColors.userCard}
          label="로그인 하기"
          disabled={false}
          onClick={handleLogin}
          width={340}
          height={60}
          padding="19px"
          fontSize={18}
          fontWeight={600}
        />
      </div>
      {/* <Spacer shape="height" size="12px" /> */}
      <div className={styles.joinContainer}>
        <p style={{ color: "#f8f9fe", fontWeight: 300 }}>{joinText}&nbsp;</p>
        <a
          href="/join"
          style={{
            width: "48px",
            position: "relative",
            fontSize: "14px",
            textDecoration: "underline",
            letterSpacing: "-0.02em",
            lineHeight: "22px",
            fontWeight: 600,
            fontFamily: "Pretendard",
            color: "#7afb57",
            textAlign: "center",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          회원가입
        </a>
        {/* <LinkButton
          borderColor={NewColors.transparent}
          borderWidth={48}
          borderRadius={0}
          backgroundColor={NewColors.transparent}
          color={NewColors.primary}
          label="회원가입"
          disabled={false}
          href="/"
          width={48}
          height={22}
          padding="0"
          fontSize={14}
          fontWeight={400}
          text-decoration="underline"
        /> */}
      </div>
    </div>
  );
};
