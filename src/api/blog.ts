import { DefaultResponse, serverUrl } from ".";

const token = "eyJVc2VybmFtZSI6IuyEnOuylOyImCIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiI5OTUxMDA1ZC04ZTc0LTQ2NDAtYmEwYi0wNTg2YmNkYjQwM2IiLCJhdXRoIjoiTk9STUFMX01FTUJFUiIsImV4cCI6MTcxMDE1NDg0NX0.ZRQUw0jcjn_qPsseEeSxrQUZU3Vyd65FlFQF0a20H9g"

enum ImageFileType {
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  GIF = 'image/gif',
  JPG = 'image/jpg',
}

export const sendImage = async ( file : ImageFileType ) => {
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
      return responseData.data.imageUrl;
    } else {
      throw new Error(`Failed to verify code: ${JSON.stringify(responseData)}`)
      console.log(response)
    }
  } catch (error){
    console.error(error);
  }
}