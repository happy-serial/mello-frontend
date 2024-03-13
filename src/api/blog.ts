import {
  ImageURLRequest
} from "@/model"
import { DefaultResponse, serverUrl } from ".";

// 임시토큰사용
const token = "eyJVc2VybmFtZSI6IuyEnOuylOyImCIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiI5OTUxMDA1ZC04ZTc0LTQ2NDAtYmEwYi0wNTg2YmNkYjQwM2IiLCJhdXRoIjoiTk9STUFMX01FTUJFUiIsImV4cCI6MTcxMTM2ODk5NH0.bayQTnYgjVrdqYwmKCjSbCedkyO9YlTfLq7N5jI1OVI"

export const getImageURL = async ( file : File ) => {
  try {
    const formData = new FormData();
    formData.append( "file" , file);
    
    const response = await fetch(`${serverUrl}/image`,{
      method: "POST",
      cache: "no-store",
      headers: {
        "Authorization":  `Bearer ${token}`,
      },
      body : formData
    })
    const responseData: DefaultResponse<ImageURLRequest> = await response.json();
    if (responseData.statusCode == 201){
      const imageUrl = responseData.data?.imageUrl;
      if (imageUrl !== null){
        return imageUrl
      }
    } else {
      throw new Error(`Failed to upload image: ${JSON.stringify(responseData)}`)
    }
  } catch (error){
    console.error(error);
  }
}