"use client";

import { CSSProperties, useState } from "react";
import { NewColors } from "../../../../public/styles/colors/colors";

interface CategoryProps {}

export const Category = ({}: CategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("디자인");

  const categories = ["디자인", "기술", "스타트업", "자유주제"];

  return (
    <>
      <div
        style={{
          fontSize: "18px",
          letterSpacing: "-0.02em",
          lineHeight: "24px",
          color: NewColors.gray8,
          paddingBottom: "16px",
        }}
      >
        카테고리 분류
      </div>
      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        {categories.map((category) => (
          <SingleCategoryItem
            key={category}
            label={category}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>
    </>
  );
};

const SingleCategoryItem = ({
  label,
  isSelected,
  onClick,
}: {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const parentStyle: CSSProperties = {
    borderRadius: "1000px",
    background: isSelected
      ? "linear-gradient(rgba(149, 252, 121, 0.1), rgba(149, 252, 121, 0.1)), #26272b"
      : NewColors.userCard,
    border: isSelected
      ? "1px solid #7afb57"
      : `1px solid ${NewColors.fontWhite}`,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 18px",
    textAlign: "left",
    fontSize: "14px",
    color: isSelected ? "#7afb57" : NewColors.fontWhite,
    cursor: "pointer"
  };

  return (
    <div style={parentStyle} onClick={onClick}>
      <div style={{ letterSpacing: "-0.02px", lineHeight: "20px" }}>
        {label}
      </div>
    </div>
  );
};
