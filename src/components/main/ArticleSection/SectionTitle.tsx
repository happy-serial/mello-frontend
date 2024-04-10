import React from "react";
import { NewColors } from "../../../../public/styles/colors/colors";
import Image from "next/image";
import { Spacer } from "@/components/common/spacer";
import { pretendard } from "../../../../public/styles/fonts/fonts";

interface SectionTitleProps {
  src: string;
  alt: string;
  title: string;
}

export function SectionTitle({ src, alt, title, ...props }: SectionTitleProps) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "36px",
            height: "36px",
            borderRadius: "100%",
            backgroundColor: NewColors.mainBlack,
          }}
        >
          <Image src={src} alt={alt} width={18} height={15} />
        </div>
        <Spacer shape={"width"} size={"12px"} />
        <div
          className={pretendard.className}
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: NewColors.fontWhite,
          }}
        >
          {title}
        </div>
      </div>
    </>
  );
}
