import { configureStore } from '@reduxjs/toolkit'
import MotherDataSlice from "./featurs/MotherDataSlice/MotherDataSlice"
import PractitionerUIDSlice from './featurs/PractitionerUIDSlice/PractitionerUID'


export const store = configureStore({
    reducer: {
        MotherData: MotherDataSlice,
        PractitionerUID: PractitionerUIDSlice
    }
})

