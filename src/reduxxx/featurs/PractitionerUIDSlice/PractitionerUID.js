import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    PractitionerUID: "PT123"
}

export const PractitionerUIDSlice = createSlice({
    name: 'Practitioner',
    initialState,
    reducers: {
        SetInitialPractitionerUIDState: (state, actions) => {
            return { ...state, PractitionerUID: actions.payload.PractitionerUID }

        },
        ClearPractitionerUID: () => {
            return { ...initialState, PractitionerUID: " " }
        }

    },
})

// Action creators are generated for each case reducer function
export const { SetInitialPractitionerUIDState, ClearPractitionerUID } = PractitionerUIDSlice.actions

export default PractitionerUIDSlice.reducer