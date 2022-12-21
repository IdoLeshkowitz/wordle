import {useContext} from "react";
import {GameContext} from "../pages/Game";

const Display = ({children}: any) => {
    const {state} = useContext(GameContext);
    const {guessedWords} = state;
    const extractDisplayGridFromState = () => {
        let displayGrid: string[] = Array(guessedWords.length * 5).fill('');
        let counter = 0; // to keep track of the index of the displayGrid
        for (let guessedWord of guessedWords) {
            for (let letter of guessedWord) {
                displayGrid[counter] = letter;
                counter++;
            }
        }
        return displayGrid;
    }
    const displayGrid = extractDisplayGridFromState();
    return (
        <div className="display">
            {displayGrid.map((displayItem, index ) =>
                <div className="display-item"
                     key={index}>
                    {displayItem}
                </div>)
            }
        </div>

    )
}
export default Display;
