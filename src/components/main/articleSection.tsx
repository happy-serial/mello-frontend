"use client";

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
            width: "75vw",
            justifyContent: "center",
            border: "1px solid black",
          }}
        >
          지금이니?
        </div>
      </div>
    </>
  );
};
