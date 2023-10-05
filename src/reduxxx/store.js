import { configureStore } from '@reduxjs/toolkit'
import counterslice from './featurs/counter/counterSlice'
import loginslice from './featurs/counter/loginslice'

export const store = configureStore({
    reducer: {
        counter: counterslice,
        login: loginslice,
    }
})

