"use client";

import styles from "./css/joinFormEmailVerification.module.css";
import { TextField } from "@/components/common/textField";
import { Colors } from "../../../public/styles/colors/colors";
import { aldrich, blackOpsOne } from "../../../public/styles/fonts/fonts";
import { Button } from "../common/button";
import { SocialLogin } from "./socialLogin";
import { Spacer } from "../common/spacer";

interface JoinFormEmailVerificationProps {}

export const JoinFormEmailVerification = ({
  ...props
}: JoinFormEmailVerificationProps) => {
  return (
    <div
      className={styles.verificationContainer}
      style={{ backgroundColor: Colors.whiteTransparent }}
    >
      <div className={[blackOpsOne.className, styles.logoText].join(" ")}>
        mello
      </div>
      <Spacer shape="height" size="10px" />
      <TextField
        type="email"
        borderColor={Colors.gray}
        boxShadowColor={Colors.grayTransparent}
        placeholder="Email Address"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <div className={styles.sendVerificationContainer}>
        <div className={aldrich.className} style={{ color: Colors.gray }}>
          Send Code&nbsp;&nbsp;
        </div>
        <Button
          background={Colors.mainGradient}
          label="send"
          size="middle"
          purpose="event"
          href="/"
          color={Colors.white}
        />
      </div>
      <Spacer shape="height" size="16px" />
      <TextField
        type="text"
        borderColor={Colors.gray}
        boxShadowColor={Colors.grayTransparent}
        placeholder="Verification Code"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Spacer shape="height" size="16px" />
      <div className={styles.verificationButtonContainer}>
        <Button
          size="wide"
          backgroundColor={Colors.purple}
          color={Colors.white}
          label="Continue"
          purpose="link"
          href="/"
        />
      </div>
      <Spacer shape="height" size="16px" />
      <SocialLogin />
    </div>
  );
};
