"use client";

import { join, login } from "@/api";
import { TextField } from "@/components/common/textField";
import { SpringValue } from "@react-spring/web";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Colors, NewColors } from "../../../public/styles/colors/colors";
import { EventButton } from "../common/button";
import { Spacer } from "../common/spacer";
import styles from "./css/joinFormInfoAdd.module.css";

interface JoinFormInfoAddProps {
  emailState: string;
  width: SpringValue<string>;
  padding: SpringValue<string>;
  border: SpringValue<string>;
}

export const JoinFormInfoAdd = ({
  emailState,
  width,
  padding,
  border,
  ...props
}: JoinFormInfoAddProps) => {
  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmPasswordState, setConfirmPasswordState] = useState("");
  const [emailAllowState, setEmailAllowState] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const router = useRouter();

  const handleJoin = async () => {
    setLoadingState(true);
    const response = await join({
      email: emailState,
      password: passwordState,
      memberName: usernameState,
      emailAllow: emailAllowState,
    });

    if (typeof response === "string") {
      await handleLogin();
    } else {
      setLoadingState(false);
      alert(response);
    }
  };

  const handleLogin = async () => {
    const response = await login({
      email: emailState,
      password: passwordState,
    });
    setLoadingState(false);
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
    <div id="joinInfo" style={{ minWidth: "410px", display: "none" }}>
      <div>
        <p className={styles.inputLabel}>닉네임</p>
        <Spacer shape="height" size="8px" />
        <div style={{ display: "flex", gap: "8px" }}>
          <TextField
            type="text"
            borderColor={Colors.userCardBorder}
            // boxShadowColor={Colors.grayTransparent}
            backgroundColor={Colors.userCard}
            placeholder="나를 표현하는 닉네임을 입력해 주세요"
            onChange={(e) => {
              setUsernameState(e.target.value);
            }}
          />
        </div>
      </div>

      <Spacer shape="height" size="12px" />

      <div>
        <p className={styles.inputLabel}>비밀번호</p>
        <Spacer shape="height" size="8px" />
        <div style={{ display: "flex", gap: "8px" }}>
          <TextField
            type="password"
            borderColor={Colors.userCardBorder}
            // boxShadowColor={Colors.grayTransparent}
            backgroundColor={Colors.userCard}
            placeholder="대소문자/숫자/특수문자를 포함한 8글자 이상"
            onChange={(e) => {
              setPasswordState(e.target.value);
            }}
          />
        </div>
      </div>

      <Spacer shape="height" size="12px" />

      <div>
        <p className={styles.inputLabel}>비밀번호 확인</p>
        <Spacer shape="height" size="8px" />
        <div style={{ display: "flex", gap: "8px" }}>
          <TextField
            type="password"
            borderColor={Colors.userCardBorder}
            // boxShadowColor={Colors.grayTransparent}
            backgroundColor={Colors.userCard}
            placeholder="비밀번호를 한번 더 입력해주세요"
            onChange={(e) => {
              setConfirmPasswordState(e.target.value);
            }}
          />
        </div>
      </div>

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
        <span
          style={{
            position: "relative",
            fontSize: "14px",
            letterSpacing: "-0.02em",
            lineHeight: "22px",
            fontFamily: "Pretendard",
            color: "#f8f8f9",
            textAlign: "left",
          }}
        >
          이메일 수신 동의
        </span>
      </div>

      <Spacer shape="height" size="32px" />

      {/* <div className={styles.JoinButtonContainer}> */}
      {/* <Button
          size="wide"
          backgroundColor={Colors.purple}
          color={Colors.white}
          label="Join"
          purpose="event"
          onClick={handleJoin}
          disabled={
            !usernameState ||
            !passwordState ||
            !confirmPasswordState ||
            !emailAllowState
          }
        /> */}

      {/* <EventButton
          borderColor = {NewColors.primary}
          borderWidth={75}
          borderRadius={16}
          backgroundColor={NewColors.primary}
          color={NewColors.ghostWhite}
          label="가입하기"
          disabled={false}
          onClick={handleJoin}
          // purpose="link"
          width={75}
          height={22}
          padding="19px 97px"
          fontSize={14}
          fontWeight={400}
        /> */}

      <div
        style={{
          width: "410px",
          position: "relative",
          borderRadius: "16px",
          backgroundColor: "#7afb57",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <EventButton
          borderColor={NewColors.primary}
          borderWidth={1}
          borderRadius={16}
          backgroundColor={NewColors.primary}
          color={NewColors.backgroundBlack}
          label="다음으로"
          disabled={false}
          onClick={handleJoin}
          // purpose="link"
          width={410}
          height={60}
          padding="19px"
          fontSize={18}
          fontWeight={600}
        />
      </div>

      <Spacer shape="height" size="20px" />

      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "37px",
            height: "8px",
            backgroundColor: "#3e424d",
            borderRadius: "1000px",
          }}
        />
        <div
          style={{
            width: "37px",
            height: "8px",
            backgroundColor: "#95fc79",
            borderRadius: "1000px",
          }}
        />
        <div
          style={{
            width: "37px",
            height: "8px",
            backgroundColor: "#3e424d",
            borderRadius: "1000px",
          }}
        />
        <div
          style={{
            width: "37px",
            height: "8px",
            backgroundColor: "#3e424d",
            borderRadius: "1000px",
          }}
        />
      </div>
    </div>
  );
};
