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
