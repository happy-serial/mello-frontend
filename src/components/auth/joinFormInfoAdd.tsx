"use client";

import styles from "./css/joinFormInfoAdd.module.css";
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

interface JoinFormInfoAddProps {
  emailState: string;
}

export const JoinFormInfoAdd = ({
  emailState,
  ...props
}: JoinFormInfoAddProps) => {
  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmPasswordState, setConfirmPasswordState] = useState("");
  const [emailAllowState, setEmailAllowState] = useState(false);

  return (
    <div
      className={styles.userInfoContainer}
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
        type="text"
        borderColor={Colors.gray}
        boxShadowColor={Colors.grayTransparent}
        placeholder="User Name"
        onChange={(e) => {
          setUsernameState(e.target.value);
        }}
      />
      <Spacer shape="height" size="16px" />
      <TextField
        type="password"
        borderColor={Colors.gray}
        boxShadowColor={Colors.grayTransparent}
        placeholder="Password"
        onChange={(e) => {
          setPasswordState(e.target.value);
        }}
      />
      <Spacer shape="height" size="16px" />
      <TextField
        type="password"
        borderColor={Colors.gray}
        boxShadowColor={Colors.grayTransparent}
        placeholder="Confirm Password"
        onChange={(e) => {
          setConfirmPasswordState(e.target.value);
        }}
      />
      <Spacer shape="height" size="16px" />
      {/* TODO: checkbox 를 component로 빼서 관리해야함. */}
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={emailAllowState}
          onChange={(e) => {
            setEmailAllowState(e.target.checked);
          }}
        />
        <span style={{ color: Colors.gray, verticalAlign: "-2px" }}>이메일 수신 동의</span>
      </div>
      <Spacer shape="height" size="16px" />
      <div className={styles.JoinButtonContainer}>
        <Button
          size="wide"
          backgroundColor={Colors.purple}
          color={Colors.white}
          label="Join"
          purpose="event"
          onClick={() => console.log("asdf")}
          disabled={!usernameState || !passwordState || !confirmPasswordState}
        />
      </div>
    </div>
  );
};
