import { createAsyncThunk } from "@reduxjs/toolkit";
import users from '../../data/users.json'


export const getUserListFromAPIThunk = createAsyncThunk("user/getUserFromApi", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 2000);
    });
})