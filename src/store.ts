import {configureStore, getDefaultMiddleware, MiddlewareArray} from "@reduxjs/toolkit";
import gameReducer from "./features/game/gameSlice";
import userReducer from "./features/user/userSlice";
import {keyValidtorMiddleware} from "./middleware/keyValidtor";
import {actionValidatorMiddleware} from "./middleware/actionValidator";



export const store = configureStore({
    reducer: {game: gameReducer, user: userReducer},
    middleware :  (getDefaultMiddleware) => getDefaultMiddleware().concat(keyValidtorMiddleware, actionValidatorMiddleware)
});

export  type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
