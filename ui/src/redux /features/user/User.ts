export interface User {
    userName: string,
    id?: number
    password: string | null
}
export const userInitialState: UserState = {
    currentUser:{
        userName: 'guest',
        password: null,
    }
}

export interface UserState{
    currentUser: User
}