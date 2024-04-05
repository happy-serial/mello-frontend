"use client"

import { useEffect , useState } from "react"
import { TabButtons } from "@/components/mypage/TabButtons"
import { ProfileDescription } from "@/components/mypage/ProfileDescription"
import { ActivityLog } from './../../../components/mypage/ActivityLog';
import { Friends } from './../../../components/mypage/Friends';
import { TempBlog } from "@/components/mypage/TempBlog";
import { Career_History } from "@/components/mypage/Career_History"
import { MyBlogs } from "@/components/mypage/MyBlogs"
import { Banner } from "@/components/mypage/Banner"
import { ProfileCard } from "@/components/mypage/ProfileCard"

export default function MyPage() {
  const [tab , setTab] = useState<string>("소개")
  const tabArray = ["소개","경험","게시물","활동내역","임시 저장"]

  useEffect(()=>{
    GetData()
  },[ ])

  const GetData = async() =>{
    console.log("GetDataFunction")
    console.log("useState에 data 저장 or 바로 컴포넌트로 데이터 보내주기")
  }

  const renderTabPage = ( page : string ) =>{
    switch (page){
      case '경험':
        return <Career_History/>
      case '활동기록':
        return <ActivityLog/>
      case '게시물':
        return <Friends/>
      case '소개':
        return <ProfileDescription/>
      case '임시 저장':
        return <TempBlog/>
      default : 
        return <div>ErrorPage</div>
    }
  }

  return (
    <div
      style={{
        display : "flex",
      }}
    >
      <Banner/>
      <ProfileCard/>
      <div
        style={{
          display : "block",
        }}
      >
        <TabButtons tab = {tab} setTab = {setTab} tabArray = {tabArray}/>
        {renderTabPage(tab)}
      </div>
    </div>
  )
}