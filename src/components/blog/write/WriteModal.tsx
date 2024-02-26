"use client";

import styles from "../css/writeModal.module.css";
import { Colors } from "../../../../public/styles/colors/colors";
import { Button } from "../../common/button";
import { Spacer } from "../../common/spacer";
import { useState , useEffect } from "react";
import { sendImage } from "@/api"

interface WriteModalProps{
  viewModal: boolean;
  setCategoryList : React.Dispatch<React.SetStateAction<boolean>>;
}

export const WriteModal: React.FC<WriteModalProps> = ({viewModal , setViewModal}) => {
  const [aboutText , setAboutText] = useState<string>("");
  const [aboutLength , setAboutLength] = useState<number>(0);
  const [privacy , setPrivacy] = useState<boolean>(false);
  const [thumbnailURL , setthumbnailURL] = useState<string>("");

  const submit = () =>{
    console.log("제출버튼")
    console.log(thumbnailURL)
    setthumbnailURL("")
  }

  const handleFileChange = async (e) =>{
    if(e.target.files[0] !== null){
      try{
        const file = e.target.files[0]
        const imageURL = await sendImage(file)
        setthumbnailURL(imageURL)
        console.log("이미지URL", imageURL)
      } catch (error){
        console.log(error)
      }
    }else{
      console.log("이미지가 없어요")
    }
  }

  useEffect(()=>{
    console.log(thumbnailURL)
  },[thumbnailURL])

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
            backgroundColor = {privacy === false ? Colors.purple : Colors.white}
            color = {privacy === false ? Colors.white : Colors.purple}
            label = "전체공개"
            size = "small"
            purpose = "event"
            onClick = {()=> setPrivacy(false)}
          />
          <Button
            backgroundColor = {privacy === true ? Colors.purple : Colors.white}
            color = {privacy === true ? Colors.white : Colors.purple}
            label = "비공개"
            size = "small"
            purpose = "event"
            onClick = {() => setPrivacy(true)}
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
          />
        </div>
      </div>
    </>
  );
};
