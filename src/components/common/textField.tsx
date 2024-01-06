"use client";

import styles from "./css/textField.module.css";
import { aldrich } from "../../../public/styles/fonts/fonts";
import { Colors } from "../../../public/styles/colors/colors";
import { CSSProperties, useState } from "react";

import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

interface TextFieldProps {
  color?: Colors;
  borderColor?: Colors;
  backgroundColor?: Colors;
  boxShadowColor?: Colors;
  placeholder?: string;
  type: "text" | "password" | "email";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({
  color,
  borderColor,
  backgroundColor,
  boxShadowColor = Colors.transparent,
  placeholder,
  onChange,
  type,
  ...props
}: TextFieldProps) => {
  const [inputType, setInputType] = useState(type);

  const toggleInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const iconStyle: CSSProperties = {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: color ? color : Colors.gray,
    width: "24px",
    height: "24px",
  };

  return (
    <div className={styles.textFieldContainer}>
      <input
        type={type === "password" ? inputType : type}
        className={[styles.textField, aldrich.className].join(" ")}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        style={{
          backgroundColor,
          border: `1.5px solid ${borderColor}`,
          color: Colors.black,
          boxShadow: `0px 3px 3px 0px ${boxShadowColor}`,
        }}
      />
      {type === "password" && (
        <div className={styles.toggleButton} onClick={toggleInputType}>
          {inputType === "password" ? (
            <GoEye style={iconStyle} />
          ) : (
            <GoEyeClosed style={iconStyle} />
          )}
        </div>
      )}
    </div>
  );
};
