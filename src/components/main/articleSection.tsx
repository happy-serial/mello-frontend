"use client";

import { NewColors } from "../../../public/styles/colors/colors";

interface ArticleSectionProps {}

export const ArticleSection = ({}: ArticleSectionProps) => {
  return (
    <>
      <div
        style={{ display: "flex", width: "100wh", justifyContent: "center" }}
      >
        <div
          style={{
            display: "flex",
            width: "1168px",
            justifyContent: "center",
            color: NewColors.fontWhite,
          }}
        >
          지금이니?
        </div>
      </div>
    </>
  );
};
