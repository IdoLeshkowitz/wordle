import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface GameState {
    guessedWords: string [];
    currentWordIndex: number;
    numberOfWords: number;
    charsInWord: number;
}

const initialState: GameState = {
    guessedWords: [],
    currentWordIndex: 0,
    numberOfWords: 5,
    charsInWord: 5,
}

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