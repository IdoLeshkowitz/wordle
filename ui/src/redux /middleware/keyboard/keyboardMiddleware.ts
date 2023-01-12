import {createAction, Middleware} from "@reduxjs/toolkit";
import {closeModal} from "../../features/modals/modalSlice";
import {incomingLetter} from "../game/gameMiddleware";

//event action which is dispatched when a key is pressed
export const onKeyUp = createAction<string>('keyboard/onKeyDown');

const keyboardMiddleware: Middleware = ({dispatch, getState}) => (next) => (action) => {
    next(action)
    if (action.type === onKeyUp.type) {
        const key = action.payload.toUpperCase();
        if (key === 'ENTER' || key === 'ESCAPE') {
            dispatch(closeModal());
        } else if (/[A-Z]/.test(key)) {
            dispatch(incomingLetter(key));
        }
    }
}

export default keyboardMiddleware;
