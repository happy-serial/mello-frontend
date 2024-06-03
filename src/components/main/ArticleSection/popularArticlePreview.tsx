"use client";

import { Line } from "@/components/common/line";
import { Spacer } from "@/components/common/spacer";
import { dateParser } from "@/utils/stringModifier";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NewColors } from "../../../../public/styles/colors/colors";
import { pretendard } from "../../../../public/styles/fonts/fonts";

interface PopularArticlePreviewProps {
  width: number;
  imageUrl: string;
  author: string;
  createdAt: string;
  title: string;
  about: string;
  tag: string;
  blogId: string;
}

export const PopularArticlePreview = ({
  width,
  imageUrl,
  author,
  createdAt,
  title,
  about,
  tag,
  blogId,
}: PopularArticlePreviewProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        router.push(`/blog/read?id=${blogId}`);
      }}
      className={pretendard.className}
      style={{
        width: `302px`,
        display: "flex",
        flexDirection: "column",
        margin: "24px 0px",
      }}
    >
      {/* TODO: div -> image 로 바꾸기 */}
      <div
        style={{
          width: "100%",
          height: "200px",
          background: imageUrl ? `url(${imageUrl})` : NewColors.gray2,
          borderRadius: "20px",
          marginTop: isHovered ? "-4px" : "0px",
          marginBottom: isHovered ? "4px" : "0px",
          transition: "margin 0.3s ease ",
        }}
      ></div>
      <Spacer shape={"height"} size={"10px"} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
          color: NewColors.white,
        }}
      >
        <div style={{ fontWeight: 400, color: NewColors.gray9 }}>{author}</div>
        <Spacer shape={"width"} size={"4px"} />
        <Line
          direction={"vertical"}
          color={NewColors.userCardBorder}
          length="12px"
          thickness={1}
        />
        <Spacer shape={"width"} size={"4px"} />
        <div style={{ fontWeight: 400, color: NewColors.gray9 }}>
          {dateParser(createdAt)}
        </div>
      </div>
      <Spacer shape={"height"} size={"3px"} />
      <div
        style={{
          fontWeight: 600,
          color: NewColors.titleWhite,
          fontSize: "18px",
          letterSpacing: "-0.6px",
          lineHeight: "26px",
        }}
      >
        {title}
      </div>
      <Spacer shape={"height"} size={"1px"} />
      <div
        style={{
          fontWeight: 400,
          color: NewColors.gray7,
          fontSize: "16px",
          letterSpacing: "-0.6px",
          lineHeight: "24px",
          whiteSpace: "pre-wrap",
        }}
      >
        {about}
      </div>
      <Spacer shape={"height"} size={"6px"} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontWeight: 500,
            color: NewColors.primary,
            fontSize: "14px",
            lineHeight: "25px",
          }}
        >
          {tag}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "56px",
          }}
        >
          <Image
            src={"Image/favorite.svg"}
            alt="heart"
            height={24}
            width={24}
            style={{
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
              color: NewColors.gray7,
            }}
          />
          <Image
            src={"Image/Vector.svg"}
            alt="share"
            height={10}
            width={20}
            style={{
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
              padding: "2px 7px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
