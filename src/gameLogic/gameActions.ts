export enum GameActionType {
    ADD_LETTER = 'ADD_LETTER',
    REMOVE_LETTER = 'REMOVE_LETTER',
    MOVE_TO_NEXT_WORD = 'MOVE_TO_NEXT_WORD',
    CLOSE_HELP_MODAL = 'CLOSE_HELP_MODAL',
    OPEN_HELP_MODAL = 'OPEN_HELP_MODAL',
}

export type GameAction =
    |{type : GameActionType.ADD_LETTER, payload : string}
    |{type : GameActionType.REMOVE_LETTER}
    |{type : GameActionType.CLOSE_HELP_MODAL}
    |{type : GameActionType.OPEN_HELP_MODAL};

