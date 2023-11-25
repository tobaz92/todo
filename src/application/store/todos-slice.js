import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'todosSlice',
    initialState: {
        data: [],
    },
    reducers: {
        setTodoList: (state, action) => {
            state.data = action.payload
        },
        addTodoList: (state, action) => {
            state.data = [...state.data, action.payload]
        },
        updateTodoList: (state, action) => {
            state.data = state.data.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, ...action.payload }
                    : todo,
            )
        },
    },
})

export const todosReducer = todosSlice.reducer
export const { setTodoList, addTodoList, updateTodoList } = todosSlice.actions
