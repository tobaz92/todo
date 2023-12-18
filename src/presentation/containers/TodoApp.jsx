import React, { useState } from 'react'
import LeftBar from './LeftBar'
import Main from './Main'

const TodoApp = () => {
    return (
        <div className="todoapp">
            <div className="container-todoapp">
                <LeftBar />
                <Main />
            </div>
            <style>{TodoAppStyles}</style>
        </div>
    )
}

const TodoAppStyles = `
.todoapp .container-todoapp {
	width: 100%;
	height:100%;

	display: grid;
	grid-template-columns: auto 1fr;
}
`

export default TodoApp
