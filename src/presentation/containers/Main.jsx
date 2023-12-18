import React, { useState, useEffect } from 'react'

const Main = () => {
    const [containerScrollLeft, setContainerScrollLeft] = useState(0)
    const [startX, setStartX] = useState(0)
    const [onGrab, setOnGrab] = useState(false)

    const grabContainer = (on, x, type) => {
        const container = document.querySelector('main .container')

        if ((on && type === 'down') || (on && type === 'move' && onGrab)) {
            container.style.cursor = 'grabbing'
            setOnGrab(true)
            setStartX(x)
        } else {
            container.style.cursor = 'default'
            setOnGrab(false)
        }

        if (type === 'up' || type === 'out') {
            setOnGrab(false)
        }

        if (type === 'move' && onGrab) {
            const dx = x - startX
            container.scrollLeft = containerScrollLeft - dx
            setContainerScrollLeft(container.scrollLeft)
        }
    }

    useEffect(() => {
        const handleMouseUp = () => {
            setOnGrab(false)
        }

        if (onGrab) {
            document.body.style.cursor = 'grabbing'

            // Cleanup function
            return () => {
                document.body.style.cursor = 'default'
                document.removeEventListener('mouseup', handleMouseUp)
            }
        } else {
            document.body.style.cursor = 'default'
        }
    }, [containerScrollLeft, onGrab])

    return (
        <main>
            <div
                className="container"
                onMouseDown={(e) => grabContainer(true, e.clientX, 'down')}
                onMouseUp={(e) => grabContainer(false, e.clientX, 'up')}
                onMouseMove={(e) => grabContainer(null, e.clientX, 'move')}
                onMouseOut={(e) => grabContainer(false, e.clientX, 'out')}
            >
                <div className="main-title">SEMAINE</div>
                <div className="sections">
                    {sections.map((section) => (
                        <div key={section.id} className="section">
                            <div className="title">{section.title}</div>
                            {section.tasks.map((task) => (
                                <div key={task.id} className="task">
                                    <div className="task-title">
                                        {task.title}
                                    </div>
                                    <div className="task-content">
                                        {task.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <style>{MainStyles}</style>
        </main>
    )
}

export default Main

const MainStyles = `
main {
	width: 100%;
	overflow-x: hidden;
	height:100vh;
	background-color: #fff;
	line-height: 1.5rem;
}
main .container{
	padding: 3rem 4rem;
	width:100%;
	height:100%;
	overflow-x:auto;
}
main .main-title {
	padding: 1rem 0;
}
main .sections{
	display:grid;   
	grid-auto-flow:column;  
	grid-gap:5rem; 
}
main .section {
	min-width: 30rem;
}
main .section .title {
	padding: 1rem 0;
}
`

const sections = [
    {
        id: 0,
        title: 'SECTION 1',
        tasks: [
            {
                id: 0,
                title: 'Tâche 1',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
            {
                id: 1,
                title: 'Tâche 2',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
            {
                id: 2,
                title: 'Tâche 3',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
        ],
    },
    {
        id: 1,
        title: 'SECTION 2',
        tasks: [
            {
                id: 0,
                title: 'Tâche 1',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
            {
                id: 1,
                title: 'Tâche 2',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
            {
                id: 2,
                title: 'Tâche 3',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
        ],
    },
    {
        id: 2,
        title: 'SECTION 3',
        tasks: [
            {
                id: 0,
                title: 'Tâche 1',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
            {
                id: 1,
                title: 'Tâche 2',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
            {
                id: 2,
                title: 'Tâche 3',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
        ],
    },
    ,
    {
        id: 3,
        title: 'SECTION 3',
        tasks: [
            {
                id: 0,
                title: 'Tâche 1',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
            {
                id: 1,
                title: 'Tâche 2',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
            {
                id: 2,
                title: 'Tâche 3',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
        ],
    },
    ,
    {
        id: 4,
        title: 'SECTION 3',
        tasks: [
            {
                id: 0,
                title: 'Tâche 1',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
            {
                id: 1,
                title: 'Tâche 2',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
            {
                id: 2,
                title: 'Tâche 3',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
            },
        ],
    },
]
