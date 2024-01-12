import Image from "next/image";

import styles from './css/header.module.css';
import { blackOpsOne } from "../../../public/styles/fonts/fonts";
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
        <div className={styles.logo}>
          <Image
            alt="company logo"
            src="/Image/logo.png"
            width={60}
            height={60}
            style={{ objectFit: "contain" }}
            priority
          />
          <div className={[styles.logoText, blackOpsOne.className].join(" ")}>
            mello
          </div>
        </div>
        <div>
          <Button
            label="JOIN"
            backgroundColor={Colors.transparent}
            color={Colors.black}
            purpose="link"
            href="/join"
          />
          <Button
            label="LOG IN"
            backgroundColor={Colors.transparent}
            color={Colors.black}
            borderColor={Colors.black}
            purpose="link"
            href="/login"
          />
        </div>
      </div>
    </header>
  );
};
