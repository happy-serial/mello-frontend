import { thumbnailResponse } from "@/model/blog.model";
import { Colors } from "../../../public/styles/colors/colors";
import { aldrich } from "../../../public/styles/fonts/fonts";
import { ArticleListItem } from "../blog/list/articleListItem";
import { Spacer } from "../common/spacer";

interface ContentProps {}

export const Content = ({}: ContentProps) => {
  const defaultProfileImage =
    "data:image/jpeg;base64,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";

  const defaultImage =
    "https://images.christiantoday.co.kr/data/images/full/291701/image.png";

  const articleList: thumbnailResponse[] = [
    {
      blogId: "1",
      title: "title1",
      about: "about1",
      membershipId: "1",
      authorName: "author1",
      viewCount: 1,
      like: 1,
      thumbnailUrl: defaultImage,
      accessStatus: "public",
      commentCount: 1,
      categoryName: ["category1"],
      authorPhotoUrl: defaultProfileImage,
      createdAt: "2021-08-01",
      updatedAt: "2021-08-01",
    },
    {
      blogId: "1",
      title: "title1",
      about: "about1",
      membershipId: "1",
      authorName: "author1",
      viewCount: 1,
      like: 1,
      thumbnailUrl: defaultImage,
      accessStatus: "public",
      commentCount: 1,
      categoryName: ["category1"],
      authorPhotoUrl: defaultProfileImage,
      createdAt: "2021-08-01",
      updatedAt: "2021-08-01",
    },
    {
      blogId: "1",
      title: "title1",
      about: "about1",
      membershipId: "1",
      authorName: "author1",
      viewCount: 1,
      like: 1,
      thumbnailUrl: defaultImage,
      accessStatus: "public",
      commentCount: 1,
      categoryName: ["category1"],
      authorPhotoUrl: defaultProfileImage,
      createdAt: "2021-08-01",
      updatedAt: "2021-08-01",
    },
  ];

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
          {articleList.map((article, index) => (
            <ArticleListItem key={index} shape="box" info={article} />
          ))}
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
