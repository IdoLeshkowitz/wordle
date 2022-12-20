import {useContext, useEffect} from "react";
import {KeyboardContext} from "../pages/Game";
import {GameState} from "../gameLogic/GameState";
import {GameActionType} from "../gameLogic/gameReducer";

const helperFunctions = {
    isKeyALetter: (key: string) => {return (/^[A-Z]$/.test(key))},
    isKeyBackspace: (key: string) => {return (key === "BACKSPACE")},
    isKeyEscape: (key: string) => {return (key === "ESCAPE")},
    isKeyEnter: (key: string) => {return (key === "ENTER")},
}
const Keyboard = () => {
    const {dispatch, state} = useContext(KeyboardContext);
    const {isKeyALetter,isKeyEscape, isKeyBackspace, isKeyEnter} = helperFunctions;
    const onKeyboardClick = (key: string) => {
        key = key.toUpperCase();
        if (isKeyEnter(key))dispatch({type : GameActionType.ENTER});
        if (isKeyEscape(key))dispatch({type : GameActionType.ESCAPE});
        if (isKeyBackspace(key))dispatch({type : GameActionType.REMOVE_LETTER});
        if(isKeyALetter(key)) {
            dispatch({type: GameActionType.ADD_LETTER, payload: key});
        }
    }

    useEffect(() => {
        window.addEventListener("keyup", (e: KeyboardEvent) => onKeyboardClick(e.key));
        return () => {
            window.removeEventListener("keydown", (e: KeyboardEvent) => onKeyboardClick(e.key));
        }}, []);

    return (
        <div className="keyboard">
            <div className="keyboard-row">
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>A
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>S
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>D
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>F
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>G
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>H
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>J
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>K
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>L
                </button>
            </div>
            <div className="keyboard-row">
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>W
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>E
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>Q
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>R
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>T
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>Y
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>U
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>I
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>O
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>P
                </button>
            </div>
            <div className="keyboard-row">
                <button className="keyboard-btn wide"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>ENTER
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>Z
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>X
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>C
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>V
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>B
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>N
                </button>
                <button className="keyboard-btn"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>M
                </button>
                <button className="keyboard-btn wide"
                        onClick={(e: any) => onKeyboardClick(e.currentTarget.innerText)}>BACKSPACE
                </button>
            </div>
        </div>
    )
}

export default Keyboard;