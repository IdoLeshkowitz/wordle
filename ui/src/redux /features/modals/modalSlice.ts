import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum ModalsCollection {
    signIn = 'signIn', welcome = 'welcome', help = 'help',
}

interface ModalsState {
    activeModal: ModalsCollection | null;
}

const initialState: ModalsState = {
    activeModal: ModalsCollection.welcome,
}
const modalsSlice = createSlice({
    initialState, name: 'modals', reducers: {
        openModal: (state, action: PayloadAction<ModalsCollection>) => {
            state.activeModal = action.payload;
        },
        closeModal: (state) => {
            state.activeModal = null;
        }
    }
})

export const {openModal, closeModal} = modalsSlice.actions;
export default modalsSlice.reducer