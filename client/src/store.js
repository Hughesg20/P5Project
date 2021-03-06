import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./Components/redux/userSlice";

const store = configureStore({
    reducer: userReducer
})

export default store