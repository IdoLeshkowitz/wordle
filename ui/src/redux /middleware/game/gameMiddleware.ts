import {createAction, Middleware} from "@reduxjs/toolkit";
import {setCurrentGuess, setCurrentWordIndex, setGuess, setReadyForGuess} from "../../features/game/gameSlice";
import display from "../../../components/Display";

export const incomingLetter = createAction<string>('game/incomingLetter');
export const wordGuessed = createAction<string>('game/wordGuessed');
export const gameEnded = createAction('game/gameEnded');

const gameMiddleware: Middleware = ({dispatch, getState}) => (next) => (action) => {
    next(action)
    if (action.type === incomingLetter.type) {
        if (getState().game.readyForGuess) {
            const letter = action.payload;
            const updatedGuess = getState().game.currentGuess + letter;
            const isWordFull = updatedGuess.length === getState().game.settings.charsInWord;
            if (isWordFull) {
                dispatch(wordGuessed(updatedGuess));
            } else {
                dispatch(setCurrentGuess(updatedGuess));
            }
        }
    }
    if (action.type === wordGuessed.type) {
        next(action);
        if (getState().game.currentWordIndex < getState().game.settings.numberOfWords -1) {
            dispatch(setCurrentWordIndex(getState().game.currentWordIndex + 1));
        } else {
            dispatch(gameEnded());
        }
        dispatch(setCurrentGuess(''));
        dispatch(setGuess(action.payload));
    }
    if (action.type === gameEnded.type) {
        next(action);
        dispatch(setReadyForGuess(false));
    }
}
export default gameMiddleware;
