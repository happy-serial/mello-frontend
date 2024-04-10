"use client";

import styles from "./css/button.module.css";
import { pretendard } from "../../../public/styles/fonts/fonts";
import { Colors, NewColors } from "../../../public/styles/colors/colors";
import Link from "next/link";

interface ButtonProps {
  backgroundColor?: Colors | NewColors;
  background?: Colors | NewColors;
  color?: Colors | NewColors;
  borderColor?: Colors | NewColors;
  size?: "large" | "middle" | "small" | "wide" | "text";
  purpose: "event" | "link";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

export const Button = ({
  backgroundColor,
  background,
  color,
  borderColor,
  size = "large",
  purpose,
  label,
  disabled = false,
  onClick,
  href,
  ...props
}: ButtonProps) => {
  const classNames = disabled
    ? [
        styles.button,
        styles["button--" + size],
        pretendard.className,
        styles.disabled,
      ].join(" ")
    : [styles.button, styles["button--" + size], pretendard.className].join(
        " "
      );

  if (purpose === "event") {
    return (
      <button
        type="button"
        disabled={disabled}
        className={classNames}
        style={{
          backgroundColor: backgroundColor,
          color: color,
          border: `1.5px solid ${borderColor}`,
          background: background ? background : backgroundColor,
        }}
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    );
  } else if (purpose === "link") {
    return (
      <Link
        href={href!}
        type="button"
        className={classNames}
        style={{ backgroundColor, color, border: `1.5px solid ${borderColor}` }}
        {...props}
      >
        {label}
      </Link>
    );
  }
};

