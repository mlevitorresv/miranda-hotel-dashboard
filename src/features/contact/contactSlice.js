import { createSlice } from "@reduxjs/toolkit";
import { getContactListFromAPIThunk } from "./contactThunk";


export const contactSlice = createSlice({
    name: "contact",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers:{
        getContactById: (state, action) => {
            state.data.filter((comment) => comment.id === action.payload.id)
        },
        addContactElement: (state, action) => {
            state.data = [action.payload, ...state.data]
        },
        removeContactElement: (state, action) => {
            state.data = state.data.filter((comment) => comment.id !== action.payload.id)
        }
    },
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


export const { addContactElement } = contactSlice.actions;
export const getContactData = state => state.contact.data;
export const getContactStatus = state => state.contact.status;
export const getContactError  = state => state.contact.error;
export const getContactArchived = state => state.contact.data.filter((comment) => comment.archived);