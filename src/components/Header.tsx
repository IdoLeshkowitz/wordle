import {AiFillInfoCircle} from "react-icons/ai";
import React, {useContext, useEffect, useRef} from "react";
import {GameActionType} from "../features/game/gameActions";
import {GameContext} from "../pages/Game";


const Header = () => {
    const {state, dispatch} = useContext(GameContext);
    return (
    <header className="game_page-header">
        <input type="checkbox"
               id="openModal"
               className="hidden"
               onChange={()=>dispatch({type: GameActionType.TOGGLE_HELP_MODAL})}
               checked={state.helpModalActive}
        />
        <label htmlFor="openModal"
               className="game_page-header-info_btn"
               title="info"
        >
            <AiFillInfoCircle/>
        </label>
        <h1>WORDLE</h1>
    </header>
    )
}

export default Header;