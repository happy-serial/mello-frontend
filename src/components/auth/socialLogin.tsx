"use client";

import styles from "./css/socialLogin.module.css";
import { Colors } from "../../../public/styles/colors/colors";
import { aldrich } from "../../../public/styles/fonts/fonts";
import { Line } from "../common/line";
import { signIn } from "next-auth/react";

import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";

interface SocialLoginProps {}

export const SocialLogin = ({ ...props }: SocialLoginProps) => {
  const assistText = "Or log in with social media account";

  return (
    <div className={styles.socialLoginContainer}>
      <div className={styles.assistTextContainer}>
        <Line color={Colors.gray} length="60px" thickness={1.5} />
        <div
          className={[styles.assistText, aldrich.className].join(" ")}
          style={{ color: Colors.gray, fontWeight: 400 }}
        >
          {assistText}
        </div>
        <Line color={Colors.gray} length="60px" thickness={1.5} />
      </div>
      <div className={styles.socialLoginButtonList}>
        <button
          className={styles.socialLoginButton}
          onClick={() => signIn("naver")}
          style={{ backgroundColor: Colors.naverGreen }}
        >
          <SiNaver size={24} color={Colors.white} />
        </button>
        <button
          className={styles.socialLoginButton}
          onClick={() => signIn("kakao")}
          style={{ backgroundColor: Colors.kakaoYellow }}
        >
          <RiKakaoTalkFill size={34} color={Colors.kakaoBlack} />
        </button>
        <button
          className={styles.socialLoginButton}
          onClick={() => signIn("google")}
        >
          <Image src={"/resources/google.svg"} alt={"구글 아이콘"} width={30} height={30}/>
        </button>
      </div>
    </div>
  );
};
