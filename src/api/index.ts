export const serverUrl = process.env.DEV_SERVER;
export type DefaultResponse<T> = {
    data: T | null,
    statusCode: number,
    message: Array<string>,
    success: boolean
}
export * from "./auth"