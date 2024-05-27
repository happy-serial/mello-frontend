import { Spacer } from "@/components/common/spacer";
import { NewColors } from "../../../../public/styles/colors/colors";

export const HotUser = ({ author }: { author: string }) => {
  return (
    <>
      <div
        style={{
          width: "193px",
          height: "243px",
          backgroundColor: NewColors.mainBlack,
          alignItems: "center",
          border: `1px solid ${NewColors.userCardBorder}`,
          borderRadius: "16px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "30px",
            backgroundColor: NewColors.gray5,
          }}
        ></div>
        <Spacer shape={"height"} size={"6px"} />
        <div>{author}</div>
        <Spacer shape={"height"} size={"4px"} />
        <div>스타트업·UX디자이너</div>
        <Spacer shape={"height"} size={"9px"} />
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: NewColors.mainRed,
            fontSize: "15px",
            fontWeight: "700",
          }}
        >
          팔로우
        </button>
      </div>
      <Spacer shape={"width"} size={"12px"} />
    </>
  );
};
