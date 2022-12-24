import {useAppSelector} from "../hooks";
const helperFunctions = {
    getDisplayItemClass: (index: number, focusedItemIndex: number) => {
        if (index === focusedItemIndex) {
            return 'display-item focused';
        }
        return 'display-item';
    },
    getFocusedItemIndex: (displayGrid: string[]) => {
        const focusedItemIndex = displayGrid.findIndex((item) => item === '');
        return focusedItemIndex;
    },
    getDisplayGrid: (guessedWords: string[], amountOfGuesses: number, guessedWordLength: number) => {
        const output = Array(amountOfGuesses * guessedWordLength).fill('');
        for (let i = 0; i < guessedWords.length; i++) {
            for (let j = 0; j < guessedWords[i].length; j++) {
                output[i * guessedWordLength + j] = guessedWords[i][j];
            }
        }
        return output;
    },

}
const Display = ({children}: any) => {
    const {guessedWords,charsInWord,numberOfWords } = useAppSelector((state) => state.game);
    const {getDisplayGrid, getFocusedItemIndex, getDisplayItemClass} = helperFunctions;
    const displayGrid = getDisplayGrid(guessedWords, numberOfWords, charsInWord);//return array with string for each display item [item1,item2,item3...]
    const focusedItemIndex = getFocusedItemIndex(displayGrid);//returns the index of the focused item
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
    )};

export default Display