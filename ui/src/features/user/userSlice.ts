import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, userInitialState} from "./IUser";

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        signIn: (state, action: PayloadAction<User>) => {
            state = action.payload;
        },
        signOut: (state) => {
            state = userInitialState;
        }
    }
});

export const {signIn, signOut} = userSlice.actions;
export default userSlice.reducer;