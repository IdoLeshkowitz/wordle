import {AiFillInfoCircle} from "react-icons/ai";
import {useEffect, useRef} from "react";


const Header = (props: any) => {
    const {modalActive, setModalActive} = props;
    const openModal = () => {
        if (modalActive===false) {
            console.log('clicked');
            setModalActive(true);
        }
    }
    return (<header className="game_page-header">
            <button onClick={openModal} className="game_page-header-info_btn" title="info">
                <AiFillInfoCircle/>
            </button>
        </header>)
}

export default Header;