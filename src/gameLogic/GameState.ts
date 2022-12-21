export interface GameState {
    helpModalActive: boolean;
    guessedWords: string [];
    currentWordIndex: number;
    readyToGuess: boolean;
    amountOfGuesses : number;
     guessedWordLength: number;
}

export const gameInitialState: GameState = {
    helpModalActive: true,
    currentWordIndex: 0,
    readyToGuess: true,
    amountOfGuesses: 5,
    guessedWordLength: 5,
    guessedWords: [],
};