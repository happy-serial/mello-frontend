import { ImageURLRequest } from "@/model";
import { DefaultResponse, serverUrl } from ".";
import { Dispatch, SetStateAction } from "react";
import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  LexicalEditor,
  ParagraphNode,
} from "lexical";
import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
  TRANSFORMERS,
} from "@lexical/markdown";

// 임시토큰사용
const token =
  "eyJVc2VybmFtZSI6Iuq5gOq5gOyDgeyDgeyImOyImCIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiIwNmQyYTJiZS1mYmEzLTQ0ZWEtOTM1YS1mOTcyMGMyYmEwYmYiLCJhdXRoIjoiTk9STUFMX01FTUJFUiIsImV4cCI6MTcxNDMxNTQzN30.GVWXtcy93NgNzP0_uP9Fz17rC1PMu86Er8rEedxD5S0";

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
  console.log("summarizeText called");
  try {
    const response = await fetch(`${serverUrl}/gpt/convert-to-markdown`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        detail: "CONVERT_WITH_SUPPLEMENT",
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
