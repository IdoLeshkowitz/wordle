import {configureStore} from "@reduxjs/toolkit";
import gameReducer from "../features/game/gameSlice";
import userReducer from "../features/user/userSlice";
import uiReducer from "../features/ui /uiSlice";
import modalReducer from "../features/modals/modalSlice";
import keyboardMiddleware from "../middleware/keyboard/keyboardMiddleware";
import modalMiddleware from "../middleware/modal/modalMiddleware";
import gameMiddleware from "../middleware/game/gameMiddleware";
import userMiddleware from "../middleware/user /userMiddleware";

export const store = configureStore({
    reducer: {game: gameReducer, user: userReducer, ui: uiReducer, modals: modalReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(keyboardMiddleware, modalMiddleware, gameMiddleware,...userMiddleware)
});

export  type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
