"use client";

import { sendVerificationEmail, verifyEmailCode } from "@/api";
import { TextField } from "@/components/common/textField";
import { VerificationResponse } from "@/model";
import { SpringValue, animated } from "@react-spring/web";
import Link from "next/link";
import { useState } from "react";
import { Colors, NewColors } from "../../../public/styles/colors/colors";
import { aldrich, blackOpsOne } from "../../../public/styles/fonts/fonts";
import { EventButton } from "../common/button";
import { Loading } from "../common/loading";
import { Spacer } from "../common/spacer";
import styles from "./css/joinFormEmailVerification.module.css";
import { SocialLogin } from "./socialLogin";
import { min } from "lodash-es";

interface JoinFormEmailVerificationProps {
  emailState: string;
  setEmailState: (value: string) => void;
  setVerifiedState: (value: boolean) => void;
  width: SpringValue<string>;
  padding: SpringValue<string>;
}

export const JoinFormEmailVerification = ({
  emailState,
  setEmailState,
  setVerifiedState,
  width,
  padding,
  ...props
}: JoinFormEmailVerificationProps) => {
  const [verificationCodeState, setVerificationCodeState] = useState("");
  const [emailSentState, setEmailSentState] = useState(false);
  const [loadingState, setLoadingState] = useState(false);

  const handleSendButton = async () => {
    setLoadingState(true);
    const response = await sendVerificationEmail(emailState);
    setLoadingState(false);
    if (response === "success") {
      setEmailSentState(true);
      alert("메일이 발송되었습니다.");
    }
  };

  const handleContinueButton = async () => {
    setLoadingState(true);
    const response: VerificationResponse | string = await verifyEmailCode({
      email: emailState,
      approvalCode: verificationCodeState,
    });

    setLoadingState(false);
    if (typeof response === "string") {
      alert(`${response}`);
    } else {
      if (response.emailIsValid) {
        setVerifiedState(true);
        const emailVerifyElement = document.getElementById('emailVerify');
        if (emailVerifyElement) {
          emailVerifyElement.style.display = 'none';
        }
        const joinInfoElement = document.getElementById('joinInfo');
        if (joinInfoElement) {
          joinInfoElement.style.display = '';
        }
      } else {
        alert("외앉됌?.");
      }
    }
  };

  return (
      <div id= 'emailVerify' style={{minWidth: '410px', display: ''}}>
        <div>
          <p style={{
            position: 'relative',
            fontSize: '40px',
            letterSpacing: '-0.02em',
            lineHeight: '140%',
            fontFamily: 'Pretendard',
            color: '#e4e5e7',
            textAlign: 'center'}}>
              이메일을 입력하시면,<br/>
              코드를 발송할게요
          </p>
        </div>

        <div>
          <p className={styles.inputLabel}>이메일 주소&nbsp;</p>
          <Spacer shape="height" size="8px" />
          <div style={{display: 'flex', gap: '8px'}}>
          <TextField
            type="email"
            borderColor={Colors.userCardBorder}
            // boxShadowColor={Colors.grayTransparent}
            backgroundColor={Colors.userCard}
            placeholder="코드를 전송받을 이메일을 입력해주세요."
            onChange={(e) => {
              setEmailState(e.target.value);
            }}
          />
          <EventButton
              borderColor = {NewColors.primary}
              borderWidth={1}
              borderRadius={12}
              backgroundColor={NewColors.primary}
              color={NewColors.backgroundBlack}
              label="코드 전송"
              disabled={false}
              onClick={handleSendButton}
              // purpose="link"
              width={91}
              height={58}
              padding="10px"
              fontSize={13}
              fontWeight={400}
            />
          </div>
        </div>

        <Spacer shape="height" size="24px" />

        <div style={{minWidth: '410px'}}>
          <p className={styles.inputLabel}>코드 인증하기&nbsp;</p>
          <Spacer shape="height" size="8px" />
          <div style={{display: 'flex', gap: '8px'}}>
          <TextField
            type="email"
            borderColor={Colors.userCardBorder}
            // boxShadowColor={Colors.grayTransparent}
            backgroundColor={Colors.userCard}
            placeholder="메일로 전송받은 코드를 입력해주세요."
            onChange={(e) => {
              setVerificationCodeState(e.target.value);
            }}
          />
          </div>
        </div>

        <div className={styles.sendVerificationContainer}></div>

        <Spacer shape="height" size="30px" />

        <div style={{
          width: '410px',
          position: 'relative',
          borderRadius: '16px',
          backgroundColor: '#7afb57',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <EventButton
            borderColor = {NewColors.primary}
            borderWidth={1}
            borderRadius={16}
            backgroundColor={NewColors.primary}
            color={NewColors.backgroundBlack}
            label="다음으로"
            disabled={!emailSentState}
            onClick={handleContinueButton}
            // purpose="link"
            width={410}
            height={60}
            padding="19px"
            fontSize={18}
            fontWeight={600}
          />
        </div>

        <Spacer shape="height" size="20px" />
  
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
        }}>
          <div style={{ width: '37px', height: '8px', backgroundColor: '#95fc79', borderRadius: '1000px'}}/>
          <div style={{ width: '37px', height: '8px', backgroundColor: '#3e424d', borderRadius: '1000px'}}/>
          <div style={{ width: '37px', height: '8px', backgroundColor: '#3e424d', borderRadius: '1000px'}}/>
          <div style={{ width: '37px', height: '8px', backgroundColor: '#3e424d', borderRadius: '1000px'}}/>

        </div>
    
     

        {/* <div className={styles.verificationButtonContainer}>
          <EventButton
            borderColor = {NewColors.primary}
            borderWidth={75}
            borderRadius={16}
            backgroundColor={NewColors.primary}
            color={NewColors.ghostWhite}
            label="계속하기"
            disabled={!emailSentState}
            onClick={handleContinueButton}
            // purpose="link"
            width={75}
            height={22}
            padding="19px 97px"
            fontSize={14}
            fontWeight={400}
          />
          
        </div> */}
      </div>
    
  );
};
