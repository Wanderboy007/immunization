import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    motherName: "Shivansh",
    motherAdhar: "1232132132"
}

export const MotherDataSlice = createSlice({
    name: 'MotherData',
    initialState,
    reducers: {
        SetInitialState: (state, actions) => {
            // state.motherName = actions.payload.motherName
            return { ...state, motherAdhar: actions.payload.motherAdhar, motherName: actions.payload.motherName }

        },
        Clear: () => {
            return { ...initialState, motherAdhar: " ", motherName: " " }
        }

    },
})

// Action creators are generated for each case reducer function
export const { SetInitialState, Clear } = MotherDataSlice.actions

export default MotherDataSlice.reducer