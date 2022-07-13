import {createSlice} from "@reduxjs/toolkit";
import {ReduxService} from "../../services/ReduxService";
import { IWord } from '../models/Interfaces';

const initialState: IWord = {
  wordRu: '',
  wordEn: '',
  _id: '',
}

export const wordsSlice = createSlice({
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
    .addMatcher(
        ReduxService.endpoints.getWords.matchFulfilled,
        (state, { payload }) => {
          state = payload;
        }
      )
      .addMatcher(
        ReduxService.endpoints.getOwnWords.matchFulfilled,
        (state, { payload }) => {
          state = payload;
        }
      )
      .addMatcher(
        ReduxService.endpoints.updateWord.matchFulfilled,
        (state, { payload }) => {
          (state as unknown as IWord[]).filter(word => word._id === payload._id);
        }
      )
      .addMatcher(
        ReduxService.endpoints.deleteWord.matchFulfilled,
        (state, { payload }) => {
          (state as unknown as IWord[]).filter(word => word._id !== payload._id);
        }
      );
  }
})

export default wordsSlice.reducer;