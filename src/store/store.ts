import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ReduxService} from '../services/ReduxService'
import TodoSlice from "./reducers/TodoSlice";

const rootReducer = combineReducers({
    [ReduxService.reducerPath]: ReduxService.reducer,
    TodoSlice
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