import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./Game";




const gameSlice = createSlice({
    initialState ,
    name: 'game',
    reducers: {
        setCurrentGuess(state, action: PayloadAction<string>) {
            state.currentGuess = action.payload;
        },
        setReadyForGuess(state, action: PayloadAction<boolean>) {
            state.readyForGuess = action.payload;
        },
        setCurrentWordIndex(state, action: PayloadAction<number>) {
            state.currentWordIndex = action.payload;
        },
        setGuess(state, action: PayloadAction<string>) {
            state.previousGuesses.push(action.payload);
        }
    },
})


export const {setCurrentGuess, setReadyForGuess, setGuess, setCurrentWordIndex} = gameSlice.actions;

export default gameSlice.reducer