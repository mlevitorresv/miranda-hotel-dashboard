import { createSlice } from "@reduxjs/toolkit";
import { getContactListFromAPIThunk } from "./contactThunk";
import { ContactInterface, ContactSliceInitialStateInterface } from "../../interfaces/ContactInterface";
import { RootState } from "../../app/store";

const initialState: ContactSliceInitialStateInterface = {
    data: [],
    status: 'idle',
    error: undefined
}

export const contactSlice = createSlice({
    name: "contact",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getContactListFromAPIThunk.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.data = action.payload
        })
        .addCase(getContactListFromAPIThunk.rejected, (state, action) => {
            state.status = "rejected"
            state.error = action.error.message
        })
        .addCase(getContactListFromAPIThunk.pending, (state, action) => {
            state.status = "pending"
        })
    }
})


export const getContactData = (state: RootState): ContactInterface[] => state.contact.data;
export const getContactStatus = (state: RootState): string => state.contact.status;
export const getContactError  = (state: RootState): string | undefined => state.contact.error;
export const getContactArchived = (state: RootState): ContactInterface[] => state.contact.data.filter((comment) => comment.archived);