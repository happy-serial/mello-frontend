"use client";

import { createTemporaryBlog, saveTemporaryBlog } from "@/api";
import { Category } from "@/components/blog/write/Category";
import Editor from "@/components/blog/write/Editor";
import { InputTag } from "@/components/blog/write/inputTag";
import "@/components/blog/write/styles.css";
import { EventButton } from "@/components/common/button";
import { Spacer } from "@/components/common/spacer";
import { htmlToText } from "@/utils/stringModifier";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  CSSProperties,
  Dispatch,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { ReactSVG } from "react-svg";
import { Colors, NewColors } from "../../../../../public/styles/colors/colors";
import { pretendard } from "../../../../../public/styles/fonts/fonts";

export default function BlogWrite() {
  const [blogID, setBlogID] = useState<string | undefined>("");
  const [titleText, setTitleText] = useState<string>("");
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [isPublicationProcess, setIsPublicationProcess] = useState(false);
  const blogTextId = useSearchParams();

  const childRef = useRef<HTMLDivElement>(null);
  let textData = "";

  function getTextData() {
    console.log("Getdata");
    if (childRef && childRef.current) {
      textData = "";
      const parser = new DOMParser();
      const doc = parser.parseFromString(
        childRef.current.innerHTML,
        "text/html"
      );
      const outerDivElement = doc.querySelector(".ContentEditable__root");

      if (outerDivElement !== null) {
        Array.from(outerDivElement.childNodes).forEach((node) => {
          if (node instanceof HTMLElement) {
            textData += node.outerHTML;
          } else if (node instanceof Text) {
            textData += node.textContent;
          }
        });
      }
    } else {
      console.log("childRef is undefined");
    }
  }

  function getParsedData() {
    getTextData();
    return htmlToText(textData);
  }

  const TemporaryStorage = async () => {
    console.log("TemporaryStorage");
    if (blogID === "") {
      const tempBlogId = await createTemporaryBlog();
      setBlogID(tempBlogId?.tempBlogId);
      getTextData();
      const success = await saveTemporaryBlog(
        tempBlogId?.tempBlogId,
        titleText,
        categoryList,
        textData
      );
      console.log("임시저장성공", success);
    } else {
      getTextData();
      const success = await saveTemporaryBlog(
        blogID,
        titleText,
        categoryList,
        textData
      );
      console.log("임시저장성공", success);
    }
  };

  const SendData = async () => {
    console.log("SendData");
    await TemporaryStorage();
    setIsPublicationProcess(true);
  };

  return (
    <>
      {!isPublicationProcess ? (
        <WriteSection
          titleText={titleText}
          setTitleText={setTitleText}
          childRef={childRef}
          getParsedData={getParsedData}
          setIsPublicationProcess={setIsPublicationProcess}
        />
      ) : (
        <PublicationSection setIsPublicationProcess={setIsPublicationProcess} />
      )}
    </>
  );
}

function Title({
  titleText,
  setTitleText,
}: {
  titleText: string;
  setTitleText: Dispatch<SetStateAction<string>>;
}) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <textarea
      placeholder="제목을 입력하세요"
      value={titleText}
      className={pretendard.className}
      onChange={(e) => {
        setTitleText(e.target.value);
      }}
      style={{
        boxSizing: "border-box",
        padding: "24px 27px 90px 27px",
        fontWeight: 600,
        width: "100%",
        height: "156px",
        backgroundColor: NewColors.userCard,
        borderRadius: "12px",
        fontSize: "36px",
        border: "0px",
        color: Colors.white,
        lineHeight: "36px",
        outline: isFocus ? "1px solid" : "none",
        outlineColor: Colors.white,
        resize: "none",
      }}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    />
  );
}

function WriteSection({
  titleText,
  setTitleText,
  childRef,
  getParsedData,
  setIsPublicationProcess,
}: {
  titleText: string;
  setTitleText: Dispatch<SetStateAction<string>>;
  childRef: RefObject<HTMLDivElement>;
  getParsedData: () => string;
  setIsPublicationProcess: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <Title titleText={titleText} setTitleText={setTitleText} />
      <Spacer shape="height" size="9px" />
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          backgroundColor: NewColors.userCard,
          borderRadius: "12px",
        }}
      >
        <Editor ref={childRef} parentFunction={getParsedData} />
      </div>
      <Spacer shape="height" size="26px" />
      <div>
        <Category />
      </div>
      <Spacer shape="height" size="28px" />
      <InputTag />
      <Spacer shape="height" size="32px" />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <EventButton
          onClick={() => console.log("임시저장 button clicked")}
          disabled={false}
          label={"임시저장"}
          width={326}
          height={60}
          padding={"19px 120px"}
          fontSize={18}
          fontWeight={600}
          borderRadius={16}
          backgroundColor={NewColors.gray10}
          color={NewColors.fontWhite}
        />
        <Spacer shape="width" size="12px" />
        <EventButton
          onClick={() => setIsPublicationProcess(true)}
          disabled={false}
          label={"아티클 출간하기"}
          width={326}
          height={60}
          padding={"19px 97px"}
          fontSize={18}
          fontWeight={600}
          borderRadius={16}
          backgroundColor={NewColors.primary}
          color={NewColors.backgroundBlack}
        />
      </div>
      <Spacer shape="height" size="56px" />
    </>
  );
}

function PublicationSection({
  setIsPublicationProcess,
}: {
  setIsPublicationProcess: Dispatch<SetStateAction<boolean>>;
}) {
  const [shortIntroduction, setShortIntroduction] = useState("");
  const [accessState, setAccessState] = useState("전체공개");

  const accessStateList = [
    { label: "전체공개", img: "/Image/openLock.svg" },
    { label: "비공개", img: "/Image/Lock.svg" },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "676px",
          display: "flex",
          gap: "24px",
          justifyContent: "center",
        }}
      >
        {/* 아티클 미리보기 */}
        <div>
          <div
            style={{
              fontSize: "18px",
              color: NewColors.fontWhite,
              letterSpacing: "-0.02em",
              lineHeight: "24px",
              marginBottom: "8px",
              fontWeight: 600,
            }}
          >
            아티클 미리보기
          </div>
          <div
            style={{
              backgroundColor: NewColors.userCard,
              padding: "28px 110px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: `1px solid ${NewColors.weakWhite} `,
              borderRadius: "12px",
              gap: "24px",
              boxSizing: "border-box",
              marginBottom: "16px",
            }}
          >
            <Image
              src={"/Image/camera.svg"}
              alt="썸네일 입력"
              width={100}
              height={76}
            />
            <div
              style={{
                borderRadius: "1000px",
                background:
                  "linear-gradient(rgba(149, 252, 121, 0.1), rgba(149, 252, 121, 0.1))",
                border: "1px solid #7afb57",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px 16px",
                textAlign: "left",
                fontSize: "14px",
                lineHeight: "28px",
                fontWeight: 600,
                color: "#7afb57",
                cursor: "pointer",
              }}
              onClick={() => console.log("시방방")}
            >
              <div
                style={{
                  letterSpacing: "-0.02px",
                  lineHeight: "20px",
                }}
              >
                썸네일 업로드
              </div>
            </div>
          </div>
          <textarea
            className={pretendard.className}
            value={shortIntroduction}
            onChange={(e) => {
              setShortIntroduction(e.target.value);
            }}
            placeholder="아티클에 대한 한 줄 소개 (60자 이내)"
            style={{
              padding: "24px",
              boxSizing: "border-box",
              borderRadius: "12px",
              border: `1px solid ${NewColors.weakWhite}`,
              letterSpacing: "-0.02em",
              backgroundColor: NewColors.userCard,
              fontWeight: 500,
              height: "114px",
              width: "100%",
              resize: "none",
              outline: "none",
              color: NewColors.fontWhite,
              outlineColor: NewColors.fontWhite,
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              lineHeight: "24px",
            }}
          ></textarea>
          <div></div>
        </div>
        {/* 공개설정 */}
        <div>
          <div
            style={{
              fontSize: "18px",
              color: NewColors.fontWhite,
              letterSpacing: "-0.02em",
              lineHeight: "24px",
              marginBottom: "8px",
              fontWeight: 600,
            }}
          >
            공개 설정
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            {accessStateList.map((accessStateListItem) => (
              <SingleCategoryItem
                key={accessStateListItem.label}
                label={accessStateListItem.label}
                imgSrc={accessStateListItem.img}
                isSelected={accessStateListItem.label === accessState}
                onClick={() => setAccessState(accessStateListItem.label)}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "65px",
        }}
      >
        <EventButton
          onClick={() => setIsPublicationProcess(false)}
          disabled={false}
          label={"돌아가기"}
          width={326}
          height={60}
          padding={"19px 120px"}
          fontSize={18}
          fontWeight={600}
          borderRadius={16}
          backgroundColor={NewColors.gray10}
          color={NewColors.fontWhite}
        />
        <Spacer shape="width" size="12px" />
        <EventButton
          onClick={() => console.log("출간하기 button clicked")}
          disabled={false}
          label={"출간하기"}
          width={326}
          height={60}
          padding={"19px 97px"}
          fontSize={18}
          fontWeight={600}
          borderRadius={16}
          backgroundColor={NewColors.primary}
          color={NewColors.backgroundBlack}
        />
      </div>
      <Spacer shape="height" size="56px" />
    </div>
  );
}

const SingleCategoryItem = ({
  label,
  imgSrc,
  isSelected,
  onClick,
}: {
  label: string;
  imgSrc: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const svgColor = isSelected ? NewColors.primary : NewColors.fontWhite;

  const parentStyle: CSSProperties = {
    borderRadius: "1000px",
    border: isSelected
      ? "1px solid #7afb57"
      : `1px solid ${NewColors.fontWhite}`,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 37px",
    textAlign: "left",
    fontSize: "14px",
    color: isSelected ? "#7afb57" : NewColors.fontWhite,
    cursor: "pointer",
    height: "48px",
    width: "151px",
  };

  return (
    <div style={parentStyle} onClick={onClick}>
      {/* <Image src={imgSrc} alt="공개 비공개" width={24} height={24} /> */}
      <ReactSVG
        src={imgSrc}
        beforeInjection={(svg) => {
          svg.querySelector("path")!.setAttribute("fill", svgColor);
        }}
        style={{
          width: 24,
          height: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <div
        style={{
          letterSpacing: "-0.02px",
          lineHeight: "21px",
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
};
