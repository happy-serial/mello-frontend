"use client"
import {Editor} from "@/components/blog/write/Editor"
import React from "react"
import {useEffect , useState} from 'react'; 
import { Colors } from "../../../../../public/styles/colors/colors";
import "@/components/blog/write/styles.css"
import { Button } from "../../../../../src/components/common/button"
import { Spacer } from "../../../../../src/components/common/spacer"
import useLexicalComposerContext from '@lexical/react/LexicalComposerContext';



export default function BlogWrite() {
const [titleText , setTitleText] = useState<string>('');

// const [editordata] = useLexicalComposerContext();

function Getdata(){
  console.log("Getdata")
}

function SendData(){
  console.log("SendData")
  console.log(titleText)
}

function TemporaryStorage(){
  console.log("TemporaryStorage")
}

return (<>
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
      <Editor/>
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
