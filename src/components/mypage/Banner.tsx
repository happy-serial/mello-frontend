import { Colors } from "../../../public/styles/colors/colors";
import { Spacer } from "../common/spacer";
import TempBanner from "../../../public/Image/BannerImage.png"
import Image from "next/image";

export const Banner = () => {
  
  return (
    <>
      <Image
        alt="MyPage Banner"
        src={TempBanner}
        style={{
          position : "absolute",
          width : "1920px",
          height : "230px",
          zIndex : "-9999",
          top: "0px",
        }}
      />
    </>
  );
};
