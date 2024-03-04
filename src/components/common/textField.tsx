"use client";

import styles from "./css/textField.module.css";
import { aldrich } from "../../../public/styles/fonts/fonts";
import { Colors } from "../../../public/styles/colors/colors";
import { CSSProperties, useState } from "react";

import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { BsSearch } from "react-icons/bs";

interface TextFieldProps {
  color?: Colors;
  width?: string;
  borderColor?: Colors;
  backgroundColor?: Colors;
  boxShadowColor?: Colors;
  placeholder?: string;
  borderRadius?: string;
  type: "text" | "password" | "email" | "search";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({
  color,
  borderColor,
  width = "100%",
  backgroundColor,
  boxShadowColor = Colors.transparent,
  placeholder,
  borderRadius = "6px",
  onChange,
  type,
  ...props
}: TextFieldProps) => {
  const [inputType, setInputType] = useState(type);

  const toggleInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const EyeIconStyle: CSSProperties = {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: color ? color : Colors.gray,
    width: "24px",
    height: "24px",
    zIndex: 201,
  };

  const SearchIconStyle: CSSProperties = {
    position: "absolute",
    left: "20px",
    color: Colors.black,
    zIndex: 201,
  };

  return (
    <div className={styles.textFieldContainer} style={{ width: width }}>
      {type === "search" ? (
        <BsSearch size="20px" style={SearchIconStyle} />
      ) : null}
      <input
        type={type === "password" ? inputType : type}
        className={[styles.textField, aldrich.className].join(" ")}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        style={{
          paddingLeft: type === "search" ? "50px" : "0px",
          borderRadius,
          backgroundColor,
          border: `1.5px solid ${borderColor}`,
          color: Colors.black,
          boxShadow: `0px 3px 3px 0px ${boxShadowColor}`,
        }}
      />
      {type === "password" && (
        <div className={styles.toggleButton} onClick={toggleInputType}>
          {inputType === "password" ? (
            <GoEye style={EyeIconStyle} />
          ) : (
            <GoEyeClosed style={EyeIconStyle} />
          )}
        </div>
      )}
    </div>
  );
};
