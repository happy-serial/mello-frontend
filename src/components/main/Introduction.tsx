"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NewColors } from "../../../public/styles/colors/colors";
import { pretendard } from "../../../public/styles/fonts/fonts";
import { Spacer } from "../common/spacer";

interface IntroductionProps {}

export const Introduction = ({}: IntroductionProps) => {
  // TODO: 사이즈가 바로 안바껴서 바뀌는게 살짝 보임. 빌드해도 안바뀔거임. 
  const [width, setWidth] = useState(1920);
  const [figureSize, setFigureSize] = useState((width / 1920) * 260);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
        setFigureSize((newWidth / 1920) * 260);
      };

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  if (width === null || figureSize === null) {
    return null;
  }

  return (
    <div
      className={pretendard.className}
      style={{
        width: "100vw",
        margin: "84px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "67vw",
          maxWidth: "1280px",
        }}
      >
        <div
          style={{
            color: NewColors.titleWhite,
            fontSize: "64px",
            fontWeight: "bold",
            lineHeight: "1.3",
          }}
        >
          모두를 위한 스타트업 플랫폼,
          <br />
          Serial에서 내 커리어 성장을 시작해요.
        </div>
        <Spacer shape="height" size="32px" />
        <IconicImage figureSize={figureSize} />
      </div>
    </div>
  );
};

function IconicImage({ figureSize }: { figureSize: number }) {
  const images = [
    { number: 1, src: "/Image/rectangleWhite.svg" },
    { number: 2, src: "/Image/hexagonGreen.svg" },
    { number: 3, src: "/Image/hexagonWhite.svg" },
    { number: 4, src: "/Image/rectangleGreen.svg" },
  ];

  const getImageSrc = (number: number) => {
    const image = images.find((img) => img.number === number);
    return image ? image.src : "/Image/default.svg";
  };

  const translationPX = 3200;
  const iterationArray = Array.from({ length: 16 }, (_, i) => (i % 4) + 1);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <div
      style={{
        backgroundColor: NewColors.introductionBackground,
        height: "420px",
        width: "100%",
        borderRadius: "24px",
        display: "flex",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      {iterationArray.map((number) => (
        <Image
          key={number}
          alt="recWhite"
          src={getImageSrc(number)}
          width={figureSize}
          height={figureSize}
          style={{
            margin: "2px",
            transition: startAnimation ? "transform 9s ease-in-out" : "none",
            transform: startAnimation
              ? `translateX(-${translationPX}px)`
              : "translateX(0)",
          }}
        />
      ))}
      <Spacer shape="width" size="200px" />
      {images.map(({ number, src }) => (
        <Image
          key={number}
          alt="recWhite"
          src={src}
          width={figureSize}
          height={figureSize}
          style={{
            margin: "2px",
            transition: startAnimation ? "transform 10s ease-in-out" : "none",
            transform: startAnimation
              ? `translateX(-${translationPX + 400}px)`
              : "translateX(0)",
          }}
        />
      ))}
    </div>
  );
}
