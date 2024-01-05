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

export { blackOpsOne, aldrich, nanumSquare };
