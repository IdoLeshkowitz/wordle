import {useAppSelector} from "../redux /store /hooks";
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
    mapGuessedWordsToCharsArray: (guessedWords: string[], numberOfGuesses : number , charsInWord : number) => {
        const output = [];
        for (let i = 0; i < guessedWords.length; i++) {
            for (let j = 0; j < guessedWords[i].length; j++) {
                output.push(guessedWords[i][j]);
            }
        }
        const totalAmountOfGuesses = numberOfGuesses * charsInWord;
        for (let i = 0; i < totalAmountOfGuesses ; i++) {
            if (output[i] === undefined) {
                output.push('');
            }
        }

        return output;
    }

}
const Display = ({children}: any) => {
    const {settings : {numberOfWords , charsInWord }, previousGuesses , currentGuess} = useAppSelector((state) => state.game);
    const { getFocusedItemIndex, getDisplayItemClass, mapGuessedWordsToCharsArray} = helperFunctions;
    const charsFormatedGuesses = mapGuessedWordsToCharsArray([...previousGuesses, currentGuess], numberOfWords, charsInWord);
    const focusedItemIndex = getFocusedItemIndex(charsFormatedGuesses);//returns the index of the focused item
    return (
        <div className="display">
            {charsFormatedGuesses.map((displayItem, index) =>
                <div className={getDisplayItemClass(index, focusedItemIndex)}
                     key={index}
                >
                    {displayItem}
                </div>
            )}
        </div>
    )};

export default Display