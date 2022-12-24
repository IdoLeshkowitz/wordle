export interface User{
    name: string,
    id?: string
}

interface Guest extends User{
    name: 'guest'
}

interface SignedInUser extends User{
    name: string,
    id: string
}
export const userInitialState: User = {
    name: 'guest'
}