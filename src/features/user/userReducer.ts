import {userInitialState} from "./userState";
import {createReducer} from "@reduxjs/toolkit";
import {UserAction} from "./userActions";

export const userReducer = (state = userInitialState, action: UserAction)  => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                user: action.payload
            }
        case 'SIGN_OUT':
            return {
                ...state,
                user: userInitialState
            }
    }
}