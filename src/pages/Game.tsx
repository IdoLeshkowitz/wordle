import React, {useEffect, useReducer} from "react";
import {gameReducer, gameInitialState, GameActionType} from "../gameLogic/gameReducer";
import {AiFillInfoCircle} from "react-icons/ai";
import Keyboard from "../components/Keyboard";
import Display from "../components/Display";

export const GameContext = React.createContext({} as any);
const Game = () => {
    const [state, dispatch] = useReducer(gameReducer, gameInitialState);
    const {helpModalActive}=state;
    return (
        <div className="game_page">
            {helpModalActive &&
                <div className='modal-container active' tabIndex={0}>
                    <div className="modal-content">
                        <button className="modal-content-escape_btn" onClick={()=>dispatch({type : GameActionType.TOGGLE_HELP_MODAL})}>X</button>
                        <p className="modal-content-description">game instructions</p>
                    </div>
                </div>
            }
            <header className="game_page-header">
                <input type="checkbox"  id="openModal" className="hidden" />
                <label htmlFor="openModal" className="game_page-header-info_btn"
                       title="info"><AiFillInfoCircle/></label>
            </header>
            <div className="game_page-main">
                <GameContext.Provider value={{dispatch, state}}>
                    <Display/>
                    <Keyboard/>
                </GameContext.Provider>
            </div>
        </div>
    );
}

export default Game;