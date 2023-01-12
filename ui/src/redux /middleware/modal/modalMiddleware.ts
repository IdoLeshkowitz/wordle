import {Middleware} from "@reduxjs/toolkit";
import {closeModal, openModal} from "../../features/modals/modalSlice";
import {setReadyForGuess} from "../../features/game/gameSlice";

const modalMiddleware: Middleware = ({dispatch, getState}) => (next) => (action) => {
    next(action)
    if (action.type === openModal.type) {
        //announce game slice not to accept incoming letters
        dispatch(setReadyForGuess(false));
    }
    if (action.type === closeModal.type){
        //announce game slice to accept incoming letters
        dispatch(setReadyForGuess(true));
    }
}

export default modalMiddleware;