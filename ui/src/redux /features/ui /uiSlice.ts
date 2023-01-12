import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum AppPaths {
    SIGN_IN = '/signin',
    GAME = '/game',
    WELCOME = '/',
}
export interface UiState {
    pending: boolean;
    currentPagePath:AppPaths
}
const initialState: UiState = {
    pending: false,
    currentPagePath: AppPaths.WELCOME
}
const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setPending: (state, action) => {
            state.pending = action.payload;
        },
        setCurrentPage: (state, action:PayloadAction<AppPaths>) => {
            state.currentPagePath = action.payload;
        }
    }
})

export const {setPending, setCurrentPage} = uiSlice.actions;
export default uiSlice.reducer;