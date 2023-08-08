import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Files {
    data: Array<any | []>
}

const initialState: Files = {
    data: [],
}

export const FilesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addFiles: (state, action: PayloadAction<any>) => {
            state.data.push(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addFiles } = FilesSlice.actions

export default FilesSlice.reducer