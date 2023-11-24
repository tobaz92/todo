import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons'
const TodoItem = (props) => {
    const { id, completed, title, description, date } = props.data
    const user = props.user
    const isLast = props.isLast
    const base = {
        title: false,
        description: false,
        date: false,
        user: false,
    }
    const [editable, setEditable] = useState(base)

    const handlerEditable = (key) => {
        setEditable({ ...editable, [key]: true })
    }
    const handlerResetEditable = () => {
        setEditable(base)
    }
    const sendNewValue = (value, keyChange) => {
        props.newValue({
            id: id,
            key: keyChange,
            value: value,
        })
    }

    return (
        <div style={containerStyles(isLast)}>
            <div>
                <div style={checkboxStyles} onClick={() => props.state(id)}>
                    <div style={checkboxStylesActive(completed)}></div>
                </div>
            </div>
            <div style={containerText}>
                <div
                    style={titleStyles}
                    onKeyDown={(e) =>
                        e.code === 'Enter' ? handlerResetEditable() : null
                    }
                >
                    <div
                        onClick={() => handlerEditable('title')}
                        style={{
                            display: editable.title ? 'none' : 'inline-block',
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            display: !editable.title ? 'none' : 'block',
                        }}
                    >
                        <input
                            style={{
                                ...titleStyles,
                                width: '100%',
                                padding: '2px 5px',
                            }}
                            type="text"
                            defaultValue={title}
                            onChange={(e) =>
                                sendNewValue(e.target.value, 'title')
                            }
                        />
                    </div>
                </div>
                <div style={descriptionStyles}>{description}</div>
                <div style={metasStyles}>
                    <Icon.Calendar4Event />{' '}
                    <span style={dateStyle}>{date}</span> -
                    <div style={blockIconStyles}>
                        <Icon.Person />
                        <span>{user?.name}</span>
                    </div>
                </div>
            </div>
            {props.data.completed && (
                <div style={trashIconStyles} onClick={() => props.delete(id)}>
                    <Icon.Trash />
                </div>
            )}
        </div>
    )
}
export default TodoItem
const trashIconStyles = {
    cursor: 'pointer',
}
const containerStyles = (isLast) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '1rem',
    borderBottom: isLast ? '' : '1px solid #e7e7e7',
    padding: '1rem 0',
})

const containerText = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: '100%',
}
const checkboxStyles = {
    width: '20px',
    height: '20px',
    border: '1px solid rgb(170 165 165)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50%',
    padding: '2px',
}
const checkboxStylesActive = (completed) => ({
    width: '100%',
    height: '100%',
    backgroundColor: completed ? 'black' : '',
    borderRadius: '50%',
})

const titleStyles = {
    fontSize: '1rem',
    color: '#0f0f1a',
}
const descriptionStyles = {
    fontSize: '1rem',
    color: '#5f6390',
}
const metasStyles = {
    fontSize: '1rem',
    color: '#5f6390',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
}
const blockIconStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
}
const dateStyle = {}
