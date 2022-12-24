import {configureStore, combineReducers} from "@reduxjs/toolkit";
import gameReducer from "./features/game/gameSlice";

export const store =  configureStore({
    reducer: {
    game : gameReducer,
    }
});

export  type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
