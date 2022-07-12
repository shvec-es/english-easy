import { createSlice } from "@reduxjs/toolkit";
import { ReduxService } from "../../services/ReduxService";
import { IGetWord } from "../models/Interfaces";

const initialState: IGetWord = {
    wordRu: "",
    wordEn: "",
    _id: "",
};

export const getWordsSlice = createSlice({
  name: "getWordsSlice",
    initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
          state = payload;
        }
      )
      .addMatcher(
        ReduxService.endpoints.deleteWord.matchFulfilled,
        (state, { payload }) => {
          (state as unknown as IGetWord[]).filter(word => word._id !== payload._id);
        }
      );
  },
});

export default getWordsSlice.reducer;
