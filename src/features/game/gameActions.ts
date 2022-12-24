export enum GameActionType {
    ADD_LETTER = 'ADD_LETTER',
    REMOVE_LETTER = 'REMOVE_LETTER',
    ENTER = 'ENTER',
    ESCAPE = 'ESCAPE',

    TOGGLE_HELP_MODAL = 'OPEN_HELP_MODAL',
}

export type GameAction =
    | { type: GameActionType.ADD_LETTER, payload: string }
    | { type: GameActionType.REMOVE_LETTER }
    | { type: GameActionType.ESCAPE }
    | { type: GameActionType.ENTER }
    | { type: GameActionType.TOGGLE_HELP_MODAL }

