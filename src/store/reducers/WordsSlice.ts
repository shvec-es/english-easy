import {createSlice} from "@reduxjs/toolkit";
import {ReduxService} from "../../services/ReduxService";
import { IWord } from '../models/Interfaces';

const initialState: IWord = {
    wordRu: '',
    wordEn: ''
}

export const wordsSlice = createSlice({
  name: 'wordsSlice',
  initialState,
  reducers: {
    // changeId: (state, action: PayloadAction<string>) => {
    //   state.id = action.payload;
    //   }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ReduxService.endpoints.addNewWord.matchFulfilled,
        (state, { payload }) => {
          state.wordRu = payload.wordRu
          state.wordEn = payload.wordEn    
        })
      .addMatcher(
        ReduxService.endpoints.getWords.matchFulfilled,
        (state, { payload }) => {
          state = payload
        })
      .addMatcher(
        ReduxService.endpoints.getOwnWords.matchFulfilled,
        (state, { payload }) => {
          state = payload
        }
      )
  }
})

export default wordsSlice.reducer;