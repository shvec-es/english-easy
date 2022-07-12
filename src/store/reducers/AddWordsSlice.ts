import {createSlice} from "@reduxjs/toolkit";
import {ReduxService} from "../../services/ReduxService";
import { IWord } from '../models/Interfaces';

const initialState: IWord = {
  wordRu: '',
  wordEn: ''
}

export const addWordsSlice = createSlice({
  name: 'addWordsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ReduxService.endpoints.addNewWord.matchFulfilled,
        (state, { payload }) => {
          state.wordRu = payload.wordRu
          state.wordEn = payload.wordEn    
        })
  }
})

export default addWordsSlice.reducer;