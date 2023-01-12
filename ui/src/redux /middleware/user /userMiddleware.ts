import {MiddlewareAPI, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {User} from "../../features/user/User";
import {signIn, signOut} from "../../features/user/userSlice";
import {closeModal} from "../../features/modals/modalSlice";

const signInFlow = ({dispatch, getState}: MiddlewareAPI) => (next: Dispatch) => async (action: PayloadAction<User>) => {
    //save the given user in the local storage
    //update user slice in the store with the given user
    //close the sign in modal
    next(action);
    if (action.type === signIn.type) {
        const payloadUser = action.payload;
        localStorage.setItem('user', JSON.stringify(payloadUser));
        dispatch(closeModal());
    }
}

const signOutFlow = ({
                         dispatch,
                         getState
                     }: MiddlewareAPI) => (next: Dispatch) => async (action: PayloadAction<User>) => {
    //remove the user from the local storage
    //update user slice in the store with the initial user
    next(action);
    if (action.type === signOut.type)
    {
        localStorage.removeItem('user');
    }
}

const userMiddleware = [signInFlow, signOutFlow];
export default userMiddleware;