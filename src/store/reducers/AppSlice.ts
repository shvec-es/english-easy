import {ITodo} from "../models/Interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppState {
    isWork: boolean;
}

const initialState:AppState = {
    isWork: false
}

export const appSlice = createSlice({
    name: 'AppState',
    initialState,
    reducers: {
        // changeFilter(state, action: PayloadAction<string>){
        //     state.filter = action.payload
        // },
        // changeError(state, action: PayloadAction<string>){
        //     state.error = action.payload
        // }
        changeFilter(state, action: PayloadAction<boolean>){
            state.isWork = action.payload
        }
    }
})

export default appSlice.reducer