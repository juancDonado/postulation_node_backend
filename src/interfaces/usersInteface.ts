export interface user {
    id: number,
    first_name: string,
    last_name: string,
    date_birth: string,
    address: string,
    token: string,
    password: string,
    mobile_phone: string,
    email: string
}

export interface getUser {
    id: number,
    first_name: string,
    last_name: string,
    date_birth: string,
    mobile_phone: string,
    email: string,
    address: string,
    session_active: boolean
}