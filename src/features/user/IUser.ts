export interface User {
    name: string,
    id: number
    password: string | null
}
export const userInitialState: User = {
    name: 'guest',
    id : 0 ,
    password: 'guest',
}