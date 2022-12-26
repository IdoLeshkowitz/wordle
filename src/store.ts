import {configureStore, getDefaultMiddleware, MiddlewareArray} from "@reduxjs/toolkit";
import gameReducer from "./features/game/gameSlice";
import {keyboardMiddleware} from "./middleware/keyboardMiddleware";


export const store = configureStore({
    reducer: {game: gameReducer},
    middleware :  (getDefaultMiddleware) => getDefaultMiddleware().concat(keyboardMiddleware)
});

export  type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
