import {
} from "@/model";
import { DefaultResponse, serverUrl } from ".";
// 임시토큰사용
const token = "eyJVc2VybmFtZSI6IuyEnOuylOyImCIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiI5OTUxMDA1ZC04ZTc0LTQ2NDAtYmEwYi0wNTg2YmNkYjQwM2IiLCJhdXRoIjoiTk9STUFMX01FTUJFUiIsImV4cCI6MTcxMDE1NDg0NX0.ZRQUw0jcjn_qPsseEeSxrQUZU3Vyd65FlFQF0a20H9g"

export const GetMyPageData = async () =>{
  console.log("GetMyPage")
  try {
    const response = await fetch(`${serverUrl}/membership/view-my-page`,{
      method: "GET",
      cache: "no-store",
      headers: {
        "Authorization":  `Bearer ${token}`,
      },
    })
    const responseData: DefaultResponse<Object> = await response.json();
    if (responseData.statusCode == 200){
      return responseData.data
    } else {
      throw new Error(`Fail to create temporary blog: ${JSON.stringify(responseData)}`)
    }
  } catch (error){
    console.error(error);
  }
}