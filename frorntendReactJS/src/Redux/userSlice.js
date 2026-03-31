import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000/api/users";

const getToken = () => localStorage.getItem("token");

export const fetchUsers = createAsyncThunk("fetch", async() => {
    const res = await axios.get(API, {
        headers: { Authorization: getToken() }
    });
    return res.data;
});

export const addUsers = createAsyncThunk("add", async(data) => {
    const res = await axios.post(API, data, {
        headers: { Authorization: getToken() }
    });
    return res.data;
});

export const editUser = createAsyncThunk("edit", async({ id, data }) => {
    const res = await axios.put(`${API}/${id}`, data, {
        headers: { Authorization: getToken() }
    });
    return res.data;
});

export const deleteUser = createAsyncThunk("delete", async(id) => {
    await axios.delete(`${API}/${id}`, {
        headers: { Authorization: getToken() }
    });
    return id;
});

const slice = createSlice({
    name: "users",
    initialState: { list: [] },
    extraReducers: (b) => {
        b.addCase(fetchUsers.fulfilled, (s, a) => { s.list = a.payload });
        b.addCase(addUsers.fulfilled, (s, a) => { s.list.push(a.payload) });
        b.addCase(editUser.fulfilled, (s, a) => {
            s.list = s.list.map(u => u._id === a.payload._id ? a.payload : u);
        });
        b.addCase(deleteUser.fulfilled, (s, a) => {
            s.list = s.list.filter(u => u._id !== a.payload);
        });
    }
});

export default slice.reducer;