import {addLetter, deleteLetter} from "../features/game/gameSlice";
import {Action, ActionCreatorWithPayload, PayloadAction} from "@reduxjs/toolkit";

interface KeyButton {
    name: string;
    action: PayloadAction<string> | Action ;
}

//----------!FUNCTION KEYS!-----------//
const functionKeys: KeyButton[] = [
    {
        name: "BACKSPACE",
        action: deleteLetter()
    },
]

//---------!LETTER KEYBUTTONS!---------//
const letterKeysCreator = (alphabet: string[]): KeyButton[] => {
    return alphabet.map((letter) => {
        return {
            name: letter,
            action: addLetter(letter)
        }
    })
}
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letterKeys = letterKeysCreator(alphabet.split(""));


export const keyValidtorMiddleware = (store: any) => (next: any) => (action: any) => {
    const keyName: string = action.payload.toUpperCase();
    const key = [ ...letterKeys, ...functionKeys].find((key) => key.name === keyName);
    if (key) {
        next(key.action)
    }

}

// create logger middleware that will work with configureStore