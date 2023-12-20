import { useState } from 'react'
import AddTask from './AddTask'
import EditTask from './EditTask'
import Task from './Task'
import Draggable from 'react-draggable' // The default
import { useEffect } from 'react'

const Section = ({
    language = 'en',
    section,
    tasks,
    order,
    sectionId,
    indexSection,
}) => {
    const [addTask, setAddTask] = useState([])

    const [drag, setDrag] = useState(false)
    const [draggable, setDraggable] = useState({
        onStop: {},
        onStart: {},
        onDrag: {},
    })
    const [onPosition, setOnPosition] = useState({ x: 0, y: 0 })
    const [onOrder, setOnOrder] = useState(order)
    useEffect(() => {
        const sectionWidth = document.querySelector('.section').offsetWidth
        const allSections = document.querySelectorAll('.section-wrapper')
        // sect all position of sections
        const allSectionsPosition = []
        allSections.forEach((section) => {
            allSectionsPosition.push(section.getBoundingClientRect().x)
        })

        if (draggable.onDrag.data) {
            const section = draggable.onDrag.data.node
            const x = section.getBoundingClientRect().x
            const y = section.getBoundingClientRect().y

            const positionSection =
                allSectionsPosition.findIndex(
                    (sectionPosition) => sectionPosition > x,
                ) - 1
            if (onOrder !== positionSection) {
                setOnOrder(positionSection)
            }
        }
    }, [draggable])
    useEffect(() => {
        indexSection(onOrder, sectionId)
    }, [onOrder])

    // useEffect(() => {
    //     console.log('position', position)
    // }, [position])

    return (
        <div className={`section-wrapper ${drag ? 'drag' : ''}`}>
            <Draggable
                // axis="x"
                // bounds=".container-wrapper"
                position={onPosition}
                handle=".section .title"
                onStart={(e, data) => {
                    setDraggable((prevState) => ({
                        ...prevState,
                        onStart: { e, data },
                    }))
                    setDrag(true)
                }}
                onStop={(e, data) => {
                    setDraggable((prevState) => ({
                        ...prevState,
                        onStop: { e, data },
                    }))
                    setDrag(false)
                }}
                onDrag={(e, data) => {
                    setDraggable((prevState) => ({
                        ...prevState,
                        onDrag: { e, data },
                    }))
                }}
                // offsetParent={document.querySelector('.main .sections')}
                // grid={[25, 25]}
            >
                <div>
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
	transition: transform 0.05s ease-out;
}
.section.drag{
    border: 1px solid #ccc;
    z-index: 10;
	// transform: rotate(2deg);
	transition: transform 0.1s ease-in;
}
.section .title {
	padding: 0 0 1rem 0;
    cursor: grab;
}

`
