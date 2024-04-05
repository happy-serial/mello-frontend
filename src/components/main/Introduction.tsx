import Link from "next/link";
import { NewColors } from "../../../public/styles/colors/colors";
import { pretendard } from "../../../public/styles/fonts/fonts";
import { Button } from "../common/button";
import { Spacer } from "../common/spacer";
import Image from "next/image";

interface IntroductionProps {}

export const Introduction = ({}: IntroductionProps) => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "470px",
          display: "flex",
          position: "relative",
        }}
      >
        <Image
          alt="to be changed"
          src="/Image/mainBackground.png"
          width={1920}
          height={470}
          style={{ width: "100vw", height: "470px" }}
          priority
        />
        <div
          className={pretendard.className}
          style={{
            display: "flex",
            flexDirection: "column",
            color: NewColors.fontWhite,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100vw",
            height: "470px",
            backgroundColor: NewColors.blackTransparent,
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "56.72px",
              lineHeight: "1.27",
            }}
          >
            공부하면서 기록하고,
            <br /> 함께 성장하기
          </div>
          <Spacer shape="height" size="16px" />
          <div
            style={{
              display: "flex",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            <div style={{ fontWeight: "bold" }}>serial</div>
            <div>에서 내 커리어 성장이 시작됩니다.</div>
          </div>
          <Spacer shape="height" size="24px" />
          <Link
            href="/auth/login"
            className={pretendard.className}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "240px",
              height: "64px",
              backgroundColor: NewColors.mainRed,
              color: NewColors.fontWhite,
              fontSize: "18px",
              fontWeight: "500",
              borderRadius: "32px",
              border: "none",
            }}
          >
            시작하기
          </Link>
        </div>
      </div>
    </>
  );
};
