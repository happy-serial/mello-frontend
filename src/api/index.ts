export const serverUrl = process.env.NEXT_PUBLIC_DEV_SERVER;
export type DefaultResponse<T> = {
    data: T | null,
    statusCode: number,
    message: Array<string>,
    success: boolean
}
export * from "./auth"