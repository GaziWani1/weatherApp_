import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'light'
}

const themeSwitcher = createSlice({
    name: 'themeSwitcher',
    initialState,
    reducers: {
        switchTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export const { switchTheme } = themeSwitcher.actions;

export default themeSwitcher.reducer;