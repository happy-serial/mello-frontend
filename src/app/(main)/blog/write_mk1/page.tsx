"use client"
import {Editor} from "@/components/blog/write/Editor"
import React from "react"
import {useEffect , useState , useRef} from 'react'; 
import { Colors } from "../../../../../public/styles/colors/colors";
import "@/components/blog/write/styles.css"
import { Button } from "../../../../../src/components/common/button"
import { Spacer } from "../../../../../src/components/common/spacer"

export default function BlogWrite() {
  const [titleText , setTitleText] = useState<string>('');
  const childRef = useRef();
  useEffect(()=>{
    if(childRef.current){
      console.log(childRef.current.innerHTML)
    }
  })

  function GetTextdata(){
    console.log("Getdata")
    const textdata = childRef.current.innerHTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(textdata, 'text/html');
    const outerDivElement = doc.querySelector('.ContentEditable__root');
    let innerHTMLString = '';
    outerDivElement.childNodes.forEach(node => {
        innerHTMLString += node.outerHTML;
    });
    console.log(innerHTMLString);
  }

  function SendData(){
    GetTextdata()
    console.log("SendData")
  }

  function TemporaryStorage(){
    console.log("TemporaryStorage")
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
        <input
          placeholder = "hashtag"
          style={{
            color: "gray",
            width: "100%",
            alignItems: "center",
            fontSize: "24px",
            border: "0px"
          }}
        />
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
    </>
  )
}
