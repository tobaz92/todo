import { useState } from 'react'
// import { useDispatch } from "react-redux";

const Task = ({ task, language = 'icon' }) => {
    const getText = (key) => {
        return text[key][language]
    }

    const [mouseIsOver, setMouseIsOver] = useState(false)
    // const dispatch = useDispatch();
    const handleMouseEnter = () => {
        setMouseIsOver(true)
    }
    const handleMouseLeave = () => {
        setMouseIsOver(false);
    }
    const handleToggleTask = () => {
        // dispatch(toggleTask(task));
    }
    const handleDeleteTask = () => {
        // dispatch(deleteTask(task));
    }
    return (
        <div
            className="task"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='completed'>
                {task.isCompleted ? (
                    <span
                        dangerouslySetInnerHTML={{
                            __html: '[x]',
                        }}
                        onClick={handleToggleTask}
                    />
                ) : (
                    <span
                        dangerouslySetInnerHTML={{
                            __html: '[&nbsp;]',
                        }}
                        onClick={handleToggleTask}
                    />
                )}
            </div>
            <div className='wrapper'>
                <div className="task-title">{task.title}</div>
                <div className="task-content">{task.content}</div>
            </div>
            {mouseIsOver && (
                <div className="task-actions">
                    <button onClick={handleDeleteTask}>{getText('edit')}</button>
                    <button onClick={handleDeleteTask}>{getText('delete')}</button>
                </div>
            )}
            <style>{TaskStyles}</style>
        </div>
    )
}
export default Task

const TaskStyles = `
.task {
    position: relative;
	display:flex;
	flex-direction:row;
	gap:1rem;

    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 2px;

    cursor:grab;
}
.task:hover {
    background-color: #eee;
}
.task .wrapper{
    pointer-events:none;
    *{
        cursor:default;
        pointer-events:all;
    }
}
.task .task-actions{
    position: absolute;
    right: 10px;
    font-size: 0.9rem;
    z-index: 1;
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
.task .task-actions button{
    cursor: pointer;
}
.task .task-title{
    display:inline-block;
}
.task .task-content{
    font-size: 0.9rem;
    line-height: 1.2rem;
}
.task .completed span{
    cursor: pointer;
}
`

const text = {
    delete: {
        en: 'Delete',
        fr: 'Supprimer',
        icon: '🗑️',
    },
    edit: {
        en: 'Edit',
        fr: 'Modifier',
        icon: '✍️',
    },
}
