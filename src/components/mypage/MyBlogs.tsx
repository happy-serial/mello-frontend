import { Colors } from "../../../public/styles/colors/colors";
import { Spacer } from "../common/spacer";
import { useState , useEffect } from "react";



export const MyBlogs = () => {
  const [blogs , setBlogs] = useState<string>([])

  useEffect(()=>{
    getData()
  },[ ])

  const getData = async () =>{
    try{
      // const myBlogs = await showAllTemporaryblog();
      const myBlogs = "푸하하"
      if(myBlogs !== undefined){
        setBlogs(myBlogs)
      }
    }catch(error){
      console.error("Error fetching temporary blog data :", error)
    }
  }

  return (
    <>
      <div>
        미야옹 마이블로그다용
      </div>
    </>
  );
};
