import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: 0,
};

const loginslice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess: (state) => {
            state.isLoggedIn = 1;
        },
        logout: (state) => {
            state.isLoggedIn = 0;

        },
    }
})
export const { loginSuccess, logout } = loginslice.actions;
export const selectIsLoggedIn = (state) => state.login.isLoggedIn;
export default loginslice.reducer;