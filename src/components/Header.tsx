import {ModalContext} from "../providers/modal-context";
import {useContext} from "react";
import { AiFillInfoCircle} from "react-icons/ai";


const Header = () => {
    const {toggle: toggleModal} = useContext(ModalContext) ?? {};
    return (
        <header className="game_page-header">
            <button onClick={toggleModal} className="game_page-header-info_btn" name="info" title="info">
                <AiFillInfoCircle/>
            </button>
        </header>
    )
}

export default Header;