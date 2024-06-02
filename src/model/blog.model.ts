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
  tempBlogId: string;
  thumbnailUrl: string;
  accessStatus: "PUBLIC" | "PRIVATE";
  about: string;
  classification: "DESIGN" | "TECH" | "CAREER" | "ETC";
};
