"use client";

import styles from "./css/loginForm.module.css";
import { TextField } from "@/components/common/textField";
import { Colors } from "../../../public/styles/colors/colors";
import { blackOpsOne } from "../../../public/styles/fonts/fonts";
import { Button } from "../common/button";
import { SocialLogin } from "./socialLogin";
import { Spacer } from "../common/spacer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "@/api";
import { useState } from "react";
import Cookies from "js-cookie";

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
      Cookies.set("access-token", response.accessToken, {secure: true});
      Cookies.set("refresh-token", response.refreshToken, {secure: true});

      router.push("/");
    }
  };

  return (
    <div
      className={styles.loginFormContainer}
      style={{ backgroundColor: Colors.whiteTransparent }}
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
        <Button
          backgroundColor={Colors.transparent}
          label="Forgot Password?"
          purpose="link"
          href="/"
          color={Colors.purple}
        />
      </div>
      <Spacer shape="height" size="8px" />
      <div className={styles.loginButtonContainer}>
        <Button
          size="wide"
          backgroundColor={Colors.purple}
          color={Colors.white}
          label="Log In"
          purpose="event"
          onClick={handleLogin}
          href="/"
        />
      </div>
      <div className={styles.joinContainer}>
        <p style={{ color: Colors.black, fontWeight: 300 }}>{joinText}&nbsp;</p>
        <Button
          size="text"
          backgroundColor={Colors.transparent}
          label="Join"
          purpose="link"
          href="/join"
          color={Colors.purple}
        />
      </div>
      <SocialLogin />
    </div>
  );
};
