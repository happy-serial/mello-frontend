"use client"

import Editor from "@/components/blog/write/Editor"
import React from "react"
import { useEffect , useState , useRef } from 'react'
import { Colors } from "../../../../../public/styles/colors/colors"
import "@/components/blog/write/styles.css"
import { Button } from "../../../../../src/components/common/button"
import { Spacer } from "../../../../../src/components/common/spacer"
import { Category } from "@/components/blog/write/Category"
import { WriteModal } from "@/components/blog/write/WriteModal" 
import { createTemporaryBlog , saveTemporaryBlog } from "@/api"
import { useRouter } from "next/navigation";
import { useSearchParams} from "next/navigation"

export default function BlogWrite( {query} ) {
  const [blogID , setBlogID] = useState<string | undefined>('');
  const [titleText , setTitleText] = useState<string>('');
  const [categoryList , setCategoryList] = useState<string[]>([]);
  const [viewModal , setViewModal] = useState<boolean>(true);
  const blogTextId = useSearchParams()
  // const router = useRouter();
  // const tempBlogId = router.query;

  const childRef = useRef<HTMLDivElement>(null);
  let textData = '';

  useEffect(()=>{
    console.log(blogTextId.get('tempBlogId'))
  },[])

  function GetTextData(){
    console.log("Getdata")
    if(childRef && childRef.current){
      textData = '';
      const parser = new DOMParser();
      const doc = parser.parseFromString(childRef.current.innerHTML, 'text/html');
      const outerDivElement = doc.querySelector('.ContentEditable__root');
      // if(outerDivElement !== null){
      //   outerDivElement.childNodes.forEach(node => {
      //     textData += node.outerHTML;
      //   });
      // }
      if(outerDivElement !== null){
        Array.from(outerDivElement.childNodes).forEach(node => {
            if(node instanceof HTMLElement){
                textData += node.outerHTML;
            } else if (node instanceof Text) {
                textData += node.textContent;
            }
        });
    }
    }else {
      console.log("childRef isn`t undefined");
    }
  }

  const TemporaryStorage = async() =>{
    console.log("TemporaryStorage")
    if(blogID === ''){
      const tempBlogId = await createTemporaryBlog()
      setBlogID(tempBlogId?.tempBlogId)
      GetTextData()
      const success = await saveTemporaryBlog( tempBlogId?.tempBlogId , titleText , categoryList , textData)
      console.log("임시저장성공",success)
    }else{
      GetTextData()
      const success = await saveTemporaryBlog( blogID , titleText , categoryList , textData)
      console.log("임시저장성공",success)
    }
  }

  const SendData = async() => {
    console.log("SendData")
    await TemporaryStorage()
    setViewModal(true)
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
        { viewModal && <WriteModal blogID = {blogID} setViewModal = {setViewModal} />}
    </>
  )
}
