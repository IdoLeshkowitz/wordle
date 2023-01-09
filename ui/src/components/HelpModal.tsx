import {GameContext} from "../pages/Game";
import {useContext} from "react";
import {GameActionType} from "../features/game/gameReducer";

export const HelpModal = () => {
    const {state, dispatch} = useContext(GameContext);
    const {helpModalActive} = state;
    if (!helpModalActive) return null;
    return (
        <div className='modal-container active' tabIndex={0}>
            <div className="modal-content">
                <button
                    className="modal-content-escape_btn"
                    onClick={() => dispatch({type: GameActionType.TOGGLE_HELP_MODAL})}>
                    X
                </button>
                <p className="modal-content-description">game instructions</p>
            </div>
        </div>
    );
}