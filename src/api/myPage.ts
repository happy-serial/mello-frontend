import { } from "@/model";
import { DefaultResponse } from ".";
// 임시토큰사용

export const GetMyPageData = async () => {
  console.log("GetMyPage");
  try {
    const response = await fetch(`/api/v1/membership/view-my-page`, {
      method: "GET",
      cache: "no-store",
    });
    const responseData: DefaultResponse<Object> = await response.json();
    if (responseData.statusCode == 200) {
      return responseData.data;
    } else {
      throw new Error(
        `Fail to create temporary blog: ${JSON.stringify(responseData)}`
      );
    }
  } catch (error) {
    console.error(error);
  }
};
