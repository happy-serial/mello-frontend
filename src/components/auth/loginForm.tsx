"use client";

import styles from "./css/loginForm.module.css";
import { TextField } from "@/components/common/textField";
import { Colors, NewColors } from "../../../public/styles/colors/colors";
import { blackOpsOne } from "../../../public/styles/fonts/fonts";
import { LinkButton, EventButton } from "../common/button";
import { SocialLogin } from "./socialLogin";
import { Spacer } from "../common/spacer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "@/api";
import { useState } from "react";
import Cookies from "js-cookie";
import { a } from "@react-spring/web";

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
    if (response.accessToken) {
      Cookies.set("access-token", response.accessToken, { secure: true });
      Cookies.set("refresh-token", response.refreshToken, { secure: true });

      router.push("/");
    }
  };

  return (
    <div
      className={styles.loginFormContainer}
      style={{
        backgroundColor: Colors.whiteTransparent40,
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      <Link
        className={[blackOpsOne.className, styles.logoText].join(" ")}
        href={"/"}
      >
        mello
      </Link>
      <Spacer shape="height" size="10px" />
      <TextField
        type="email"
        borderColor={Colors.gray}
        boxShadowColor={Colors.grayTransparent}
        placeholder="Email Address"
        onChange={(e) => {
          setEmailState(e.target.value);
        }}
      />
      <Spacer shape="height" size="8px" />
      <TextField
        type="password"
        borderColor={Colors.gray}
        boxShadowColor={Colors.grayTransparent}
        placeholder="Password"
        onChange={(e) => {
          setPasswordState(e.target.value);
        }}
      />
      <div className={styles.findPasswordContainer}>
        <LinkButton
          borderColor = {NewColors.transparent}
          borderWidth={75}
          borderRadius={0}
          backgroundColor={NewColors.transparent}
          color={NewColors.ghostWhite}
          label="비밀번호 찾기"
          disabled={false}
          // purpose="link"
          href="/"
          width={75}
          height={22}
          padding="0"
          fontSize={14}
          fontWeight={400}
        />
      </div>
      <Spacer shape="height" size="8px" />
      <div className={styles.loginButtonContainer}>
        {/* <EventButton
          size="wide"
          backgroundColor={Colors.purple}
          color={Colors.white}
          label="Log In"
          purpose="event"
          onClick={handleLogin}
          href="/"
        /> */}
        <EventButton
          borderColor = {NewColors.primary}
          borderWidth={75}
          borderRadius={16}
          backgroundColor={NewColors.primary}
          color={NewColors.ghostWhite}
          label="로그인하기"
          disabled={false}
          onClick={handleLogin}
          // purpose="link"
          width={75}
          height={22}
          padding="19px 97px"
          fontSize={14}
          fontWeight={400}
        />
      </div>
      <div className={styles.joinContainer}>
        <p style={{ color: Colors.black, fontWeight: 300 }}>{joinText}&nbsp;</p>
        {/* <LinkButton
          size="text"
          backgroundColor={Colors.transparent}
          label="Join"
          purpose="link"
          href="/join"
          color={Colors.purple}
        /> */}
        <LinkButton
          borderColor = {NewColors.transparent}
          borderWidth={75}
          borderRadius={0}
          backgroundColor={NewColors.transparent}
          color={NewColors.primary}
          label="회원가입"
          disabled={false}
          // purpose="link"
          href="/"
          width={75}
          height={22}
          padding="0"
          fontSize={14}
          fontWeight={400}
        />
      </div>
      <SocialLogin />
    </div>
  );
};
