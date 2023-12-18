import React, { useState, useEffect } from 'react'

const Main = () => {
    useEffect(() => {
        const container = document.querySelector('main .container')

        container.addEventListener('wheel', (e) => {
            e.preventDefault()
            container.scrollLeft += e.deltaY
        })
    }, [])

    return (
        <main>
            <div className="container">
                <div className="main-title">SEMAINE</div>
                <div className="sections">
                    {sections.map((section) => (
                        <div key={section.id} className="section">
                            <div className="title">{section.title}</div>
                            <div className="tasks">
                                {section.tasks.map((task) => (
                                    <div key={task.id} className="task">
                                        <div>
                                            {task.isCompleted ? (
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: '[x]',
                                                    }}
                                                />
                                            ) : (
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: '[&nbsp;]',
                                                    }}
                                                />
                                            )}
                                        </div>
                                        <div>
                                            <div className="task-title">
                                                {task.title}
                                            </div>
                                            <div className="task-content">
                                                {task.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
	padding: 3rem 5rem;
	width:100%;
	height:100%;
	overflow-x:auto;
}
main .main-title {
	padding: 1rem 0;
	position:sticky;
	left:0;
}
main .sections{
	width: fit-content;
	display:grid;   
	grid-auto-flow:column;  
	grid-gap:5rem; 
}
main .tasks{
	display:flex;
	flex-direction:column;
	gap:1rem
}
main .task{
	display:flex;
	flex-direction:row;
	gap:1rem
}

main .section {
	min-width: 30rem;
}
main .section:last-child {

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
                isCompleted: false,
            },
            {
                id: 1,
                title: 'Tâche 2',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
                isCompleted: false,
            },
            {
                id: 2,
                title: 'Tâche 3',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
                isCompleted: true,
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
                isCompleted: false,
            },
            {
                id: 1,
                title: 'Tâche 2',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
                isCompleted: false,
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
                isCompleted: false,
            },
            {
                id: 1,
                title: 'Tâche 2',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
                isCompleted: false,
            },
            {
                id: 2,
                title: 'Tâche 3',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
                isCompleted: false,
            },
            {
                id: 3,
                title: 'Tâche 4',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
                isCompleted: true,
            },
        ],
    },
    ,
    {
        id: 3,
        title: 'SECTION 4',
        tasks: [
            {
                id: 0,
                title: 'Tâche 1',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
                isCompleted: true,
            },
            {
                id: 1,
                title: 'Tâche 2',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
                isCompleted: true,
            },
            {
                id: 2,
                title: 'Tâche 3',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
                isCompleted: true,
            },
        ],
    },
    ,
    {
        id: 4,
        title: 'SECTION 5',
        tasks: [
            {
                id: 0,
                title: 'Tâche 1',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
                isCompleted: true,
            },
        ],
    },
]
