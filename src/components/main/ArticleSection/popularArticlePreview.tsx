import { Spacer } from "@/components/common/spacer";
import { NewColors } from "../../../../public/styles/colors/colors";
import { pretendard } from "../../../../public/styles/fonts/fonts";
import { Line } from "@/components/common/line";

interface PopularArticlePreviewProps {}

export const PopularArticlePreview = ({}: PopularArticlePreviewProps) => {
  return (
    <>
      <div
        className={pretendard.className}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "260px",
            height: "200px",
            backgroundColor: NewColors.gray2,
            borderRadius: "20px",
          }}
        ></div>
        <Spacer shape={"height"} size={"12px"} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "12px",
            color: NewColors.white,
          }}
        >
          <div style={{ fontWeight: 500 }}>이호준이</div>
          <Spacer shape={"height"} size={"4px"} />
          <Line
            direction={"vertical"}
            color={NewColors.gray7}
            length="10px"
            thickness={1}
          />
          <Spacer shape={"height"} size={"4px"} />
          <div style={{ fontWeight: 400 }}>2024.03.09</div>
        </div>
        <Spacer shape={"height"} size={"6px"} />
        <div
          style={{ fontWeight: 700, color: NewColors.gray8, fontSize: "16px" }}
        >
          카카오프렌즈 vs 라인프렌즈, 승자는?
        </div>
        <Spacer shape={"height"} size={"1px"} />
        <div
          style={{ fontWeight: 400, color: NewColors.gray7, fontSize: "14px" }}
        >
          한국인이 이모티콘을 많이 쓰는 이유?
        </div>
        <Spacer shape={"height"} size={"8px"} />
        <div
          style={{
            fontWeight: 500,
            color: NewColors.mainOrange,
            fontSize: "12px",
          }}
        >
          현직자의 시크릿
        </div>
      </div>
    </>
  );
};
