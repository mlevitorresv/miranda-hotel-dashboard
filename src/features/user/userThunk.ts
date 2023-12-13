import { createAsyncThunk } from "@reduxjs/toolkit";
import users from '../../data/users.json'
import { UserInterface } from "../../interfaces/UserInterface";



export const getUserListFromAPIThunk = createAsyncThunk<UserInterface[], void, { state: any, rejectValue: string }>("user/getUserFromApi", async (): Promise<UserInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 2000);
    });
})