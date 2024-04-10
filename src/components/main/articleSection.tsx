"use client";

import Link from "next/link";
import { NewColors } from "../../../public/styles/colors/colors";
import { Spacer } from "../common/spacer";
import { SectionTitle } from "./ArticleSection/SectionTitle";
import { HotUser } from "./ArticleSection/HotUser";
import { Category } from "./ArticleSection/category";
import { PopularArticlePreview } from "./ArticleSection/popularArticlePreview";
import { pretendard } from "../../../public/styles/fonts/fonts";
import { ArticlePreview } from "./ArticleSection/articlePreview";

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
            <Spacer shape={"height"} size={"66px"} />
            <AllArticleList />
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
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault(); // 기본 스크롤 동작 방지
    const container = e.currentTarget;
    const scrollAmount = e.deltaY; // 상하 스크롤 양을 얻음

    container.scrollLeft += scrollAmount; // 가로 스크롤로 변환
  };

  const disablePageScroll = () => {
    document.body.style.overflow = "hidden"; // 페이지 스크롤 방지
  };

  const enablePageScroll = () => {
    document.body.style.overflow = ""; // 페이지 스크롤 가능
  };

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
      onWheel={handleWheel} // 마우스 휠 이벤트에 핸들러 연결
      onMouseEnter={disablePageScroll} // 마우스 진입 시 페이지 스크롤 방지
      onMouseLeave={enablePageScroll}
    >
      <HotUser author="1" />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser author="2" />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser author="3" />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser author="4" />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser author="5" />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser author="6" />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser author="7" />
      <Spacer shape={"width"} size={"9px"} />
      <HotUser author="8" />
    </div>
  );
}

function AllArticleList({}) {
  return (
    <>
      <div
        className={pretendard.className}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <SectionTitle
          src="Image/AllArticleIcon.svg"
          alt={"HotUserIcon"}
          title={"전체 아티클"}
        />
        <Spacer shape={"width"} size={"12px"} />
        <div
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: NewColors.gray2,
            textAlign: "center",
            lineHeight: "1.4",
          }}
        >
          4063
        </div>
      </div>
      <Spacer shape={"height"} size={"24px"} />
      <ArticlePreview />
      <Spacer shape={"height"} size={"16px"} />
      <ArticlePreview />
      <Spacer shape={"height"} size={"16px"} />
      <ArticlePreview />
      <Spacer shape={"height"} size={"16px"} />
      <ArticlePreview />
      <Spacer shape={"height"} size={"16px"} />
    </>
  );
}
