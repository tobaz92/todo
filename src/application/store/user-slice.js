import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: {},
        isAuthenticated: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.user = {}
            state.isAuthenticated = false
        },
    },
})

export const userReducer = userSlice.reducer
export const { setUser, logout } = userSlice.actions
