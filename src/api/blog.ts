import { DefaultResponse, serverUrl } from ".";

// 임시토큰사용
const token = "eyJVc2VybmFtZSI6IuyEnOuylOyImCIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiI5OTUxMDA1ZC04ZTc0LTQ2NDAtYmEwYi0wNTg2YmNkYjQwM2IiLCJhdXRoIjoiTk9STUFMX01FTUJFUiIsImV4cCI6MTcxMDE1NDg0NX0.ZRQUw0jcjn_qPsseEeSxrQUZU3Vyd65FlFQF0a20H9g"

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
    const responseData: DefaultResponse<Object> = await response.json();
    console.log(JSON.stringify(responseData));
    if (responseData.statusCode == 201){
      //추후 object 타입을 따로선언해주는걸로 bugfix 현재 치명적오류는아님.
      const imageUrl = responseData.data?.imageUrl ?? null;

      if (imageUrl !== null){
        return imageUrl
      }
    } else {
      throw new Error(`Failed to verify code: ${JSON.stringify(responseData)}`)
      console.log(response)
    }
  } catch (error){
    console.error(error);
  }
}

export const createTemporaryBlog = async () =>{
  try {
    const response = await fetch(`${serverUrl}/blog/temp`,{
      method: "POST",
      cache: "no-store",
      headers: {
        "Authorization":  `Bearer ${token}`,
      },
    })
    const responseData: DefaultResponse<Object> = await response.json();
    console.log(JSON.stringify(responseData));
    if (responseData.statusCode == 201){
      console.log(responseData)
      return responseData.data
    } else {
      throw new Error(`Failed to verify code: ${JSON.stringify(responseData)}`)
      console.log(response)
    }
  } catch (error){
    console.error(error);
  }
}

export const saveTemporaryBlog = async ( blogID : string , titleText : string , categoryList : string[] , textData : string ) =>{

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
    console.log(JSON.stringify(responseData));
    if (responseData.statusCode == 200){
      return responseData.success
    } else {
      throw new Error(`Failed to verify code: ${JSON.stringify(responseData)}`)
      console.log(response)
    }
  } catch (error){
    console.error(error);
  }  
}

export const showTemporaryblog = async ( tempBlogId : string ) =>{
  try {
    const response = await fetch(`${serverUrl}/blog/temp/${tempBlogId}`,{
      method: "POST",
      cache: "no-store",
      headers: {
        "Authorization":  `Bearer ${token}`,
      },
    })
    const responseData: DefaultResponse<Object> = await response.json();
    console.log(JSON.stringify(responseData));
    if (responseData.statusCode == 201){
      console.log(responseData)
      return responseData.data
    } else {
      throw new Error(`Failed to verify code: ${JSON.stringify(responseData)}`)
      console.log(response)
    }
  } catch (error){
    console.error(error);
  }  
}

export const showAllTemporaryblog = async ( tempBlogId : string ) =>{
  try {
    const response = await fetch(`${serverUrl}/blog/temp/${tempBlogId}`,{
      method: "POST",
      cache: "no-store",
      headers: {
        "Authorization":  `Bearer ${token}`,
      },
    })
    const responseData: DefaultResponse<Object> = await response.json();
    console.log(JSON.stringify(responseData));
    if (responseData.statusCode == 201){
      console.log(responseData)
      return responseData.data
    } else {
      throw new Error(`Failed to verify code: ${JSON.stringify(responseData)}`)
      console.log(response)
    }
  } catch (error){
    console.error(error);
  }  
}

export const postBlog = async () =>{
 
}