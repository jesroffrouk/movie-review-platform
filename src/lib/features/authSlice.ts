import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    value: Userdata
}

const initialState: AuthState = {
    value: {
        id: '',
        username: ''
    },
}

export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setUser: (state,action: PayloadAction<Userdata>) => {
            state.value= action.payload
        },
        logout: (state) =>{
            state.value = {
                id: '',
                username: ''
            }
        }
    }
})

export const {setUser,logout} = authSlice.actions
export default authSlice.reducer