import { profileModel } from "./user.model"

// TODO: createdAt type should be Date
export type thumbnailResponse = {
    user: profileModel;
    image: string;
    createdAt: string;
    title: string;
    summary: string;
    viewCount: number;
    commentCount: number;
    likeCount: number;
    categories: string[];
}