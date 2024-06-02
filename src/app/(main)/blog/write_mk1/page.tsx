"use client";

import { createTemporaryBlog, saveTemporaryBlog } from "@/api";
import { Category } from "@/components/blog/write/Category";
import Editor from "@/components/blog/write/Editor";
import { InputTag } from "@/components/blog/write/inputTag";
import "@/components/blog/write/styles.css";
import { htmlToText } from "@/utils/stringModifier";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Colors, NewColors } from "../../../../../public/styles/colors/colors";
import { pretendard } from "../../../../../public/styles/fonts/fonts";
import { EventButton } from "../../../../../src/components/common/button";
import { Spacer } from "../../../../../src/components/common/spacer";

export default function BlogWrite() {
  const [blogID, setBlogID] = useState<string | undefined>("");
  const [titleText, setTitleText] = useState<string>("");
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [viewModal, setViewModal] = useState<boolean>(true);
  const blogTextId = useSearchParams();

  const childRef = useRef<HTMLDivElement>(null);
  let textData = "";

  useEffect(() => {
    console.log(blogTextId.get("tempBlogId"));
  }, []);

  function GetTextData() {
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
    GetTextData();
    return htmlToText(textData);
  }

  const TemporaryStorage = async () => {
    console.log("TemporaryStorage");
    if (blogID === "") {
      const tempBlogId = await createTemporaryBlog();
      setBlogID(tempBlogId?.tempBlogId);
      GetTextData();
      const success = await saveTemporaryBlog(
        tempBlogId?.tempBlogId,
        titleText,
        categoryList,
        textData
      );
      console.log("임시저장성공", success);
    } else {
      GetTextData();
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
    setViewModal(true);
  };

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
          onClick={() => console.log("아티클 출간하기 button clicked")}
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
