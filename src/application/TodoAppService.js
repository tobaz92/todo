import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './store/todos-slice'

export const store = configureStore({
    reducer: {
        TODO: todosReducer,
    },
})
