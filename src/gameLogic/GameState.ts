export interface GameState {
    helpModalActive: boolean;
    guessedWords: string [];
    currentWordIndex: number;
    readyToGuess: boolean;
}

export const gameInitialState: GameState = {
    helpModalActive: true,
    guessedWords: ["","","","",""],
    currentWordIndex: 0,
    readyToGuess: true,
}
