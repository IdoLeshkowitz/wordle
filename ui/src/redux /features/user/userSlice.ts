import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, userInitialState} from "./User";

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        signIn: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
        },
        signOut: (state) => {
            state.currentUser = userInitialState.currentUser;
        }
    }
});

export const {signIn, signOut} = userSlice.actions;
export default userSlice.reducer;