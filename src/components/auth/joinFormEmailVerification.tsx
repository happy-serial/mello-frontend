"use client";

import styles from "./css/joinFormEmailVerification.module.css";
import { TextField } from "@/components/common/textField";
import { Colors } from "../../../public/styles/colors/colors";
import { aldrich, blackOpsOne } from "../../../public/styles/fonts/fonts";
import { Button } from "../common/button";
import { SocialLogin } from "./socialLogin";
import { Spacer } from "../common/spacer";
import Link from "next/link";
import { useState } from "react";
import { sendVerificationEmail, verifyEmailCode } from "@/api";
import { VerificationResponse } from "@/model";

interface JoinFormEmailVerificationProps {
  emailState: string;
  setEmailState: (value: string) => void;
  setVerifiedState: (value: boolean) => void;
}

export const JoinFormEmailVerification = ({
  emailState,
  setEmailState,
  setVerifiedState,
  ...props
}: JoinFormEmailVerificationProps) => {
  const [verificationCodeState, setVerificationCodeState] = useState("");
  const [emailSentState, setEmailSentState] = useState(true);

  const handleSendButton = async () => {
    const response = await sendVerificationEmail(emailState);
    if (response === "success") {
      setEmailSentState(false);
    }
  };

  const handleContinueButton = async () => {
    const response: VerificationResponse | string = await verifyEmailCode({
      email: emailState,
      approvalCode: verificationCodeState,
    });

    if (typeof response === "string") {
      alert(`${response}`);
    } else {
      if (response.emailIsValid) {
        setVerifiedState(true);
      } else {
        alert("외앉됌?.");
      }
    }
  };

  return (
    <div
      className={styles.verificationContainer}
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
      <div className={styles.sendVerificationContainer}>
        <div className={aldrich.className} style={{ color: Colors.gray }}>
          Send Code&nbsp;&nbsp;
        </div>
        <Button
          background={Colors.mainGradient}
          label="send"
          size="middle"
          purpose="event"
          color={Colors.white}
          onClick={handleSendButton}
        />
      </div>
      <Spacer shape="height" size="16px" />
      <TextField
        type="text"
        borderColor={Colors.gray}
        boxShadowColor={Colors.grayTransparent}
        placeholder="Verification Code"
        onChange={(e) => {
          setVerificationCodeState(e.target.value);
        }}
      />
      <Spacer shape="height" size="16px" />
      <div className={styles.verificationButtonContainer}>
        <Button
          size="wide"
          backgroundColor={Colors.purple}
          color={Colors.white}
          label="Continue"
          purpose="event"
          onClick={handleContinueButton}
          disabled={emailSentState}
        />
      </div>
      <Spacer shape="height" size="16px" />
      <SocialLogin />
    </div>
  );
};
