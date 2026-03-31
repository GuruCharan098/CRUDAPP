import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js';
import pageReducer from './pageSlice.js';

const store = configureStore({
    reducer: {
        users: userReducer,
        page: pageReducer,
    }
});

export default store;