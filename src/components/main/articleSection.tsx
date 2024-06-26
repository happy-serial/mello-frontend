"use client";

import { getPopularArticleList } from "@/api";
import useWindowDimensions from "@/hook/useWindowWidth";
import { blogThumbnailInfo } from "@/model";
import { useEffect, useState } from "react";
import { NewColors } from "../../../public/styles/colors/colors";
import { pretendard } from "../../../public/styles/fonts/fonts";
import { EventButton } from "../common/button";
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
  const [popularArticleListContent, setPopularArticleListContent] = useState<
    blogThumbnailInfo[]
  >([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getPopularArticleList();
      console.log(typeof data);
      if (data !== "failed" && Array.isArray(data)) {
        setPopularArticleListContent(data);
      } else {
        console.error("데이터 형식이 올바르지 않습니다:", data);
      }
    };

    getData();
  }, []);

  const itemWidth = (useWindowDimensions().width / 1920) * 302;

  console.log(useWindowDimensions().width);

  const renderArticles = () => {
    return popularArticleListContent.map((article) => (
      <PopularArticlePreview
        key={article.title}
        width={itemWidth}
        imageUrl={article.thumbnailUrl}
        author={article.authorName}
        createdAt={article.createdAt}
        title={article.title}
        about={article.about}
        tag={article.categoryName[0]}
        blogId={article.blogId}
      />
    ));
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
  const [activeButton, setActiveButton] = useState<string>("전체");

  const handleButtonClick = (buttonLabel: string) => {
    setActiveButton(buttonLabel);
  };

  const renderArticles = () => {
    const elements = [];
    for (let i = 0; i < 8; i++) {
      elements.push(
        <PopularArticlePreview
          key={`article-${i}`}
          width={302}
          imageUrl={
            "https://mello-s3-dev.s3.ap-northeast-1.amazonaws.com/image/38295345-2853-42cd-8924-2cac9085387c"
          }
          author={"김상수"}
          createdAt={"2024-06-03 08:14:46"}
          title={"오늘의 아침메뉴"}
          about={"밤새서 그런건 없다."}
          tag={"카레 먹고 싶다.."}
          blogId={""}
        />
      );
    }
    return elements;
  };

  const buttons = [
    { label: "전체", width: 52 },
    { label: "디자인", width: 65 },
    { label: "기술", width: 52 },
    { label: "스타트업", width: 78 },
    { label: "자유주제", width: 78 },
  ];

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
          boxSizing: "border-box",
          borderBottom: `1px solid rgba(128, 137, 156, 0.2)`,
          height: "50px",
          width: "100vw",
          position: "absolute",
          left: 0,

          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "67%",
            maxWidth: "1280px",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            letterSpacing: "-0.6px",
          }}
        >
          <div style={{ display: "flex" }}>
            {buttons.map((button) => (
              <div
                key={button.label}
                style={{
                  borderBottom:
                    activeButton === button.label
                      ? `2px solid ${NewColors.primary}`
                      : "none",
                }}
              >
                <EventButton
                  key={button.label}
                  onClick={() => handleButtonClick(button.label)}
                  disabled={false}
                  label={button.label}
                  width={button.width}
                  height={49}
                  padding={"14px 12px 16px"}
                  fontSize={16}
                  fontWeight={600}
                  color={
                    activeButton === button.label
                      ? NewColors.fontWhite
                      : NewColors.buttonGray
                  }
                  backgroundColor={NewColors.transparent}
                />
              </div>
            ))}
          </div>
          <select
            style={{
              border: `1px solid ${NewColors.fontWhite}`,
              padding: "1px 14px",
              borderRadius: "8px",
              backgroundColor: NewColors.transparent,
              color: NewColors.fontWhite,
            }}
          >
            <option value={"최신순"}>최신순</option>
            <option value={"추천순"}>추천순</option>
            <option value={"조회순"}>조회순</option>
          </select>
        </div>
      </div>
      <Spacer shape={"height"} size={"70px"} />
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
