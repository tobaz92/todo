import TodoAdd from 'presentation/components/TodoAdd'
import TodoItem from 'presentation/components/TodoItem'
import TodoList from 'presentation/components/TodoList'
import React, { useState } from 'react'
import { colors, boxShadow } from 'presentation/styles/variables'
const TodoApp = () => {
    return (
        <div style={containerStyles}>
            <TodoList />
            <TodoAdd />
        </div>
    )
}
export default TodoApp

const containerStyles = {
    position: 'relative',
    maxWidth: '600px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: boxShadow,
    padding: '30px',
}
