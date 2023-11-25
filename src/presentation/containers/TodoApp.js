import TodoAdd from 'presentation/components/TodoAdd'
import TodoList from 'presentation/components/TodoList'

import React, { useState } from 'react'
import { colors, boxShadow } from 'presentation/styles/variables'

const TodoApp = () => {
    const [addVisible, setAddVisible] = useState(false)

    const handleAddVisibleToogle = () => {
        setAddVisible(!addVisible)
    }

    return (
        <div style={containerStyles}>
            <TodoList
                addVisible={handleAddVisibleToogle}
                addIsVisible={addVisible}
            />
            {addVisible && <TodoAdd addVisible={handleAddVisibleToogle} />}
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
