import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'todosSlice',
    initialState: {
        data: [],
        backup: [],
    },
    reducers: {
        setTodoList: (state, action) => {
            state.backup = action.payload
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
        filterTodoList: (state, action) => {
            state.data = state.backup.filter((todo) =>
                action.payload.includes(todo.id),
            )
        },
    },
})

export const todosReducer = todosSlice.reducer
export const { setTodoList, addTodoList, updateTodoList, filterTodoList } =
    todosSlice.actions
