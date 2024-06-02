// TODO: createdAt type should be Date
export type thumbnailResponse = {
  blogId: string;
  title: string;
  about: string;
  membershipId: string;
  authorName: string;
  viewCount: number;
  like: number;
  thumbnailUrl: string;
  accessStatus: string;
  commentCount: number;
  categoryName: string[];
  authorPhotoUrl: string;
  createdAt: string;
  updatedAt: string;
};

export type createTemporaryBlogResponse = {
  tempBlogId: string;
};

export type ImageURLRequest = {
  imageUrl: string;
};

export type tempBlogIdResponse = {
  tempBlogId: string;
  createdAt: string;
};

export type tempBlogRequest = {
  tempBlogId: string;
  title: string;
  category: string[];
  contents: string;
  classification: "DESIGN" | "TECH" | "CAREER" | "ETC";
};

export type saveBlogRequest = {
  tempBlodId: "8dba3e2a-dbe5-4498-8700-a872e11ed794";
  thumbnailUrl: "https://mello-s3-dev.s3.ap-northeast-1.amazonaws.com/image/1c9ac78d-1dfd-4870-81e4-11ae76921cf1";
  accessStatus: "PUBLIC";
  about: "string";
  classification: "ETC"; // 대분류이다.
};
