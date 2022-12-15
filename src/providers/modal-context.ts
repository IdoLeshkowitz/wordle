import {createContext} from "react";
import {UseModal} from "../hooks/useModal";

export const ModalContext = createContext<UseModal| null>(null);

