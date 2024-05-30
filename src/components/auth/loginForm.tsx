"use client";

import { login } from "@/api";
import { TextField } from "@/components/common/textField";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Colors, NewColors } from "../../../public/styles/colors/colors";
import { blackOpsOne } from "../../../public/styles/fonts/fonts";
import { EventButton, LinkButton } from "../common/button";
import { Spacer } from "../common/spacer";
import styles from "./css/loginForm.module.css";
import { SocialLogin } from "./socialLogin";

interface LoginFormProps {}

export const LoginForm = ({ ...props }: LoginFormProps) => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const joinText = "Don't have an account?";
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
          borderColor={NewColors.transparent}
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
      <Spacer shape="height" size="8px" />
      <div className={styles.loginButtonContainer}>
        <EventButton
          borderColor={NewColors.primary}
          borderWidth={75}
          borderRadius={16}
          backgroundColor={NewColors.primary}
          color={NewColors.fontWhite}
          label="보내기"
          disabled={false}
          OnClick={handleLogin}
          width={75}
          height={22}
          padding="19px 97px"
          fontSize={14}
          fontWeight={400}
        />
      </div>
      <div className={styles.joinContainer}>
        <p style={{ color: Colors.black, fontWeight: 300 }}>{joinText}&nbsp;</p>
        <LinkButton
          borderColor={NewColors.transparent}
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
