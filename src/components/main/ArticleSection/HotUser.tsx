"use client";

import { Spacer } from "@/components/common/spacer";
import { useState } from "react";
import { NewColors } from "../../../../public/styles/colors/colors";

export const HotUser = ({ author }: { author: string }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{
          width: "193px",
          height: "243px",
          padding: "34px",
          backgroundColor: isHover ? "#3C3D40" : NewColors.mainBlack,
          alignItems: "center",
          border: `1px solid ${NewColors.userCardBorder}`,
          borderRadius: "16px",
          boxSizing: "border-box",
          transition: "background-color 0.13s ease ",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "100px",
            backgroundColor: NewColors.gray5,
          }}
        ></div>
        <Spacer shape={"height"} size={"6px"} />
        <div
          style={{
            color: NewColors.white,
            fontWeight: 500,
            fontSize: "16px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
          }}
        >
          {author}
        </div>
        <div
          style={{
            color: NewColors.gray5,
            fontWeight: 400,
            fontSize: "14px",
            letterSpacing: "-0.02em",
            lineHeight: "22px",
          }}
        >
          스타트업·UX디자이너
        </div>
        <Spacer shape={"height"} size={"6px"} />
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: NewColors.primary,
            fontSize: "16px",
            lineHeight: "23px",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          }}
        >
          팔로우
        </button>
      </div>
      <Spacer shape={"width"} size={"12px"} />
    </>
  );
};
