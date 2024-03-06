"use client"

import { useEffect , useState } from "react"
import { TabButtons } from "@/components/mypage/TabButtons"
import { MyProfile } from "@/components/mypage/MyProfile"
import { ActivityLog } from './../../../components/mypage/ActivityLog';
import { Friends } from './../../../components/mypage/Friends';

export default function MyPage() {
  const [tab , setTab] = useState<string>("Friends")
  const tabArray = ["ActivityLog","Friends"]
  useEffect(()=>{
    GetData()
  },[])
  
  const GetData = async() =>{
    console.log("GetDataFunction")
    console.log("useState에 data 저장 or 바로 컴포넌트로 데이터 보내주기")
  }

  return (
    <>
      <MyProfile/>
      <TabButtons setTab = {setTab} tabArray = {tabArray}/>
      {tab === "ActivityLog" && <ActivityLog/>}
      {tab === "Friends" && <Friends/>}
    </>
  )
}