import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'todosSlice',
    initialState: {
        data: [],
    },
    reducers: {
        setTodoList: (currentSlice, action) => {
            currentSlice.data = action.payload
        },
    },
})

export const todosReducer = todosSlice.reducer
export const { setTodoList } = todosSlice.actions
