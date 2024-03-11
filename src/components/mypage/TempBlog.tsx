import { Colors } from "../../../public/styles/colors/colors";
import { Spacer } from "../common/spacer";
import { useState , useEffect } from "react";
import { TempBlogPreview } from '../common/tempBlogPreview';
import { showAllTemporaryblog } from "@/api"


interface TempBlogData {
  tempBlogId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export const TempBlog = () => {
  const [allTempBlogData , setAllTempBlogData] = useState<string>([])

  useEffect(()=>{
    getData()
  },[ ])

  const getData = async () =>{
    try{
      const tempBlogs = await showAllTemporaryblog();
      if(tempBlogs !== undefined){
        setAllTempBlogData(tempBlogs)
      }
    }catch(error){
      console.error("Error fetching temporary blog data :", error)
    }
  }

  return (
    <>
      <div>
        {
          allTempBlogData.map(( data , index )=>{
            return(
              <TempBlogPreview  
                key = {index}
                tempBlogId = {data.tempBlogId}
                title = {data.title}
                createdAt = {data.createdAt}
                updatedAt = {data.updatedAt}
              />
          )})
        }
      </div>
    </>
  );
};
