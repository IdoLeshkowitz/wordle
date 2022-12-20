export interface GameState {
    helpModalActive: boolean;
    guessedWords: string [];
    currentWordIndex: number;
}

export const gameInitialState: GameState = {
    helpModalActive: true,
    guessedWords: [],
    currentWordIndex: 0
}
