import React, {createContext, ReactElement, useContext, useEffect} from "react";
import {AiOutlineEnter} from "react-icons/ai";
import {BsReverseBackspaceReverse} from "react-icons/all";
import {useAppDispatch, useAppSelector} from "../hooks";
import {addLetter,deleteLetter} from "../features/game/gameSlice";
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
    displayed?: ReactElement;
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
    {buttonKey: 'BACKSPACE', buttonSize: 'wide', rowNum: 3, displayed: <BsReverseBackspaceReverse size={12}/>},
    {buttonKey: 'Z', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'X', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'C', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'V', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'B', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'N', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'M', buttonSize: 'normal', rowNum: 3},
    {buttonKey: 'ENTER', buttonSize: 'wide', rowNum: 3, displayed: <AiOutlineEnter size={12}/>},
]
const virtualKeyboardRows = [1, 2, 3].map((rowNum) => {
    return virtualKeyboardButtons.filter((button) => button.rowNum === rowNum)
});
const KeyboardHandlerContext = createContext({} as any);


const Keyboard = () => {
    const {isKeyALetter, isKeyEscape, isKeyBackspace, isKeyEnter} = helperFunctions;
    const {waitingForInput} = useAppSelector(state => state.game);
    const dispatch= useAppDispatch()
    const onLetterKeyClick = (letterKey: string) => {
        if (waitingForInput) {
            dispatch(addLetter(letterKey))
        }
    }

    const onFunctionKeyClick = (functionKey: string) => {
        if(isKeyBackspace(functionKey)){
            dispatch(deleteLetter())
        }
    }
    const keyPushedHandler = (e: KeyboardEvent | string  ) : void  => {
        let key = '' ;
        if (e instanceof KeyboardEvent) {
            key = e.key.toUpperCase();
        }
        else if (typeof e === 'string') {
            key = e.toUpperCase();
        }
            //check key type and call handler
            if (isKeyALetter(key)) onLetterKeyClick(key);//A-Z
            if (isKeyBackspace(key)) onFunctionKeyClick(key);//BACKSPACE
            if (isKeyEnter(key)) onFunctionKeyClick(key);//ENTER
    }
    useEffect(() => {
        window.addEventListener("keydown", keyPushedHandler);
        return () => {
            window.removeEventListener("keydown", keyPushedHandler);
        }
    }, []);

    return (
        <KeyboardHandlerContext.Provider value={keyPushedHandler}>
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

const KeyboardButton = (props: { buttonKey: string, buttonSize: string, displayed?: ReactElement }) => {
    const {buttonKey, buttonSize, displayed} = props;
    const keyPushedHandler = useContext(KeyboardHandlerContext);
    const getButtonClass = () => {
        return `keyboard-btn ${buttonSize === 'wide' ? 'wide' : ''}`;
    }
    return (
        <button
            className={getButtonClass()}
            onClick={() => keyPushedHandler(buttonKey)}
            key={buttonKey}
        >
            {displayed || buttonKey}
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
                    displayed={button.displayed}
                />
            )}
        </div>
    )
}
export default Keyboard;