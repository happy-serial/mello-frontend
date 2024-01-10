"use client";

import styles from "./css/button.module.css";
import { aldrich } from "../../../public/styles/fonts/fonts";
import { Colors } from "../../../public/styles/colors/colors";
import Link from "next/link";

interface ButtonProps {
  backgroundColor?: Colors;
  background?: Colors;
  color?: Colors;
  borderColor?: Colors;
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
        aldrich.className,
        styles.disabled,
      ].join(" ")
    : [styles.button, styles["button--" + size], aldrich.className].join(" ");

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
          background: background,
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
