"use client";

import styles from "./css/loginForm.module.css";
import { TextField } from "@/components/common/textField";
import { Colors } from "../../../public/styles/colors/colors";
import { blackOpsOne } from "../../../public/styles/fonts/fonts";
import { Button } from "../common/button";
import { SocialLogin } from "./socialLogin";
import { Spacer } from "../common/spacer";

interface LoginFormProps {}

export const LoginForm = ({ ...props }: LoginFormProps) => {
  const joinText = "Don't have an account?";

  return (
    <div
      className={styles.loginFormContainer}
      style={{ backgroundColor: Colors.whiteTransparent }}
    >
      <div className={[blackOpsOne.className, styles.logoText].join(" ")}>
        mello
      </div>
      <Spacer shape="height" size="10px" />
      <TextField
        type="text"
        borderColor={Colors.gray}
        boxShadowColor={Colors.grayTransparent}
        placeholder="Email Address"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Spacer shape="height" size="8px" />
      <TextField
        type="password"
        borderColor={Colors.gray}
        boxShadowColor={Colors.grayTransparent}
        placeholder="Password"
        onChange={(e) => {
          console.log(e.target.value);
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
          purpose="link"
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
          href="/"
          color={Colors.purple}
        />
      </div>
      <SocialLogin />
    </div>
  );
};
