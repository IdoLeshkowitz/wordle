import {useState} from "react";

export interface UseModal {
    isOpen: boolean;
    toggle: () => void;
}

export const useModal = (): UseModal => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    return {isOpen, toggle};
}