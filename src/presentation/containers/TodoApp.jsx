import React, { useState } from 'react'
import LeftBar from './LeftBar'
import Main from './Main'

const TodoApp = ({arrayProjects, arraySections, arrayTasks}) => {

    const [projects, setProjects] = useState(arrayProjects)
    const [sections, setSections] = useState(arraySections)
    const [tasks, setTasks] = useState(arrayTasks)

    const [projectActive, setProjectActive] = useState('p0')

    const arrayFilterById = (array, keyId, id) => {
        return array.filter((element) => element[keyId] === id)
    }

    return (
        <div className="todoapp">
            <div className="container-todoapp">
                <LeftBar arrayProjects={projects} arrayTasks={tasks} onClick={setProjectActive} />
                <Main projects={arrayFilterById(projects, 'projectId', projectActive)} sections={arrayFilterById(sections, 'projectId', projectActive)} tasks={arrayFilterById(tasks, 'projectId', projectActive)} />
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
