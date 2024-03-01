import {
  createTemporaryBlogRequest,
} from "@/model";
import { DefaultResponse, serverUrl } from ".";

// 임시토큰사용
const token = "eyJVc2VybmFtZSI6IuyEnOuylOyImCIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiI5OTUxMDA1ZC04ZTc0LTQ2NDAtYmEwYi0wNTg2YmNkYjQwM2IiLCJhdXRoIjoiTk9STUFMX01FTUJFUiIsImV4cCI6MTcxMDE1NDg0NX0.ZRQUw0jcjn_qPsseEeSxrQUZU3Vyd65FlFQF0a20H9g"

export const createTemporaryBlog = async () =>{
  console.log("createTemporaryBlog")
  try {
    const response = await fetch(`${serverUrl}/blog/temp`,{
      method: "POST",
      cache: "no-store",
      headers: {
        "Authorization":  `Bearer ${token}`,
      },
    })
    const responseData: DefaultResponse<createTemporaryBlogRequest> = await response.json();
    if (responseData.statusCode == 201){
      return responseData.data
    } else {
      throw new Error(`Fail to create temporary blog: ${JSON.stringify(responseData)}`)
    }
  } catch (error){
    console.error(error);
  }
}

export const saveTemporaryBlog = async ( blogID : string|undefined , titleText : string , categoryList : string[] , textData : string ) =>{
  console.log("saveTemporaryBlog")

  const dataJSON = JSON.stringify({
    tempBlogId : blogID,
    title : titleText,
    category : categoryList,
    contents : textData,
  })

  try {
    const response = await fetch(`${serverUrl}/blog/temp`,{
      method: "PUT",
      cache: "no-store",
      headers: {
        "Authorization":  `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body : dataJSON
    })
    const responseData: DefaultResponse<Object> = await response.json();
    if (responseData.statusCode == 200){
      return responseData.success
    } else {
      throw new Error(`Failed to save temporary blog: ${JSON.stringify(responseData)}`)
    }
  } catch (error){
    console.error(error);
  }  
}

export const showTemporaryblog = async ( tempBlogId : string ) =>{
  console.log("showTemporaryBlog")
  try {
    const response = await fetch(`${serverUrl}/blog/temp/${tempBlogId}`,{
      method: "POST",
      cache: "no-store",
      headers: {
        "Authorization":  `Bearer ${token}`,
      },
    })
    const responseData: DefaultResponse<Object> = await response.json();
    if (responseData.statusCode == 201){
      return responseData.data
    } else {
      throw new Error(`Failed to load temporary blog: ${JSON.stringify(responseData)}`)
    }
  } catch (error){
    console.error(error);
  }  
}

export const showAllTemporaryblog = async ( tempBlogId : string ) =>{
  console.log("showAllTemporaryBlog")

  try {
    const response = await fetch(`${serverUrl}/blog/temp/${tempBlogId}`,{
      method: "POST",
      cache: "no-store",
      headers: {
        "Authorization":  `Bearer ${token}`,
      },
    })
    const responseData: DefaultResponse<Object> = await response.json();
    if (responseData.statusCode == 201){
      return responseData.data
    } else {
      throw new Error(`Failed to load all temporary blogs: ${JSON.stringify(responseData)}`)
    }
  } catch (error){
    console.error(error);
  }  
}

export const postBlog = async ( tempBlogId , thumbnailURL , privacy , aboutText ) =>{
  console.log("postTemporaryBlog")

  const dataJSON = JSON.stringify({
    tempBlogId : tempBlogId,
    thumbnailUrl : thumbnailURL,
    accessStatus : privacy,
    about : aboutText,
  })

  try {
    const response = await fetch(`${serverUrl}/blog`,{
      method: "POST",
      cache: "no-store",
      headers: {
        "Authorization":  `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: dataJSON
    })
    const responseData: DefaultResponse<Object> = await response.json();
    if (responseData.statusCode == 201){
      return responseData.success
    } else {
      throw new Error(`Failed to Blog Post: ${JSON.stringify(responseData)}`)
    }
  } catch (error){
    console.error(error);
  }  
}