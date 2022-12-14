import {ModalContext} from "../providers/modal-context";
import {useContext} from "react";

const Header = ()=>{
    const {toggle: toggleModal} = useContext(ModalContext) ?? {};;
    return (
        <header className="game_page-header">
    <button onClick={toggleModal}></button>
        </header>
    )
}

export default Header ;