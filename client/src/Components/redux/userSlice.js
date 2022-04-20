
import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        toggleUser: (state, action) => {
            state.user = action.payload
        }
    }
})


// actions
const { toggleUser } = slice.actions

// exports
export { toggleUser }
export default slice.reducer