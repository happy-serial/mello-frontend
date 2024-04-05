import { NewColors } from "../../../public/styles/colors/colors";
import { IntroductionImage } from "./IntroductionSection/IntroductionImage";
import { IntroductionText } from "./IntroductionSection/IntroductionText";
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
          backgroundImage: 'url("../../../public/Image/mainBackground.png")',
        }}
      >
        <Image
          alt="to be changed"
          src="/Image/mainBackground.png"
          width={0}
          height={0}
          style={{ width: "100vw", height: "470px" }}
          priority
        />
        <div
          style={{
            display: "flex",
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
          안녕하십니까 시리얼 입니다.
        </div>
      </div>
    </>
  );
};
