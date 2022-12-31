import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./IGame";




const gameSlice = createSlice({
    initialState,
    name: 'game',
    reducers: {
        addLetter: (state, action: PayloadAction<string>) => {
            state.guessedWords[state.currentWordIndex] = (state.guessedWords[state.currentWordIndex] || '') + action.payload;
        },
        deleteLetter: (state) => {
            state.guessedWords[state.currentWordIndex] = state.guessedWords[state.currentWordIndex].slice(0, -1);
        }
    },
})

export const {addLetter, deleteLetter} = gameSlice.actions;

export default gameSlice.reducer