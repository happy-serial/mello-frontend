"use client";

import useWindowDimensions from "@/hook/useWindowWidth";
import Link from "next/link";
import { NewColors } from "../../../public/styles/colors/colors";
import { pretendard } from "../../../public/styles/fonts/fonts";
import { Spacer } from "../common/spacer";
import { HotUser } from "./ArticleSection/HotUser";
import { SectionTitle } from "./ArticleSection/SectionTitle";
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
            width: "67vw",
            maxWidth: "1280px",
            color: NewColors.fontWhite,
          }}
        >
          <PopularArticleList />
          <Spacer shape={"height"} size={"84px"} />
          <SectionTitle title={"주목받고 있는 유저"} />
          <Spacer shape={"height"} size={"24px"} />
          <HotUserList />
          <Spacer shape={"height"} size={"84px"} />
          <AllArticleList />
        </div>
      </div>
    </>
  );
};

function PopularArticleList({}) {
  const itemWidth = (useWindowDimensions().width / 1920) * 302;
  console.log(useWindowDimensions().width);

  const renderArticles = () => {
    const elements = [];
    for (let i = 0; i < 8; i++) {
      elements.push(
        <PopularArticlePreview key={`article-${i}`} width={itemWidth} />
      );
    }
    return elements;
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SectionTitle title={"오늘의 인기 게시글"} />
        {/* TODO: 링크 수정하기 */}
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(302px, 302px))`,
          gridGap: "24px",
          width: "100%",
          maxWidth: "1280px",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        {renderArticles()}
      </div>
    </div>
  );
}

function HotUserList({}) {
  const renderUsers = () => {
    const elements = [];
    for (let i = 0; i < 6; i++) {
      elements.push(<HotUser key={`author-${i}`} author={`author ${i}`} />);
    }
    return elements;
  };

  return (
    <div
      className="HotUserSection"
      style={{
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        maxWidth: "100%",
        whiteSpace: "nowrap",
      }}
    >
      {renderUsers()}
    </div>
  );
}

function AllArticleList({}) {
  const renderArticles = () => {
    const elements = [];
    for (let i = 0; i < 8; i++) {
      elements.push(<PopularArticlePreview key={`article-${i}`} width={302} />);
    }
    return elements;
  };

  return (
    <>
      <div
        className={pretendard.className}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <SectionTitle title={"모든 아티클"} />
        <Spacer shape={"width"} size={"12px"} />
      </div>
      <Spacer shape={"height"} size={"15px"} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(302px, 302px))`,
          gridGap: "24px",
          width: "100%",
          maxWidth: "1280px",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        {renderArticles()}
      </div>
    </>
  );
}
