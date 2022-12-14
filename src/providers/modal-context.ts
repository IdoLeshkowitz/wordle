import {createContext} from "react";
import {ModalState} from "../hooks/modalState";

export const ModalContext = createContext<ModalState| null>(null);

