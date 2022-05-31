import {ITodo} from "../models/ITodo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppState {
    todos: ITodo[];
    isLoading: boolean;
    error: string;
    filter: string;
}

const initialState:AppState = {
    todos: [],
    isLoading: false,
    error: '',
    filter: ''
}

export const todoSlice = createSlice({
    name: 'AppState',
    initialState,
    reducers: {
        changeFilter(state, action: PayloadAction<string>){
            state.filter = action.payload
        },
        changeError(state, action: PayloadAction<string>){
            state.error = action.payload
        }
    }
})

export default todoSlice.reducer