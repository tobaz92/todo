import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './store/todos-slice'
import { userReducer } from './store/user-slice'

export const store = configureStore({
    reducer: {
        TODO: todosReducer,
        USER: userReducer,
    },
})
