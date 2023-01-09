export interface GameState {
    guessedWords: string [];
    currentWordIndex: number;
    numberOfWords: number;
    charsInWord: number;
}

export const initialState: GameState =  {
    guessedWords: [],
    currentWordIndex: 0,
    numberOfWords: 5,
    charsInWord: 5,
}