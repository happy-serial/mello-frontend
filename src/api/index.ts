export const serverUrl = process.env.NEXT_PUBLIC_DEV_SERVER;
export type DefaultResponse<T> = {
    data: T | null,
    statusCode: number,
    messages: Array<string>,
    success: boolean
}
export * from "./auth"
export * from "./tempblog"
export * from "./blog"
export * from "./myPage"