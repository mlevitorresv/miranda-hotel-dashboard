import { createAsyncThunk } from "@reduxjs/toolkit";
import comment from '../../data/comment.json'
import { ContactInterface } from "../../interfaces/ContactInterface";


export const getContactListFromAPIThunk = createAsyncThunk<ContactInterface[], void, { state: any, rejectValue: string }>("contact/getContactFromApi", async (): Promise<ContactInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comment);
        }, 2000);
    });
})