import {useContext} from "react";
import {GameContext} from "../pages/Game";

const Display = ({children}: any) => {
    const {state} = useContext(GameContext);
    const {guessedWords, amountOfGuesses, guessedWordLength} = state;
    const getDisplayGrid = (guessedWords: string[]) => {
        const output = Array(amountOfGuesses * guessedWordLength).fill('');
        for (let i = 0; i < guessedWords.length; i++) {
            for (let j = 0; j < guessedWords[i].length; j++) {
                output[i * guessedWordLength + j] = guessedWords[i][j];
            }
        }
        return output;
    }

    const getFocusedItemIndex = (displayGrid: string[]) => {
        const focusedItemIndex = displayGrid.findIndex((item) => item === '');
        return focusedItemIndex;
    }
    const getDisplayItemClass = (index: number, focusedItemIndex: number) => {
        if (index === focusedItemIndex) {
            return 'display-item focused';
        }
        return 'display-item';
    }
    const displayGrid = getDisplayGrid(guessedWords);
    const focusedItemIndex = getFocusedItemIndex(displayGrid);
    return (
        <div className="display">
            {displayGrid.map((displayItem, index) =>
                <div className={getDisplayItemClass(index, focusedItemIndex)}
                     key={index}
                >
                    {displayItem}
                </div>
            )}
        </div>
    )
}
export default Display;
