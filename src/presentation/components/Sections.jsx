import { useState } from 'react'
import AddTask from './AddTask'
import EditTask from './EditTask'
import Task from './Task'
import Draggable from 'react-draggable' // The default
import { useEffect } from 'react'

const Section = ({ language = 'en', section, tasks, draggableFunc }) => {
    const [addTask, setAddTask] = useState([])

    const [draggable, setDraggable] = useState({
        onStop: {},
        onStart: {},
        onDrag: {},
    })
    const [drag, setDrag] = useState(false)
    useEffect(() => {
        draggableFunc({ sectionId: section.id, drag: draggable })
    }, [draggable])

    return (
        <div className={`section-wrapper ${drag ? 'drag' : ''}`}>
            <Draggable
                handle=".section .title"
                onStart={(e) => {
                    setDraggable((prevState) => ({
                        ...prevState,
                        onStart: e,
                    }))
                    setDrag(true)
                }}
                onStop={(e) => {
                    setDraggable((prevState) => ({
                        ...prevState,
                        onStop: e,
                    }))
                    setDrag(false)
                }}
                onDrag={(e) => {
                    setDraggable((prevState) => ({
                        ...prevState,
                        onDrag: e,
                    }))
                }}
                grid={[25, 25]}
            >
                <div
                    key={section.id}
                    className={`section ${drag ? 'drag' : ''}`}
                >
                    <div className="title">{section.title}</div>
                    <div className="tasks">
                        {tasks.map((task) => (
                            <Task
                                task={task}
                                language={language}
                                key={task.id}
                            />
                        ))}

                        {!drag &&
                            (!addTask[section.id] ? (
                                <AddTask
                                    language={language}
                                    add={() =>
                                        setAddTask((prevState) => ({
                                            ...prevState,
                                            [section.id]: true,
                                        }))
                                    }
                                />
                            ) : (
                                <EditTask
                                    language={language}
                                    cancel={() =>
                                        setAddTask((prevState) => ({
                                            ...prevState,
                                            [section.id]: false,
                                        }))
                                    }
                                />
                            ))}
                    </div>
                    <style>{SectionStyles}</style>
                </div>
            </Draggable>
        </div>
    )
}

export default Section

const SectionStyles = `

.section-wrapper{
    border: 1px solid transparent;
    border-radius: 5px;
    height:fit-content;
}
.section-wrapper.drag{
    background: #f2f2f2;
    z-index: 10;
}
.section {
	min-width: 30rem;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 1rem;
    background:#fff;
}

.section .title {
	padding: 0 0 1rem 0;
    cursor: grab;
}
.section.drag{
    border: 1px solid #ccc;
    z-index: 10;
}
`
