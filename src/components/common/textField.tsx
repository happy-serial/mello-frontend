import styles from "./css/textField.module.css";
import { aldrich } from "../../../public/styles/fonts/fonts";
import { Colors } from "../../../public/styles/colors/colors";

interface TextFieldProps {
  color?: Colors;
  borderColor?: Colors;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({
  color,
  borderColor,
  placeholder,
  onChange,
  ...props
}: TextFieldProps) => {
  return (
    <div className={styles.textFieldContainer}>
      <input
        type="text"
        className={[styles.textField, aldrich.className].join(" ")}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        style={{ border: `2px solid ${borderColor}` }}
      />
    </div>
  );
};
