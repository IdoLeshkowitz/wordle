import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface GameState {
    guessedWords: string [];
    currentWordIndex: number;
    numberOfWords: number;
    charsInWord: number;
    waitingForInput: boolean;
}

const initialState: GameState = {
    waitingForInput: true,
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
            const updatedWord = state.guessedWords[state.currentWordIndex] || '' + action.payload;
            const isGameFinished = updatedWordIndex === state.numberOfWords;
            const getUpdatedGuessedWords = () => {
                const updatedGuessedWords = [...state.guessedWords];
                updatedGuessedWords[state.currentWordIndex] = updatedWord;
                return updatedGuessedWords;
            }
            state.currentWordIndex = updatedWord.length === state.charsInWord ? state.currentWordIndex + 1 : state.currentWordIndex;
            state.guessedWords = getUpdatedGuessedWords();
        },
        deleteLetter: (state) => {
            state.guessedWords[state.currentWordIndex] = state.guessedWords[state.currentWordIndex].slice(0, -1);
        }
    },
})

export const {addLetter, deleteLetter} = gameSlice.actions;
export default gameSlice.reducer