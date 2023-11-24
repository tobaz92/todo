import { TodoApi } from 'api/TodoApi'
import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
    const [listTodos, setListTodos] = useState([])
    const [listUsers, setListUsers] = useState([])

    async function fetchTodos() {
        try {
            const listTodos = await TodoApi.fetchTodos()
            setListTodos(listTodos)
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchUsers() {
        try {
            const listUsers = await TodoApi.fetchUsers()
            setListUsers(listUsers)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTodos()
        fetchUsers()
    }, [])

    const handleTodoToggle = (todoId) => {
        const updatedListTodos = listTodos.map((todo) =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
        )
        setListTodos(updatedListTodos)
    }

    const handleTodoValues = (data) => {
        const newValue = data.value
        const key = data.key

        const updatedListTodos = listTodos.map((todo) =>
            todo.id === data.id ? { ...todo, [key]: newValue } : todo,
        )
        setListTodos(updatedListTodos)
    }

    const getUserByTodo = (todoId) => {
        return listUsers.filter((user) => user.id === todoId)[0]
    }

    const completedTodos = listTodos.filter((todo) => todo.completed === true)
    const uncompletedTodos = listTodos.filter(
        (todo) => todo.completed === false,
    )

    return (
        <div>
            {uncompletedTodos.length > 0 && (
                <div>
                    <h1>
                        Pending{' '}
                        <span style={counterStyles}>
                            {uncompletedTodos.length}
                        </span>
                    </h1>
                    {uncompletedTodos.map((todo, index) => (
                        <TodoItem
                            key={todo.id}
                            data={todo}
                            state={handleTodoToggle}
                            user={getUserByTodo(todo.userId)}
                            isLast={
                                index === uncompletedTodos.length - 1
                                    ? true
                                    : false
                            }
                            newValue={handleTodoValues}
                        />
                    ))}
                </div>
            )}
            {completedTodos.length > 0 && (
                <div
                    style={
                        uncompletedTodos.length === 0 ? null : completedStyles
                    }
                >
                    {uncompletedTodos.length === 0 && (
                        <h1>
                            Done{' '}
                            <span style={counterStyles}>
                                {completedTodos.length}
                            </span>
                        </h1>
                    )}

                    {completedTodos.map((todo, index) => (
                        <TodoItem
                            key={todo.id}
                            data={todo}
                            state={handleTodoToggle}
                            user={getUserByTodo(todo.userId)}
                            isLast={
                                index === completedTodos.length - 1
                                    ? true
                                    : false
                            }
                            newValue={handleTodoValues}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
export default TodoList

const counterStyles = {
    fontSize: '12px',
    width: '30px',
    height: '25px',
    fontWeight: '600',
    backgroundColor: '#f5f5f9',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    color: '#7d81a5',
    marginLeft: '0.7rem',
}

const completedStyles = {
    opacity: '0.4',
}
