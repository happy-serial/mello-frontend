import Image from "next/image";
import styles from "./css/articleListItem.module.css";
import { Profile } from "@/components/common/profile";
import { Colors } from "../../../../public/styles/colors/colors";
import { aldrich, nanumSquare } from "../../../../public/styles/fonts/fonts";
import { CiHeart, CiChat1 } from "react-icons/ci";
import { thumbnailResponse } from "@/model/blog.model";

interface ArticleListItemProps {
  shape: "box" | "horizontal";
  info: thumbnailResponse;
}

export const ArticleListItem = ({ shape, info }: ArticleListItemProps) => {
  return (
    <>
      <div
        className={styles.boxContainer}
        style={{
          backgroundColor: Colors.white,
          border: `1px solid ${Colors.lightGray}`,
        }}
      >
        <Image
          src={info.image}
          alt={"thumbnailImage"}
          width={360}
          height={160}
          style={{
            objectFit: "cover",
            borderRadius: "10px 10px 0px 0px",
            objectPosition: "0% 60%",
          }}
        ></Image>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Profile
            size="small"
            username={info.user.name}
            imgUrl={info.user.profileImage}
          />
          <div
            style={{
              textAlign: "center",
              padding: "22px",
              color: Colors.black,
              fontSize: "15px",
            }}
          >
            {info.createdAt}
          </div>
        </div>
        <div
          className={nanumSquare.className}
          style={{
            padding: "12px 0px 0px 20px",
            fontSize: "24px",
            fontWeight: "700",
            color: Colors.black,
          }}
        >
          {info.title}
        </div>
        <div
          className={nanumSquare.className}
          style={{
            padding: "12px 20px 0px 20px",
            textOverflow: "ellipsis",
            fontSize: "16px",
            color: Colors.black,
            lineHeight: "1.4",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {info.summary}
        </div>
        <div
          className={aldrich.className}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            padding: "20px 20px 0px 20px",
            fontSize: "14px",
            color: Colors.gray,
          }}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
              paddingTop: "4px",
            }}
          >
            <div>View &nbsp;</div>
            <div style={{ fontSize: "9px", paddingTop: "2px" }}>●</div>
            <div>&nbsp;&nbsp;{info.viewCount}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <CiChat1 size="20px" />
            <div style={{ padding: "4px" }}>{info.commentCount}</div>
            <CiHeart size="20px" />
            <div style={{ padding: "4px" }}>{info.likeCount}</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            padding: "8px 20px 0px 20px",
          }}
        >
          {info.categories.map((category, index) => {
            return (
              <div
                key={index}
                style={{
                  borderRadius: "16px",
                  backgroundColor: Colors.lightGray,
                  padding: "6px 16px 6px 16px",
                  marginRight: "8px",
                  color: Colors.black,
                  fontSize: "14px",
                }}
              >
                {category}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
