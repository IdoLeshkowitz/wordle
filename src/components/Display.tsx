import {ReactElement} from "react";

const Display = ({children}: any) => {
    return (<div className="display">
        {children}
    </div>)
}

interface DisplayRowProps {
    guessedWord: string;

}

const Row = (props: DisplayRowProps): ReactElement => {
    const {guessedWord} = props;
    console.log('rendering row', guessedWord);
    // add spaces so that guessedWord will have 5 characters
    const displayedGuessedWord = guessedWord + ' '.repeat(5 - guessedWord.length);
    return (
        <>
            {displayedGuessedWord.split('').map((letter, index) => {
                    return (
                        <div className="display-item" key={index}>{letter}</div>
                    )
                }
            )}
        </>
    )
}
Display.Row = Row;
export default Display;