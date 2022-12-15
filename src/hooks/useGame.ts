import {useState} from "react";

export interface UseGame {
    onKeyDown: (event: KeyboardEvent) => void;
    allWordsGuessed:string;
}

export const useGame = (): any => {
}