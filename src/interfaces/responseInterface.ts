import { user } from "./usersInteface";

export interface ResponseInterface {
    status: number,
    message: string,
    data?: any,
    access_token?: string,
    user?: user,
    token_type?: string
}