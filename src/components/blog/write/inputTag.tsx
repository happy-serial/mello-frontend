"use client";

import { Spacer } from "@/components/common/spacer";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { NewColors } from "../../../../public/styles/colors/colors";

interface InputTagProps {
  tagList: string[];
  setTagList: Dispatch<SetStateAction<string[]>>;
}

export const InputTag = ({ tagList, setTagList }: InputTagProps) => {
  const [tagText, setTagText] = useState("");
  const [isFocus, setIsFocus] = useState<boolean>(false);

  // const [tagList, setTagList] = useState<string[]>([]);

  const handleAddTag = () => {
    if (tagText.trim() !== "") {
      setTagList([...tagList, tagText.trim()]);
      setTagText("");
    }
  };

  const handleRemoveTag = (index: number) => {
    const newTagList = tagList.filter((_, i) => i !== index);
    setTagList(newTagList);
  };

  return (
    <>
      <div
        style={{
          fontSize: "18px",
          letterSpacing: "-0.02em",
          lineHeight: "24px",
          color: NewColors.gray8,
          paddingBottom: "16px",
        }}
      >
        태그 입력
      </div>
      {tagList.length > 0 && (
        <div>
          <div style={{ display: "flex", gap: "12px" }}>
            {tagList.map((tag, index) => (
              <div key={tag} style={{ color: NewColors.fontWhite }}>
                <TagItem label={tag} onXClick={() => handleRemoveTag(index)} />
              </div>
            ))}
          </div>
          <Spacer shape="height" size="18px" />
        </div>
      )}

      <div
        style={{
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <textarea
          value={tagText}
          onChange={(e) => {
            setTagText(e.target.value);
          }}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholder="태그를 입력해주세요"
          style={{
            padding: "24px",
            boxSizing: "border-box",
            borderRadius: "12px",
            border: `1px solid ${NewColors.weakWhite}`,
            backgroundColor: NewColors.userCard,
            height: "70px",
            width: "100%",
            resize: "none",
            outline: isFocus ? "1px solid" : "none",
            color: NewColors.fontWhite,
            outlineColor: NewColors.fontWhite,
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            lineHeight: "20px",
          }}
        ></textarea>
        <button
          style={{
            position: "absolute",
            right: "16px",
            color: NewColors.primary,
            backgroundColor: NewColors.transparent,
            border: "none",
            zIndex: 20,
            cursor: "pointer",
            fontSize: "14px",
          }}
          onClick={handleAddTag}
        >
          추가하기
        </button>
      </div>
    </>
  );
};

const TagItem = ({
  label,
  onXClick,
}: {
  label: string;
  onXClick: () => void;
}) => {
  return (
    <div
      style={{
        borderRadius: "1000px",
        padding: "8px 18px",
        backgroundColor: NewColors.userCard,
        border: `1px solid ${NewColors.weakWhite}`,
        boxSizing: "border-box",
        display: "flex",
        gap: "2px",
        alignItems: "center",
        color: NewColors.fontWhite,
      }}
    >
      <div
        style={{
          fontSize: "14px",
          lineHeight: "20px",
        }}
      >
        {label}
      </div>
      <Image
        src="/Image/xMark.svg"
        alt="what"
        width="16"
        height="16"
        onClick={onXClick}
      />
    </div>
  );
};
