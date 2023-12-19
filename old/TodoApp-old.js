import TodoUpdate from 'presentation/components/TodoUpdate'
import TodoList from 'presentation/components/TodoList'

import React, { useState } from 'react'
import { colors, boxShadow } from 'presentation/styles/variables'
import UserSelector from 'presentation/components/UserSelector'
import { getSharedByUser, getTodos } from 'domain/todo/TodoService'
import { useDispatch } from 'react-redux'

const TodoAppOld = () => {
    const [updateIsVisible, setUpdateIsVisible] = useState(false)
    const [updateType, setUpdateType] = useState({ type: 'add', data: null })
    const dispatch = useDispatch()

    // FOR DEV
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
    ]
    const [selectedUserId, setSelectedUserId] = useState(null)

    const handleUserChange = (userId) => {
        setSelectedUserId(userId)
        if (userId === 0) {
            getTodos(dispatch)
        } else {
            getSharedByUser(dispatch, userId)
        }
    }

    return (
        <div style={containerStyles}>
            <div>
                <UserSelector users={users} onSelectUser={handleUserChange} />
            </div>

            <TodoList
                updateVisible={() => setUpdateIsVisible(!updateIsVisible)}
                updateIsVisible={updateIsVisible}
                updateType={(type, data) => setUpdateType(type, data)}
            />
            {updateIsVisible && (
                <TodoUpdate
                    updateVisible={() => setUpdateIsVisible(!updateIsVisible)}
                    type={updateType}
                    userId={selectedUserId}
                />
            )}
        </div>
    )
}

export default TodoAppOld

const containerStyles = {
    position: 'relative',
    width: '600px',
    backgroundColor: colors.white,
    borderRadius: '10px',
    boxShadow: boxShadow,
    padding: '30px',
}
