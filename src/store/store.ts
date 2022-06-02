import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ReduxService} from '../services/ReduxService'
import AppSlice from "./reducers/AppSlice";

const rootReducer = combineReducers({
    [ReduxService.reducerPath]: ReduxService.reducer,
    AppSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(ReduxService.middleware)

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]