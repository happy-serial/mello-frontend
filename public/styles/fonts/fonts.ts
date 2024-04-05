import { Black_Ops_One, Aldrich } from "next/font/google";
import localFont from "next/font/local";

const blackOpsOne = localFont({
  src: [
    {
      path: "./BlackOpsOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
const aldrich = Aldrich({
  subsets: ["latin"],
  weight: "400",
});
const nanumSquare = localFont({
  src: [
    {
      path: "./NanumSquareRoundOTFL.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./NanumSquareRoundOTFR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NanumSquareRoundOTFB.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./NanumSquareRoundOTFEB.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

const pretendard = localFont({
  src: [
    {
      path: "./Pretendard-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Pretendard-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Pretendard-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export { blackOpsOne, aldrich, nanumSquare, pretendard };
