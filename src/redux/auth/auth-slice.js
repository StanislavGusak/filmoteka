import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import authOperation from './auth-operation';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authPersistConfig = {
    key: 'auth',
    storage,
    whiteList: ['token'],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(authOperation.register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(authOperation.logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(authOperation.logOut.fulfilled, (state, action) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(authOperation.refreshCurrentUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(authOperation.refreshCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(authOperation.refreshCurrentUser.rejected, state => {
                state.isRefreshing = false;
            });
    },
});

export const persisteAuthReducer = persistReducer(
    authPersistConfig,
    authSlice.reducer
);