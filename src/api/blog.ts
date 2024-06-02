import { ImageURLRequest } from "@/model";
import Cookies from "js-cookie";
import { DefaultResponse, serverUrl } from ".";

// 임시토큰사용
const token =
  "eyJVc2VybmFtZSI6IuuwqeyKueyerCIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiIzN2IwOGZkZC1hOWZhLTQ1NDEtYWJmYy04M2Q3ZTY0ZTU4ZTgiLCJhdXRoIjoiTk9STUFMX01FTUJFUiIsImV4cCI6MTcxODI3NzgwNX0.v8GlbhgPF6FlH6SR1UI2lwU5VSxMbIMf22YJt5hIk1o";

export const getImageURL = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${serverUrl}/image`, {
      method: "POST",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const responseData: DefaultResponse<ImageURLRequest> =
      await response.json();
    if (responseData.statusCode == 201) {
      const imageUrl = responseData.data?.imageUrl;
      if (imageUrl !== null) {
        return imageUrl;
      }
    } else {
      throw new Error(
        `Failed to upload image: ${JSON.stringify(responseData)}`
      );
    }
  } catch (error) {
    console.error(error);
  }
};

export const summarizeText = async (
  text: string,
) => {
  const accessToken = Cookies.get("access-token")
  console.log("summarizeText called");
  try {
    const response = await fetch(`${serverUrl}/gpt/convert-to-markdown`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        detail: "CONVERT_WITH_SUMMARY",
        content: text,
      }),
    });

    if (!response.ok && response.body !== null) {
      throw new Error("Network response was not ok");
    }

    return response.body!.getReader();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};
