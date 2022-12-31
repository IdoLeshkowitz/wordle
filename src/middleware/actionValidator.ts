import {addLetter} from "../features/game/gameSlice";

export const actionValidatorMiddleware = (store: any) => (next: any) => (action: any) => {
    if (action.type === addLetter.type) {
        next(action);
    }
}