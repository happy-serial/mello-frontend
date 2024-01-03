import style from "./css/button.module.css";
import fonts from "../../../public/styles/fonts/fonts.module.css";
import { Colors } from "../../../public/styles/colors/colors";

interface ButtonProps {
  backgroundColor?: Colors;
  color?: Colors;
  borderColor?: Colors;
  size?: "desktop" | "tablet" | "mobile";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  backgroundColor,
  color,
  borderColor,
  size = "desktop",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        style.button,
        style["button--" + size],
        fonts.nsrRegular,
      ].join(" ")}
      style={{ backgroundColor, color, border: `1px solid ${borderColor}` }}
      {...props}
    >
      {label}
    </button>
  );
};
