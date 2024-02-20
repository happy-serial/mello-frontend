import Image from "next/image";
import styles from "./css/articleListItem.module.css";
import { Profile } from "@/components/common/profile";
import { Colors } from "../../../../public/styles/colors/colors";
import { aldrich, nanumSquare } from "../../../../public/styles/fonts/fonts";
import { CiHeart, CiChat1 } from "react-icons/ci";

interface ArticleListItemProps {
  shape: "box" | "horizontal";
}

export const ArticleListItem = ({ shape }: ArticleListItemProps) => {
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
          src={
            "data:image/jpeg;base64,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"
          }
          alt={"flower"}
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
          <Profile size="small" username="Long" />
          <div
            style={{
              textAlign: "center",
              padding: "22px",
              color: Colors.black,
              fontSize: "15px",
            }}
          >
            2020년 10월 10일
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
          이더리움 강세!
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
          오늘은 이더리움 코인이 신기한 경험을 했다. 2930달러에서 횡보를 하던
          도중 2870달러 까지 떨어졌다. 20달러만 떨어지면 청산이다. 그런데
          2900달러까지 올라가면서 난 살았다.
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
            <div>&nbsp;&nbsp;5k</div>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <CiChat1 size="20px" />
            <div style={{ padding: "4px" }}>30</div>
            <CiHeart size="20px" />
            <div style={{ padding: "4px" }}>1.8k</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            padding: "8px 20px 0px 20px",
          }}
        >
          <div
            style={{
              borderRadius: "16px",
              backgroundColor: Colors.lightGray,
              padding: "6px 16px 6px 16px",
              marginRight: "8px",
              color: Colors.black,
              fontSize: "14px",
            }}
          >
            카테고리1
          </div>
          <div
            style={{
              borderRadius: "16px",
              backgroundColor: Colors.lightGray,
              padding: "6px 16px 6px 16px",
              marginRight: "8px",
              color: Colors.black,
              fontSize: "14px",
            }}
          >
            카테고리2
          </div>
        </div>
      </div>
    </>
  );
};
