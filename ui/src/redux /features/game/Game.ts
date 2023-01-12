export interface GameState {
    settings: {
        numberOfWords: number; charsInWord: number;
    }
    currentWordIndex: number;
    currentGuess : string ;
    previousGuesses : string[] ;
    readyForGuess : boolean ;
}

export const initialState: GameState = {
    settings: {
        numberOfWords: 5,
        charsInWord: 5,
    },
    currentWordIndex: 0,
    currentGuess: '',
    previousGuesses: [],
    readyForGuess: false,
}