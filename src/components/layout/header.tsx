import Image from "next/image";

import styles from "./css/header.module.css";
import fonts from "../../../public/styles/fonts/fonts.module.css";
import { Colors } from "../../../public/styles/colors/colors";

import { Button } from "../common/button";

interface HeaderProps {
  isLogin?: boolean;
  username?: string;
}

export const Header = ({ isLogin, username }: HeaderProps) => {
  return (
    <header
      className={[styles.header].join(" ")}
      style={{ borderBottom: "1px solid " + Colors.lightGray }}
    >
      <div className={[styles.headerContents].join(" ")}>
        <Image
          alt="company logo"
          src="/resources/logo.png"
          width={50}
          height={50}
          style={{ objectFit: "contain" }}
          priority
        />
        <div>
          <Button
            label="로그인"
            backgroundColor={Colors.transparent}
            color={Colors.pink}
            borderColor={Colors.pink}
          />
          <Button
            label="회원가입"
            backgroundColor={Colors.transparent}
            color={Colors.black}
          />
        </div>
      </div>
    </header>
  );
};
