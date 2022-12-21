import {gameInitialState, GameState} from "./GameState";
import {GameAction, GameActionType} from "./gameActions";

const gameReducer = (state: GameState, action: GameAction): GameState => {
    const {readyToGuess, guessedWords, currentWordIndex, helpModalActive} = state;
    if (action.type === GameActionType.ADD_LETTER) {
        if (state.readyToGuess) {
            const currentWord = guessedWords[currentWordIndex] || "";
            const newWord = currentWord + action.payload;
            const newGuessedWords = [...guessedWords];
            newGuessedWords[currentWordIndex] = newWord;
            const isCurrentWordComplete = newWord.length === 5;
            const updatedWordIndex = isCurrentWordComplete ? currentWordIndex + 1 : currentWordIndex;
            if ((updatedWordIndex) !== currentWordIndex) console.log('moved to a new word')
            if (currentWordIndex > 4) return state;
            return {...state, guessedWords: newGuessedWords, currentWordIndex: updatedWordIndex};
        }
    }
    if (action.type === GameActionType.REMOVE_LETTER) {
    }

    if (action.type === GameActionType.ENTER) {
        if (helpModalActive) return {...state, helpModalActive: false};
    }

    if (action.type === GameActionType.ESCAPE) {
        if (helpModalActive) return {...state, helpModalActive: false};
    }
    if (action.type === GameActionType.TOGGLE_HELP_MODAL) {
        return {...state, helpModalActive: !helpModalActive};
    }
    return state;
}

export {gameReducer, gameInitialState, GameActionType};