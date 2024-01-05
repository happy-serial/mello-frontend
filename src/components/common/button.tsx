import styles from "./css/button.module.css";
import { aldrich } from "../../../public/styles/fonts/fonts";
import { Colors } from "../../../public/styles/colors/colors";
import Link from "next/link";

interface ButtonProps {
  backgroundColor?: Colors;
  color?: Colors;
  borderColor?: Colors;
  size?: "large" | "middle" | "small";
  purpose: "event" | "link";
  label: string;
  onClick?: () => void;
  href?: string;
}

export const Button = ({
  backgroundColor,
  color,
  borderColor,
  size = "large",
  purpose,
  label,
  href,
  ...props
}: ButtonProps) => {
  if (purpose === "event") {
    return (
      <button
        type="button"
        className={[
          styles.button,
          styles["button--" + size],
          aldrich.className,
        ].join(" ")}
        style={{ backgroundColor, color, border: `1.5px solid ${borderColor}` }}
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
        className={[
          styles.button,
          styles["button--" + size],
          aldrich.className,
        ].join(" ")}
        style={{ backgroundColor, color, border: `1.5px solid ${borderColor}` }}
        {...props}      >
        {label}
      </Link>
    );
  }
  
    
};
