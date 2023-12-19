import { TodoApi } from 'api/TodoApi'
import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos, removeTodo, updateTodo } from 'domain/todo/TodoService'
import { PlusCircle } from 'react-bootstrap-icons'

const TodoList = (props) => {
    const [listTodos, setListTodos] = useState([])
    const [listUsers, setListUsers] = useState([])
    const dispatch = useDispatch()

    const todoList = useSelector((store) => store.TODO.data)

    // TODO: in progress : move to UserService.js
    async function getUsers() {
        try {
            const listUsers = await TodoApi.getUsers()
            setListUsers(listUsers)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTodos(dispatch)
        getUsers()
    }, [])

    useEffect(() => {
        if (todoList.length > 0) {
            setListTodos(todoList)
        }
    }, [todoList])

    const handleTodoToggle = (todoId) => {
        const updatedListTodos = listTodos.map((todo) =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
        )

        const todo = listTodos.filter((todo) => todo.id === todoId)[0]
        const newTodo = { ...todo, completed: !todo.completed, dispatch }

        setListTodos(updatedListTodos)
        updateTodo(todoId, newTodo)
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
    const handleTodoDelete = (todoId) => {
        const newTodolist = listTodos.filter((todo) => todo.id !== todoId)
        setListTodos(newTodolist)
        removeTodo(todoId)
    }

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
                            delete={handleTodoDelete}
                            user={getUserByTodo(todo.userId)}
                            isLast={
                                index === uncompletedTodos.length - 1
                                    ? true
                                    : false
                            }
                            newValue={handleTodoValues}
                            updateVisible={(type) => {
                                props.updateVisible()
                                props.updateType(type)
                            }}
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
                            delete={handleTodoDelete}
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
            <div
                onClick={() => {
                    props.updateVisible()
                    props.updateType({ type: 'add', data: null })
                }}
                style={addStyles(props.updateIsVisible)}
            >
                <PlusCircle />
            </div>
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
const addStyles = (hidden) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    padding: '1rem',
    paddingBottom: '0',
    cursor: 'pointer',
    opacity: hidden ? '0' : '1',
    pointerEvents: hidden ? 'none' : 'auto',
})
