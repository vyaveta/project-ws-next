import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TkmReduxTypes {
    isLoading: boolean,
    showSideBar: boolean,
}

const initialState : TkmReduxTypes = {
    isLoading: false,
    showSideBar: false,
}

export const tkmReduxSlice = createSlice({
    name: 'tkmReduxStates',
    initialState,
    reducers: {
        setShowSideBar: (state,action: PayloadAction<boolean>) => {
            state.showSideBar = action.payload
        },
        setIsLoading: (state,action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})

export const { setIsLoading, setShowSideBar } = tkmReduxSlice.actions

export default tkmReduxSlice.reducer