"use client";

import { Colors } from "../../../public/styles/colors/colors";
import { useRouter }  from "next/navigation";
import Link from "next/link";

interface TempBlogPreviewProps{
  tempBlogId : string;
  title : string;
  createdAt : string;
  updatedAt : string;
}

export const TempBlogPreview = ({
  tempBlogId,
  title,
  createdAt,
  updatedAt,
}: TempBlogPreviewProps) => {
  const router = useRouter();

  return (
    <>
      <div onClick = {()=>{
        router.push(`/blog/write_mk1?tempBlogId=${tempBlogId}`)
      }}>
        <div>제목{title}</div>
        <div>언제만듬?{createdAt}</div>
        <div>언제업뎃함?{updatedAt}</div>
      </div>
    </>
  );
};
