import React from "react";
import Keyboard from "../components/Keyboard";
import Display from "../components/Display";
import {HelpModal} from "../components/HelpModal";
import Header from "../components/Header";


const Game = () => {
    return (
        <div className="game_page">
            {/*<HelpModal/>*/}
            {/*<Header/>*/}
            <div className="game_page-main">
                <Display/>
                <Keyboard/>
            </div>
        </div>
    );
}

export default Game;