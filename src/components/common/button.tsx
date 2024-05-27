"use client";

import Link from "next/link";
import { CSSProperties } from "react";
import { NewColors } from "../../../public/styles/colors/colors";
import { pretendard } from "../../../public/styles/fonts/fonts";
import { BorderProps, ColorProps, FontProps, SizeProps } from "../commonProps";

interface ButtonProps
  extends Partial<BorderProps>,
    Partial<ColorProps>,
    SizeProps,
    FontProps {
  disabled: boolean;
  label: string;
}

interface LinkButtonProps extends ButtonProps {
  href: string;
}

interface EventButtonProps extends ButtonProps {
  onClick: () => void;
}

export const LinkButton = ({
  borderColor = NewColors.transparent,
  borderWidth = 0,
  borderRadius = 0,
  backgroundColor = NewColors.transparent,
  color = NewColors.transparent,
  label,
  disabled,
  href,
  ...props
}: LinkButtonProps) => {
  // TODO: disabled 상태일 때 색상 변경
  const buttonStyle: CSSProperties = {
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius: `${borderRadius}px`,
    backgroundColor: backgroundColor,
    color: color,
    width: props.width,
    height: props.height,
    padding: props.padding,
    fontSize: props.fontSize,
    letterSpacing: "-0.0375em",
    fontWeight: props.fontWeight,
    boxSizing: "border-box",
  };

  return (
    <Link
      href={href!}
      type="button"
      className={pretendard.className}
      style={buttonStyle}
    >
      {label}
    </Link>
  );
};

export const EventButton = ({
  borderColor,
  borderWidth,
  borderRadius,
  backgroundColor,
  color,
  label,
  disabled,
  onClick,
  ...props
}: EventButtonProps) => {
  const buttonStyle: CSSProperties = {
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius: `${borderRadius}px`,
    backgroundColor: backgroundColor,
    color: color,
    width: props.width,
    height: props.height,
    padding: props.padding,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    letterSpacing: "-0.0375em",
    boxSizing: "border-box",
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={pretendard.className}
      style={buttonStyle}
      onClick={onClick}
    >
      {label}
    </button>
  );
};