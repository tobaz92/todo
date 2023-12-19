import { useState } from 'react'
// import { useDispatch } from "react-redux";

const AddTask = ({ add, language = 'en' }) => {
    const getText = (key) => {
        return text[key][language]
    }
    const handleToggleTask = () => {
        add(true)
    }
    return (
        <div className="addtask"
            onClick={handleToggleTask}
        >
            <div>
                <span
                    dangerouslySetInnerHTML={{
                        __html: '&nbsp;+&nbsp;',
                    }}
                />
            </div>
            <div>
                <div className="task-title">{getText('add')}</div>
            </div>

            <style>{AddTaskStyles}</style>
        </div>
    )
}
export default AddTask

const AddTaskStyles = `
.addtask {
    position: relative;
	display:flex;
	flex-direction:row;
	gap:1rem;

    padding: 10px;
    border: 1px solid transparent;
    border-radius: 2px;
    cursor:pointer;

}
.addtask:hover {
    background-color: #eee;
}

`

const text = {
    add:{
        en:'Add a task',
        fr:'Ajouter une tâche',
    },
}
