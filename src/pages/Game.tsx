import React, {useEffect, useReducer} from "react";
import {gameReducer, gameInitialState, GameActionType} from "../gameLogic/gameReducer";
import {AiFillInfoCircle} from "react-icons/ai";
import Keyboard from "../components/Keyboard";
import Display from "../components/Display";
import {HelpModal} from "../components/HelpModal";
import Header from "../components/Header";

export const GameContext = React.createContext({} as any);
const Game = () => {
    const [state, dispatch] = useReducer(gameReducer, gameInitialState);
    return (
        <div className="game_page">
            <GameContext.Provider value={{dispatch, state}}>
                <HelpModal/>
                <Header/>
                <div className="game_page-main">
                    <Display/>
                    <Keyboard/>
                </div>
            </GameContext.Provider>
        </div>
    );
}

export default Game;