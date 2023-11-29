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
        addContactElement: (state, action) => {
            state.data = [action.payload, ...state.data]
        },
        removeContactElement: (state, action) => {
            console.log('antes: ' + state.data)
            state.data = state.data.filter((comment) => comment.id !== action.payload.id)
            console.log('despues: ' + state.data)
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


export const { addContactElement, removeContactElement } = contactSlice.actions;
export const getContactData = state => state.contact.data;
export const getContactStatus = state => state.contact.status;
export const getContactError  = state => state.contact.error;