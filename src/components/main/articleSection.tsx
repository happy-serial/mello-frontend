"use client";

import Link from "next/link";
import { NewColors } from "../../../public/styles/colors/colors";
import { Spacer } from "../common/spacer";
import { SectionTitle } from "./ArticleSection/SectionTitle";
import { HotUser } from "./ArticleSection/HotUser";
import { Category } from "./ArticleSection/category";
import { PopularArticlePreview } from "./ArticleSection/popularArticlePreview";

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
          <div
            style={{
              width: "828px",
            }}
          >
            <PopularArticleList />
            <Spacer shape={"height"} size={"90px"} />
            <SectionTitle
              src="Image/HotUser.svg"
              alt={"HotUserIcon"}
              title={"주목받고 있는 유저"}
            />
            <Spacer shape={"height"} size={"24px"} />
            <HotUserList />
          </div>
        </div>
      </div>
    </>
  );
};

function PopularArticleList({}) {
  const renderArticles = () => {
    const elements = [];
    for (let i = 0; i < 3; i++) {
      elements.push(<PopularArticlePreview key={`article-${i}`} />);
      if (i < 2) {
        elements.push(
          <Spacer key={`spacer-${i}`} shape={"width"} size={"12px"} />
        );
      }
    }
    return elements;
  };

  return (
    <div style={{ width: "828px" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SectionTitle
          src="Image/trendingArticleIcon.svg"
          alt={"trendingArticleIcon"}
          title={"오늘의 인기 게시글"}
        />
        <Link
          href={"/"}
          type="button"
          style={{
            fontWeight: "600",
            fontSize: "16px",
            color: NewColors.gray7,
            textAlign: "center",
          }}
        >
          전체보기
        </Link>
      </div>
      <Spacer shape={"height"} size={"26px"} />
      <div style={{ display: "flex", width: "100%" }}>{renderArticles()}</div>
      <Spacer shape={"height"} size={"24px"} />
      <div style={{ display: "flex", width: "100%" }}>{renderArticles()}</div>
    </div>
  );
}

// TODO: 이 친구는 많이, 아주 많이 바뀔거라 예상됩니다.
function HotUserList({}) {
  return (
    <div
      className="HotUserSection"
      style={{
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        overflowX: "scroll",
        maxWidth: "100%",
        whiteSpace: "nowrap",
      }}
    >
      <HotUser />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser />
    </div>
  );
}
