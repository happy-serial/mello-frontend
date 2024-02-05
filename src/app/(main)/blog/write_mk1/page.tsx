// import { Editor } from "@/components/blog/write/articleWrite_mk1"
import Editor from "@/components/blog/write/Editor"
import React from "react"
import { useEffect } from "react"
import "@/components/blog/write/styles.css"

export default function BlogWrite() {
  return <>
    Use Lexical Editor 
    <div className="EditorWrapper">
      <Editor/>
    </div>
  </>
  
}
