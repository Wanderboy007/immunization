import { configureStore } from '@reduxjs/toolkit'
import MotherDataSlice from "./featurs/MotherDataSlice/MotherDataSlice"


export const store = configureStore({
    reducer: {
        MotherData: MotherDataSlice,
    }
})

