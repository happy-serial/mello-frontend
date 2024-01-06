"use client";

import styles from "./css/loginForm.module.css";
import { TextField } from "@/components/common/textField";
import { aldrich } from "../../../public/styles/fonts/fonts";
import { Colors } from "../../../public/styles/colors/colors";
import { blackOpsOne } from "../../../public/styles/fonts/fonts";
import { Button } from "../common/button";

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
      <TextField
        type="text"
        borderColor={Colors.gray}
        boxShadowColor={Colors.grayTransparent}
        placeholder="Email Address"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
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
        <p>{joinText}&nbsp;</p>
        <Button
          size="text"
          backgroundColor={Colors.transparent}
          label="Join"
          purpose="link"
          href="/"
          color={Colors.purple}
        />
      </div>
    </div>
  );
};
