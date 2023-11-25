import TodoUpdate from 'presentation/components/TodoUpdate'
import TodoList from 'presentation/components/TodoList'

import React, { useState } from 'react'
import { colors, boxShadow } from 'presentation/styles/variables'

const TodoApp = () => {
    const [updateIsVisible, setUpdateIsVisible] = useState(false)
    const [updateType, setUpdateType] = useState({ type: 'add', data: null })

    return (
        <div style={containerStyles}>
            <TodoList
                updateVisible={() => setUpdateIsVisible(!updateIsVisible)}
                updateIsVisible={updateIsVisible}
                updateType={(type, data) => setUpdateType(type, data)}
            />
            {updateIsVisible && (
                <TodoUpdate
                    updateVisible={() => setUpdateIsVisible(!updateIsVisible)}
                    type={updateType}
                />
            )}
        </div>
    )
}

export default TodoApp

const containerStyles = {
    position: 'relative',
    maxWidth: '600px',
    backgroundColor: colors.white,
    borderRadius: '10px',
    boxShadow: boxShadow,
    padding: '30px',
}
