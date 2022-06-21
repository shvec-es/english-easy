import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ReduxService } from '../services/ReduxService'
import AuthSlice from "./reducers/AuthSlice";
import WordsSlice from "./reducers/WordsSlice";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, AuthSlice)

const rootReducer = combineReducers({
    [ReduxService.reducerPath]: ReduxService.reducer,
    AuthSlice: persistedReducer,
    WordsSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(ReduxService.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
