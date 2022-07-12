import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  isModalOpenAddWord: false,
  isModalOpenChangeWord: false,

}
export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
    reducers: {
        setModalAdd(state, action: PayloadAction<boolean>) {
            state.isModalOpenAddWord = action.payload;
      },
      setModalChange(state, action: PayloadAction<boolean>) {
            state.isModalOpenChangeWord = action.payload;
        } 
  },
})

export default modalSlice.reducer;