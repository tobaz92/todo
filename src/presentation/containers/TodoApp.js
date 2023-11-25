import TodoUpdate from 'presentation/components/TodoUpdate'
import TodoList from 'presentation/components/TodoList'

import React, { useState } from 'react'
import { colors, boxShadow } from 'presentation/styles/variables'

const TodoApp = () => {
    const [updateVisible, setupdateVisible] = useState(false)
    const [updateType, setUpdateType] = useState({ type: 'add', id: null })
    const handleUpdateVisibleToogle = () => {
        setupdateVisible(!updateVisible)
    }
    const changeTypeUpdate = (type, id) => {
        setUpdateType(type)
    }
    return (
        <div style={containerStyles}>
            <TodoList
                updateVisible={handleUpdateVisibleToogle}
                updateIsVisible={updateVisible}
                updateType={changeTypeUpdate}
            />
            {updateVisible && (
                <TodoUpdate
                    updateVisible={handleUpdateVisibleToogle}
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
