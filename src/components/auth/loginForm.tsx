"use client";

import { login } from "@/api";
import { TextField } from "@/components/common/textField";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Colors, NewColors } from "../../../public/styles/colors/colors";
import { EventButton, LinkButton } from "../common/button";
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
      {/* <Link
        className={[blackOpsOne.className, styles.logoText].join(" ")}
        href={"/"}
      >
        mello
      </Link> */}
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
          borderRadius={6}
          backgroundColor={NewColors.primary}
          color={NewColors.userCard}
          label="로그인하기"
          disabled={false}
          onClick={handleLogin}
          // purpose="link"
          width={340}
          height={60}
          padding="24px"
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
