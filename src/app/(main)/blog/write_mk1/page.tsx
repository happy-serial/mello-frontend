"use client"

import Editor from "@/components/blog/write/Editor"
import React from "react"
import {useEffect , useState , useRef} from 'react'
import { Colors } from "../../../../../public/styles/colors/colors"
import "@/components/blog/write/styles.css"
import { Button } from "../../../../../src/components/common/button"
import { Spacer } from "../../../../../src/components/common/spacer"
import { Category } from "@/components/blog/write/Category"
import { WriteModal } from "@/components/blog/write/WriteModal" 
import { styles } from "@/components/blog/css/write.module.css"

export default function BlogWrite() {
  const [titleText , setTitleText] = useState<string>('');
  const [categoryList , setCategoryList] = useState([]);
  const [viewModal , setViewModal] = useState<boolean>(true);

  const childRef = useRef(null);
  let textData = '';

  function GetTextdata(){
    console.log("Getdata")
    if(childRef && childRef.current){
      textData = '';
      const parser = new DOMParser();
      const doc = parser.parseFromString(childRef.current.innerHTML, 'text/html');
      const outerDivElement = doc.querySelector('.ContentEditable__root');
      if(outerDivElement !== null){
        outerDivElement.childNodes.forEach(node => {
          textData += node.outerHTML;
          // console.log(textData);
        });
      }
    }else {
      console.log("childRef isn`t undefined");
    }
  }

  function SendData(){
    GetTextdata()
    console.log("SendData")
    console.log(categoryList)
    console.log(textData)
    setViewModal(true)
  }

  function TemporaryStorage(){
    console.log("TemporaryStorage")
    setViewModal(false)
  }

  return (
    <>
        <input
          placeholder = "제목을 입력하세요"
          type= "text"
          value = {titleText}
          onChange = {(e) => {
            setTitleText(e.target.value);
          }}
          style={{
            width: "100%",
            alignItems: "center",
            fontSize: "48px",
            border: "0px"
          }}
        />
        <Category categoryList = {categoryList} setCategoryList = {setCategoryList}/>
        <Editor ref= {childRef} />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent : "center",
          }}
        >
          <Button
            backgroundColor = {Colors.white}
            color = {Colors.purple}
            label = "임시저장"
            size = "middle"
            purpose="event"  
            onClick= {TemporaryStorage}
          />
          <Spacer shape="width" size = "30px"/>
          <Button
            backgroundColor = {Colors.purple}
            color = {Colors.white}
            label = "게시글 게시"
            size = "middle"
            purpose="event"
            onClick = {SendData}
          />
        </div>
        { viewModal && <WriteModal viewModal = {viewModal} setViewModal = {setViewModal} />}
    </>
  )
}
