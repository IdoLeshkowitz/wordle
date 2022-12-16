import {useState} from "react";

export interface UseModal {
    isOpen: boolean;
    toggle: () => void;
    getIsOpen: () => boolean;
}

export const useModal = (): UseModal => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const getIsOpen=()=>isOpen;
    return {isOpen, toggle, getIsOpen};
}