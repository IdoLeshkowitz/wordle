import {useContext} from "react";
import {ModalContext} from "../providers/modal-context";

export interface UseGame {
    onKeyPressed: (key: string) => void;
    allWordsGuessed: string;
}


export const useGame = (): any => {

}
