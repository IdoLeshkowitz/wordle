import Header from "../components/Header";
import Keyboard from "../components/Keyboard";
import Display from "../components/Display";
import HelpModal from "../components/HelpModal";
import {ModalContext} from "../providers/modal-context";
import {useModal} from "../hooks/useModal";
import {useGame} from "../hooks/useGame";
import {GameContext} from "../providers/game-context";
import {useEffect} from "react";

const Game = () => {
    const gameApi = useGame();
    const modalApi = useModal();
    useEffect(() => {
        document.addEventListener("keydown", gameApi.handleKeyDown);
    },[])
    return <div className="game_page">
        <ModalContext.Provider value={modalApi}>
            <GameContext.Provider value={gameApi}>
                <HelpModal>
                    <Header/>
                    <div className="game_page-main">
                        <Display/>
                        <Keyboard/>
                    </div>
                </HelpModal>
            </GameContext.Provider>
        </ModalContext.Provider>


    </div>
}

export default Game;