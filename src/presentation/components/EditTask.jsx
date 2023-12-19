import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
// import { useDispatch } from "react-redux";

const EditTask = ({ language = 'en', cancel }) => {
    const getText = (key, lang = language) => {
        return text[key][lang]
    }

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSendTask = () => {
        // dispatch(deleteTask(task));
    }   
    const handleCancelTask = () => {
        // dispatch(deleteTask(task));
        cancel(true)
    }   

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div className="edittask">
            <div className="completed">
                <span
                    dangerouslySetInnerHTML={{
                        __html: '[&nbsp;]',
                    }}
                />
            </div>
            <div>
                <input
                    type="text"
                    className="edittask-title"
                    value={title}
                    placeholder={getText('title')}
                    onChange={handleChangeTitle}

                />
                <AutoResizableTextarea
                    value={content}
                    onChange={setContent}
                    placeholder={getText('description')}

                />
            </div>
            <div className="edittask-actions">
                <button onClick={handleCancelTask}>{getText('cancel')}</button>
                <button onClick={handleSendTask}>{getText('send')}</button>
            </div>
            <style>{EditTaskStyles}</style>
        </div>
    )
}
export default EditTask

const EditTaskStyles = `
.edittask {
    position: relative;
	display:flex;
	flex-direction:row;
	gap:1rem;

    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 2px;
    background-color: #eee;
}
.edittask:hover {
}

.edittask .edittask-actions{
    position: absolute;
    right: 10px;
    bottom:10px;
    font-size: 0.9rem;
    z-index: 1;
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
.edittask .edittask-actions button{
    cursor: pointer;
}
.edittask .edittask-actions button:hover{
    font-weight: 500;
}
.edittask .edittask-contents{
    display: flex;
    flex-direction: column;
    width: 100%;

}

.edittask .edittask-title{
    width: 100%;
}
.edittask .edittask-content{
    font-size: 0.9rem;
    line-height: 1.2rem;
    width: 100%;
}
.edittask input[type="text"]{
    border-style: none;
    font-size: 1rem;
    background-color: transparent;
}
.edittask textarea{
    border-style: none;
    background-color: transparent;
    resize: none;
}

.edittask .edittask-title:focus,
.edittask .edittask-content:focus{
    outline: none;
}
.edittask .completed span{
    cursor: pointer;
}

`

const text = {
    delete: {
        en: 'Delete',
        fr: 'Supprimer',
        icon: '🗑️',
    },
    send: {
        en: 'Send',
        fr: 'Envoyer',
        icon: '📤',
    },
    cancel: {
        en: 'Cancel',
        fr: 'Annuler',
        icon: '🗑️',
    },
    title: {
        en: 'Task name',
        fr: 'Nom de la tâche',
    },
    description: {
        en: 'Task description',
        fr: 'Description de la tâche',
    },
}

const AutoResizableTextarea = ({ value, onChange, placeholder }) => {
    const textareaRef = useRef(null)

    const handleTextareaChange = (e) => {
        onChange(e.target.value)
    }

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [value])

    return (
        <textarea
            ref={textareaRef}
            className="edittask-content"
            value={value}
            onChange={handleTextareaChange}
            placeholder={placeholder}
            rows="1"
        />
    )
}
