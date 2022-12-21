import {createContext, useContext, useEffect} from "react";
import {GameContext} from "../pages/Game";
import {GameActionType} from "../gameLogic/gameReducer";

const helperFunctions = {
    isKeyALetter: (key: string) => {
        return (/^[A-Z]$/.test(key))
    },
    isKeyBackspace: (key: string) => {
        return (key === "BACKSPACE")
    },
    isKeyEscape: (key: string) => {
        return (key === "ESCAPE")
    },
    isKeyEnter: (key: string) => {
        return (key === "ENTER")
    },
}

interface VirtualKeyboardButton {
    buttonKey: string,
    buttonSize: string
    rowNum: number;
}

const virtualKeyboardButtons: VirtualKeyboardButton[] = [
    {buttonKey: 'Q', buttonSize: 'normal', rowNum: 1},
    {buttonKey: 'W', buttonSize: 'normal', rowNum: 1},
    {buttonKey: 'E', buttonSize: 'normal', rowNum: 1},
    {buttonKey: 'R', buttonSize: 'normal', rowNum: 1},
    {buttonKey: 'T', buttonSize: 'normal', rowNum: 1},
    {buttonKey: 'Y', buttonSize: 'normal', rowNum: 1},
    {buttonKey: 'U', buttonSize: 'normal', rowNum: 1},
    {buttonKey: 'I', buttonSize: 'normal', rowNum: 1},
    {buttonKey: 'O', buttonSize: 'normal', rowNum: 1},
    {buttonKey: 'P', buttonSize: 'normal', rowNum: 1},
    {buttonKey: 'A', buttonSize: 'normal', rowNum: 2},
    {buttonKey: 'S', buttonSize: 'normal', rowNum: 2},
    {buttonKey: 'D', buttonSize: 'normal', rowNum: 2},
    {buttonKey: 'F', buttonSize: 'normal', rowNum: 2},
    {buttonKey: 'G', buttonSize: 'normal', rowNum: 2},
    {buttonKey: 'H', buttonSize: 'normal', rowNum: 2},
    {buttonKey: 'J', buttonSize: 'normal', rowNum: 2},
    {buttonKey: 'K', buttonSize: 'normal', rowNum: 2},
    {buttonKey: 'L', buttonSize: 'normal', rowNum: 2},
    {buttonKey: 'ENTER', buttonSize: 'wide', rowNum: 3},
    {buttonKey: 'Z', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'X', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'C', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'V', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'B', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'N', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'M', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'BACKSPACE', buttonSize: 'wide', rowNum: 3},
]
const virtualKeyboardRows = [1, 2, 3].map((rowNum) => {
    return virtualKeyboardButtons.filter((button) => button.rowNum === rowNum)
});
const KeyboardHandlerContext = createContext({} as any);
const Keyboard = () => {
    const {dispatch, state} = useContext(GameContext);
    const {isKeyALetter, isKeyEscape, isKeyBackspace, isKeyEnter} = helperFunctions;
    const onKeyboardClick = (key: string) => {
        key = key.toUpperCase();
        if (isKeyEnter(key)) dispatch({type: GameActionType.ENTER});
        if (isKeyEscape(key)) dispatch({type: GameActionType.ESCAPE});
        if (isKeyBackspace(key)) dispatch({type: GameActionType.REMOVE_LETTER});
        if (isKeyALetter(key)) {
            dispatch({type: GameActionType.ADD_LETTER, payload: key});
        }
    }
    const convertToKeyAndCallHandler = (e: any) => {
        onKeyboardClick(e.key);
    }
    useEffect(() => {
        window.addEventListener("keydown", convertToKeyAndCallHandler);
        return () => {
            window.removeEventListener("keydown", convertToKeyAndCallHandler);
        }
    }, []);

    return (
        <KeyboardHandlerContext.Provider value={{onKeyboardClick}}>
            <div className="keyboard">
                {virtualKeyboardRows.map((rowButtons, index) =>
                    <KeyboardRow key={index}>
                        {rowButtons}
                    </KeyboardRow>
                )}
            </div>
        </KeyboardHandlerContext.Provider>
    )
}

const KeyboardButton = (props: { buttonKey: string, buttonSize: string }) => {
    const {buttonKey, buttonSize} = props;
    const {onKeyboardClick} = useContext(KeyboardHandlerContext);
    const getButtonClass = () => {
        return `keyboard-btn ${buttonSize === 'wide' ? 'wide' : ''}`;
    }
    return (
        <button
            className={getButtonClass()}
            onClick={() => onKeyboardClick(buttonKey)}
            key={buttonKey}
        >
            {buttonKey}
        </button>
    )
}

const KeyboardRow = ({children}: any) => {
    return (
        <div className="keyboard-row">
            {children.map((button: VirtualKeyboardButton) =>
                <KeyboardButton
                    buttonKey={button.buttonKey}
                    buttonSize={button.buttonSize}
                    key={button.buttonKey}
                />
            )}
        </div>
    )
}
export default Keyboard;