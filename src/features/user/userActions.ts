import {User} from "./IUser";

export enum UserActionType {
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT',

}

export type UserAction =
    | { type: UserActionType.SIGN_IN, payload: User }
    | { type: UserActionType.SIGN_OUT }