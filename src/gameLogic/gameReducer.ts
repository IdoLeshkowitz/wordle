import {gameInitialState, GameState} from "./GameState";
import {GameAction, GameActionType} from "./gameActions";

const gameReducer = (state: GameState, action: GameAction): GameState => {
    switch (action.type){
        case (GameActionType.OPEN_HELP_MODAL):
            return {
                ...state , helpModalActive:true
            }
        case (GameActionType.CLOSE_HELP_MODAL):
            return {
                ...state, helpModalActive:false
            }
    }
    return state;
}

export {gameReducer, gameInitialState, GameActionType};