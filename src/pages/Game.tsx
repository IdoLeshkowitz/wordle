import Header from "../components/Header";
import Keyboard from "../components/Keyboard";
import Display from "../components/Display";
import HelpModal from "../components/HelpModal";
import {useState} from "react";
import { ModalContext } from "../providers/modal-context";
import {modalState} from "../hooks/modalState";

const Game = () => {
    const isModalActive = useState(true);
    const modalApi = modalState();
    return <div className="game_page">
        <ModalContext.Provider value={modalApi}>
        <Header/>
        <HelpModal isActive ={isModalActive}>
            <div className="game_page-main">
                <Display/>
                <Keyboard/>
            </div>
        </HelpModal>
        </ModalContext.Provider>


    </div>
}

export default Game;