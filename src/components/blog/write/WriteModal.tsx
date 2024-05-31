"use client";

import { getImageURL, postBlog } from "@/api";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { EventButton } from "../../common/button";
import styles from "../css/writeModal.module.css";

interface WriteModalProps {
  blogID: string | undefined;
  setViewModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WriteModal: React.FC<WriteModalProps> = ({
  blogID,
  setViewModal,
}) => {
  const [aboutText, setAboutText] = useState<string>("");
  const [aboutLength, setAboutLength] = useState<number>(0);
  const [privacy, setPrivacy] = useState<string>("PRIVATE");
  const [thumbnailURL, setthumbnailURL] = useState<string | undefined>("");

  const submit = async () => {
    const success = await postBlog(blogID, thumbnailURL, privacy, aboutText);
    console.log(success);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      try {
        const file = e.target.files[0];
        const imageURL = await getImageURL(file);
        setthumbnailURL(imageURL);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("이미지가 없어요");
    }
  };

  useEffect(() => {
    setAboutLength(aboutText.length);
  }, [aboutText]);

  return (
    <>
      <div className={[styles.writeModalWrapper].join(" ")}>
        <div className={[styles.thumbnailWrapper].join(" ")}>
          썸네일
          <input
            accept="image/*"
            type="file"
            onChange={(e) => handleFileChange(e)}
          />
          {thumbnailURL && <Image src={thumbnailURL} alt="Upload Image" />}
        </div>
        <div className={[styles.aboutWrapper].join(" ")}>
          소개글
          <input
            onChange={(e) => setAboutText(e.target.value)}
            maxLength={200}
          />
          <span>{aboutLength}/200</span>
        </div>
        <div className={[styles.privacyWrapper].join(" ")}>
          공개설정
          <EventButton
            onClick={() => setPrivacy("PUBLIC")}
            disabled={false}
            label={"전체공계"}
            width={120}
            height={40}
            padding={"12px"}
            fontSize={16}
            fontWeight={500}
          />
          <EventButton
            onClick={() => setPrivacy("PRIVATE")}
            disabled={false}
            label={"비공개"}
            width={120}
            height={40}
            padding={"12px"}
            fontSize={16}
            fontWeight={500}
          />
        </div>
        <div className={[styles.writeModalButtonWrapper].join(" ")}>
          <EventButton
            onClick={() => setViewModal(false)}
            disabled={false}
            label={"취소"}
            width={120}
            height={40}
            padding={"12px"}
            fontSize={16}
            fontWeight={500}
          />
          <EventButton
            onClick={submit}
            disabled={false}
            label={"제출하기"}
            width={120}
            height={40}
            padding={"12px"}
            fontSize={16}
            fontWeight={500}
          />
        </div>
      </div>
    </>
  );
};
