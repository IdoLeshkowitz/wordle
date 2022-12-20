import {gameInitialState, GameState} from "./GameState";
import {GameAction, GameActionType} from "./gameActions";

const gameReducer = (state: GameState, action: GameAction): GameState => {
    if (action.type === GameActionType.ADD_LETTER) {
        if (state.readyToGuess) {
            const currentWord = state.guessedWords[state.currentWordIndex];
            const newWord = currentWord + action.payload;
            const newWordISFull = newWord.length === 5;
            return {
                ...state,
                guessedWords: state.guessedWords.splice(state.currentWordIndex, 1, newWord),
                readyToGuess: !newWordISFull,
            }
                    }
    }
    if (action.type === GameActionType.REMOVE_LETTER) {
        const currentWord = state.guessedWords[state.currentWordIndex];
        const newWord = currentWord.slice(0, -1);
        return {
            ...state,
            guessedWords: state.guessedWords.splice(state.currentWordIndex, 1, newWord),
        }
    }
    return state ;
}

export {gameReducer, gameInitialState, GameActionType};