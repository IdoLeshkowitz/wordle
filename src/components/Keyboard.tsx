interface KeyboardProps {
    onKeyboardClick: (letter: string) => void;
}

const Keyboard = (props:KeyboardProps) => {
    const {onKeyboardClick} = props;
    const keyboardClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        const letter = e.currentTarget.innerText;
        onKeyboardClick(letter);
    }

    const currentFocus = 0;
    return (
        <div className="keyboard">
            <div className="keyboard-row">
                <button className="keyboard-btn" onClick={keyboardClicked}>W</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>E</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>Q</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>R</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>T</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>Y</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>U</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>I</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>O</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>P</button>
            </div>
            <div className="keyboard-row">
                <button className="keyboard-btn" onClick={keyboardClicked}>A</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>S</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>D</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>F</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>G</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>H</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>J</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>K</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>L</button>
            </div>
            <div className="keyboard-row">
                <button className="keyboard-btn wide" onClick={keyboardClicked}>ENTER</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>Z</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>X</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>C</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>V</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>B</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>N</button>
                <button className="keyboard-btn" onClick={keyboardClicked}>M</button>
                <button className="keyboard-btn wide" onClick={keyboardClicked}>BACKSPACE</button>
            </div>
        </div>
    )
}


export default Keyboard;