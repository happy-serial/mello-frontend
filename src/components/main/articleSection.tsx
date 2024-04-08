"use client";

import { NewColors } from "../../../public/styles/colors/colors";
import { Spacer } from "../common/spacer";
import { SectionTitle } from "./ArticleSection/SectionTitle";
import { Category } from "./ArticleSection/category";

interface ArticleSectionProps {}

export const ArticleSection = ({}: ArticleSectionProps) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "1168px",
            color: NewColors.fontWhite,
          }}
        >
          <Category />
          <Spacer shape={"width"} size={"20px"} />
          <PopularArticleList />
        </div>
      </div>
    </>
  );
};

function PopularArticleList({}) {
  return (
    <div>
      <SectionTitle
        src="Image/trendingArticleIcon.svg"
        alt={"trendingArticleIcon"}
        title={"오늘의 인기 게시글"}
      />
      {/* 절반이 날라감. */}
      <Spacer shape={"height"} size={"26px"} /> 
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "260px",
            height: "200px",
            backgroundColor: NewColors.gray2,
            borderRadius: "20px",
          }}
        ></div>
        <Spacer shape={"width"} size={"12px"} />
        <div
          style={{
            width: "260px",
            height: "200px",
            backgroundColor: NewColors.gray2,
            borderRadius: "20px",
          }}
        ></div>
        <Spacer shape={"width"} size={"12px"} />
        <div
          style={{
            width: "260px",
            height: "200px",
            backgroundColor: NewColors.gray2,
            borderRadius: "20px",
          }}
        ></div>
      </div>
    </div>
  );
}
