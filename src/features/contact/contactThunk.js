import { createAsyncThunk } from "@reduxjs/toolkit";
import comment from '../../data/comment.json'


export const getContactListFromAPIThunk = createAsyncThunk("contact/getContactFromApi", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comment);
        }, 2000);
    });
})