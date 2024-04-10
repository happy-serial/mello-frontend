import { Spacer } from "@/components/common/spacer"
import { NewColors } from "../../../../public/styles/colors/colors";

export const ArticlePreview = ({}) => {
  return (
    <>
      <div
        style={{
          width: "828px",
          height: "184px",
          backgroundColor: NewColors.mainBlack,
          borderRadius: "16px",
          boxSizing: "border-box",
          padding: "22px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ width: "525px", display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "14px",
                backgroundColor: NewColors.gray5,
              }}
            ></div>
            <Spacer shape={"width"} size={"4px"} />
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: NewColors.fontWhite,
              }}
            >
              임진영
            </div>
          </div>
          <Spacer shape={"height"} size={"6px"} />
          <div
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: NewColors.fontWhite,
              lineHeight: "1.4",
            }}
          >
            가독성 좋은 코드 입력법: 클린 코드를 향한 여정
          </div>
          <div
            style={{
              fontSize: "15px",
              fontWeight: "400",
              color: NewColors.gray1,
              lineHeight: "1.5",
              overflow: "hidden",
              maxLines: 2,
              WebkitLineClamp: 2,
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              flexShrink: 0,
            }}
          >
            안녕하세요. 지엠포컴퍼니의 임진영 COO입니다. 오늘은 클린 코드에
            대하여 이야기하도록 하죠.​프로그래밍에서 코드의 가독성은 매우 중요한
            요소 중 하나입니다. 가독성 좋은 코드 asdlkfhaklsdjfhlkasdhkfjlh
          </div>
          <Spacer shape={"height"} size={"4px"} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "12px",
            }}
          >
            <div
              style={{
                fontWeight: 400,
                color: NewColors.gray2,
              }}
            >
              Feb 14, 2024
            </div>
            <Spacer shape={"width"} size={"8px"} />
            <div
              style={{
                fontWeight: 400,
                color: NewColors.gray3,
              }}
            >
              약 2시간 전
            </div>
            <Spacer shape={"width"} size={"8px"} />
            <div
              style={{
                fontWeight: 400,
                color: NewColors.mainOrange,
              }}
            >
              현직자의 시크릿
            </div>
          </div>
        </div>
        <div
          style={{
            width: "240px",
            height: "140px",
            backgroundColor: NewColors.gray5,
            borderRadius: "12px",
            flexShrink: 0,
          }}
        ></div>
      </div>
    </>
  );
};
