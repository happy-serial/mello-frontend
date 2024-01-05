import styles from "./css/button.module.css";
import fonts from "../../../public/styles/fonts/fonts.module.css";
import { Colors } from "../../../public/styles/colors/colors";

interface ButtonProps {
  backgroundColor?: Colors;
  color?: Colors;
  borderColor?: Colors;
  size?: "large" | "middle" | "small";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  backgroundColor,
  color,
  borderColor,
  size = "large",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        styles.button,
        styles["button--" + size],
        fonts.nsrBold,
      ].join(" ")}
      style={{ backgroundColor, color, border: `1.5px solid ${borderColor}` }}
      {...props}
    >
      {label}
    </button>
  );
};
