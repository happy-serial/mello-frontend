"use client";

import { SectionTitle } from "./SectionTitle";
import { NewColors } from "../../../../public/styles/colors/colors";
import { Spacer } from "@/components/common/spacer";
import { pretendard } from "../../../../public/styles/fonts/fonts";
import { useState } from "react";

interface CategoryProps {}

export const Category = ({}: CategoryProps) => {
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({
    design: 0,
    skill: 0,
    career: 0,
    etc: 0,
  });

  const categoryImages = [
    "/Image/category/design.jpg",
    "/Image/category/skill.jpg",
    "/Image/category/career.jpg",
    "/Image/category/etc.jpg",
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <SectionTitle
          src="Image/CategoryIcon.svg"
          alt={"Category icon"}
          title={"카테고리"}
        />
        <Spacer shape="height" size="13px" />
        {Object.entries(categoryCounts).map(([title, count], index, array) => (
          <div key={title}>
            <CategoryItem
              title={title}
              count={count}
              image={categoryImages[index]}
            />
            {/* 이것도 Spacer가 절반만 적용이 됨 */}
            {index < array.length - 1 && <Spacer shape="height" size="16px" />}
          </div>
        ))}
      </div>
    </>
  );
};

function CategoryItem({
  title,
  count,
  image,
  ...props
}: {
  title: string;
  count: number;
  image: string;
}) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        width: "300px",
        height: "130px",
        background: `url(${image}) no-repeat center/cover`,
        borderRadius: "20px",
        paddingLeft: "16px",
      }}
    >
      <div
        className={pretendard.className}
        style={{
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
          color: NewColors.fontWhite,
        }}
      >
        <div>{title}</div>
        <div
          style={{
            display: "flex",
            fontWeight: "bold",
            marginLeft: "8px",
            color: NewColors.fontWhite,
            padding: "4px 8px",
            backgroundColor: NewColors.mainBlack,
            borderRadius: "100px",
          }}
        >
          {count}
        </div>
      </div>
    </div>
  );
}
