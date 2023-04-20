import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import themeReduser from './themeSlise';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReduser = persistReducer(persistConfig, themeReduser);

const store = configureStore({
    reducer: {
        theme: persistedReduser,
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);

export default store;