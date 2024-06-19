import {
  ImageURLRequest,
  blogThumbnailInfo,
  getPopularArticleResponse,
  saveBlogRequest,
  singleBlogItemResponse,
  tempBlogIdResponse,
  tempBlogRequest,
} from "@/model";
import Cookies from "js-cookie";
import { DefaultResponse } from ".";

// 임시토큰사용

export const getImageURL = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`/api/v1/image`, {
      method: "POST",
      cache: "no-store",
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

export const summarizeText = async (text: string) => {
  console.log("summarizeText called");
  try {
    const response = await fetch(`/api/v1/gpt/convert-to-markdown`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

export const saveImage = async (imageFile: File) => {
  const accessToken = Cookies.get("access-token");
  const formData = new FormData();

  formData.append("file", imageFile);

  try {
    const response = await fetch(`/api/v1/image`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });
    if (!response.ok && response.body !== null) {
      throw new Error("Network response was not ok");
    }

    const responseData: DefaultResponse<{ imageUrl: string }> =
      await response.json();

    if (responseData.statusCode === 201) {
      return responseData.data?.imageUrl;
    } else {
      throw new Error(`Failed to save image: ${JSON.stringify(responseData)}`);
    }
  } catch (error) {
    console.error("Failed to save image:", error);
  }
};

// TODO: 응답 201
export const createTempBlog = async () => {
  const accessToken = Cookies.get("access-token");
  try {
    const response = await fetch(`/api/v1/blog/temp`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok && response.body !== null) {
      throw new Error("Network response was not ok");
    }

    const responseData: DefaultResponse<tempBlogIdResponse> =
      await response.json();

    if (responseData.statusCode === 201) {
      return responseData.data?.tempBlogId;
    } else {
      throw new Error(
        `Failed to create temp blog: ${JSON.stringify(responseData)}`
      );
    }
  } catch (error) {
    console.error("Failed to create temp blog:", error);
  }
};

// TODO: 응답 200
export const saveTempBlog = async (tempBlogInfo: tempBlogRequest) => {
  const accessToken = Cookies.get("access-token");
  try {
    const response = await fetch(`/api/v1/blog/temp`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempBlogInfo),
    });
    if (!response.ok && response.body !== null) {
      throw new Error("Network response was not ok");
    }

    const responseData: DefaultResponse<Object> = await response.json();

    if (responseData.statusCode === 200) {
      return "success";
    } else {
      throw new Error(
        `Failed to save temp blog: ${JSON.stringify(responseData)}`
      );
    }
  } catch (error) {
    console.error("Failed to save temp blog:", error);
  }
};

// TODO: 응답 201
export const saveBlog = async (blogInfo: saveBlogRequest) => {
  const accessToken = Cookies.get("access-token");
  try {
    const response = await fetch(`/api/v1/blog`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogInfo),
    });
    if (!response.ok && response.body !== null) {
      throw new Error("Network response was not ok");
    }

    const responseData: DefaultResponse<Object> = await response.json();

    if (responseData.statusCode === 201) {
      return "success";
    } else {
      throw new Error(`Failed to save blog: ${JSON.stringify(responseData)}`);
    }
  } catch (error) {
    console.error("Failed to save blog:", error);
  }
};

export const getPopularArticleList = async (): Promise<
  blogThumbnailInfo[] | "failed"
> => {
  try {
    const response = await fetch(`/api/v1/blog/trend`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData: DefaultResponse<getPopularArticleResponse> =
      await response.json();

    if (responseData.statusCode === 200) {
      console.log(JSON.stringify(responseData.data!));

      const blogArray: blogThumbnailInfo[] = JSON.parse(
        JSON.stringify(responseData.data!)
      );

      return blogArray;
    } else {
      throw new Error(
        `Failed to load popular article list: ${JSON.stringify(responseData)}`
      );
    }
  } catch (error) {
    console.error("Failed to load popular article list: ", error);
    return "failed";
  }
};

export const getBlog = async (
  blogId: string
): Promise<singleBlogItemResponse | "failed"> => {
  try {
    const response = await fetch(`/api/v1/blog/${blogId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData: DefaultResponse<singleBlogItemResponse> =
      await response.json();

    if (responseData.statusCode === 200) {
      console.log("good!");
      return responseData.data!;
    } else {
      throw new Error(`Failed to get article: ${JSON.stringify(responseData)}`);
    }
  } catch (error) {
    console.error("Failed to get article: ", error);
    return "failed";
  }
};
