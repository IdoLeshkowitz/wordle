import {useState} from "react";

export interface ModalState {
    isOpen: boolean;
    toggle: () => void;
}

export const modalState = (): ModalState => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    return {isOpen, toggle};
}