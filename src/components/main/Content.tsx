import { Colors } from "../../../public/styles/colors/colors";
import { aldrich } from "../../../public/styles/fonts/fonts";
import { ArticleListItem } from "../blog/list/articleListItem";
import { Spacer } from "../common/spacer";

interface ContentProps {}

export const Content = ({}: ContentProps) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          padding: "32px 0px 16px 0px",
          height: "600px",
          backgroundColor: Colors.veryLightGray,
          boxShadow:
            "inset rgba(60, 70, 85, 0) 0px 0px 20px 0px, inset rgba(60, 70, 85, 0.5) 0px 0px 20px 0px, inset rgba(0, 0, 0, 0) 0px 0px 36px -24px",
        }}
      >
        <div
          className={aldrich.className}
          style={{ fontSize: "20px", color: Colors.black, textAlign: "center" }}
        >
          Trending
        </div>
        <Spacer shape="height" size={"30px"} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Spacer shape="width" size={"16px"} />
          <ArticleListItem shape="box" />
          <ArticleListItem shape="box" />
          <ArticleListItem shape="box" />
          <Spacer shape="width" size={"16px"} />
        </div>
      </div>
      <div
        style={{
          height: "200px",
          backgroundColor: Colors.white,
        }}
      >
        footer친구
      </div>
    </>
  );
};
