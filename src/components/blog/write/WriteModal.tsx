"use client";

import styles from "../css/writeModal.module.css";
import { Colors } from "../../../../public/styles/colors/colors";
import { Button } from "../../common/button";
import { Spacer } from "../../common/spacer";
import { useState , useEffect, ChangeEvent } from "react";
import { getImageURL } from "@/api"
import Image from "next/image";
import { postBlog } from "@/api"

interface WriteModalProps{
  blogID : string,
  setViewModal : React.Dispatch<React.SetStateAction<boolean>>;
}

export const WriteModal: React.FC<WriteModalProps> = ({ blogID , setViewModal}) => {
  const [aboutText , setAboutText] = useState<string>("");
  const [aboutLength , setAboutLength] = useState<number>(0);
  const [privacy , setPrivacy] = useState<string>("PRIVATE");
  const [thumbnailURL , setthumbnailURL] = useState<string>("");

  const submit = async () =>{
    console.log(thumbnailURL)
    console.log(aboutText)
    console.log(privacy)
    console.log(blogID)
    const success = await postBlog(blogID , thumbnailURL , privacy , aboutText)
    console.log(success)
  }

  const handleFileChange = async (e : ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files && (e.target.files.length > 0)){
      try{
        const file = e.target.files[0]
        const imageURL = await getImageURL(file)
        setthumbnailURL(imageURL)
        console.log("이미지URL", imageURL)
      } catch (error){
        console.log(error)
      }
    }else{
      console.log("이미지가 없어요")
    }
  }

  useEffect(() =>{
    setAboutLength(aboutText.length)
  },[aboutText])


  return (
    <>
      <div  className = {[styles.writeModalWrapper].join(" ")} >
        <div className = {[styles.thumbnailWrapper].join(" ")}>
          썸네일
          <input accept = "image/*" type = "file" onChange = {(e) => handleFileChange(e)}/>
          { thumbnailURL && <img src={thumbnailURL} alt = "Upload Image"/>}
        </div>
        <div className = {[styles.aboutWrapper].join(" ")}>
          소개글
          <input
            onChange = {(e) => setAboutText(e.target.value)}
            maxLength = {200}
          />
          <span>{aboutLength}/200</span>
        </div>
        <div  className = {[styles.privacyWrapper].join(" ")}>
          공개설정
          <Button
            backgroundColor = {privacy === "PUBLIC" ? Colors.purple : Colors.white}
            color = {privacy === "PUBLIC" ? Colors.white : Colors.purple}
            label = "전체공개"
            size = "small"
            purpose = "event"
            onClick = {()=> setPrivacy("PUBLIC")}
          />
          <Button
            backgroundColor = {privacy === "PRIVATE" ? Colors.purple : Colors.white}
            color = {privacy === "PRIVATE" ? Colors.white : Colors.purple}
            label = "비공개"
            size = "small"
            purpose = "event"
            onClick = {() => setPrivacy("PRIVATE")}
          />
        </div>
        <div className = {[styles.writeModalButtonWrapper].join(" ")}>
          <Button
            backgroundColor = {Colors.purple}
            color = {Colors.white}
            label = "취소"
            size = "small"
            purpose = "event"
            onClick = {() => setViewModal(false)}
          />
          <Button
            backgroundColor = {Colors.purple}
            color = {Colors.white}
            label = "제출하기"
            size = "small"
            purpose = "event"
            onClick = {submit}
            disabled = {(thumbnailURL == '' || aboutText == '')}
          />
        </div>
      </div>
    </>
  );
};
