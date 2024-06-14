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

export type blogThumbnailInfo = {
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
  classification: string;
  createdAt: string;
  updatedAt: string;
};

export type getPopularArticleResponse = {
  values: blogThumbnailInfo[];
  hasNext: boolean;
  lastIndex: string;
};

export type singleBlogItemResponse = {
  blogId: string;
  title: string;
  content: string;
  like: number;
  viewCount: number;
  authorName: string;
  backgroundImageUrl: null;
  comments: string[];
  blogAccessStatus: string;
  about: string;
  thumbnailUrl: string;
  commentCount: number;
  categoryName: string[];
  isAuthorFollow: boolean;
  authorPhotoUrl: string;
  isLike: boolean;
  classification: string;
  authorIsMe: boolean;
  createdAt: string;
  updatedAt: string;
};
