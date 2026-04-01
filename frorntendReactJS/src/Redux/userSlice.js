import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5500/api/users";

export const fetchUsers = createAsyncThunk("users/fetch", async() => {
    const res = await axios.get(API);
    return res.data;
});

export const addUsers = createAsyncThunk("users/add", async(data) => {
    const res = await axios.post(API, data);
    return res.data;
});

export const editUser = createAsyncThunk("users/edit", async({ id, data }) => {
    const res = await axios.put(`${API}/${id}`, data);
    return res.data;
});

export const deleteUser = createAsyncThunk("users/delete", async(id) => {
    await axios.delete(`${API}/${id}`);
    return id;
});

const slice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(addUsers.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(editUser.fulfilled, (state, action) => {
                state.list = state.list.map((u) =>
                    u._id === action.payload._id ? action.payload : u
                );
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.list = state.list.filter(
                    (u) => u._id !== action.payload
                );
            });
    }
});

export default slice.reducer;