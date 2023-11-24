import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons'
import { colors, boxShadow } from 'presentation/styles/variables'
import { TodoService } from 'domain/todo/TodoService'

const TodoAdd = (props) => {
    const add = () => {
        console.log('Add Task')
    }

    return (
        <div style={containerStyles}>
            <div>
                <input
                    style={nameStyles}
                    id="name"
                    type="text"
                    placeholder="Task name here..."
                />
            </div>
            <div>
                <textarea
                    style={descriptionStyles}
                    id="description"
                    placeholder="Description"
                />
            </div>
            <div style={containerFooterActionsStyles}>
                <div style={containerButtonsStyle}>
                    <div>
                        <input
                            id="date"
                            type="date"
                            style={{ display: 'none' }}
                        />
                        <CustomButton
                            onClick={() => {
                                console.log('Due Date')
                            }}
                        >
                            <Icon.Calendar4Event /> <span>Due Date</span>
                        </CustomButton>
                    </div>
                    <div>
                        <input
                            id="user"
                            type="text"
                            style={{ display: 'none' }}
                        />
                        <CustomButton
                            onClick={() => {
                                console.log('Assign To')
                            }}
                        >
                            <Icon.Person /> <span>Assign To</span>
                        </CustomButton>
                    </div>
                </div>
                <div style={containerButtonsStyle}>
                    <div>
                        <CustomButton
                            onClick={() => {
                                console.log('Cancel')
                            }}
                        >
                            Cancel
                        </CustomButton>
                    </div>
                    <div>
                        <CustomButton primary={true} onClick={() => add()}>
                            Add Task
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoAdd

const containerStyles = {
    position: 'absolute',
    left: '50%',
    bottom: '0',
    width: '110%',
    backgroundColor: colors.white,
    borderRadius: '10px',
    boxShadow: boxShadow,
    padding: '30px',
    transform: 'translate(-50%,95%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
}

const nameStyles = {
    width: '100%',
}

const descriptionStyles = {
    width: '100%',
}

const containerFooterActionsStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

const containerButtonsStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.8rem',
}

const buttonStyles = {
    border: `1px solid`,
    borderColor: colors.grayLightness,
    padding: '0.5rem 0.8rem',
    borderRadius: '10px',
    color: colors.gray,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: '500',
    cursor: 'pointer',
    backgroundColor: colors.white,
    transition: 'all 0.2s',
}
const buttonHoverStyles = {
    color: colors.primary,
    borderColor: colors.primary,
}

const buttonPrimaryStyles = {
    backgroundColor: colors.primary,
    color: colors.white,
}

const buttonPrimaryHoverStyles = {
    backgroundColor: colors.primaryDarkness,
    color: colors.white,
}
const CustomButton = (props) => {
    const [hover, isHover] = useState(false)

    const buttonPrimary = hover
        ? {
              ...buttonStyles,
              ...buttonPrimaryStyles,
              ...buttonPrimaryHoverStyles,
          }
        : {
              ...buttonStyles,
              ...buttonPrimaryStyles,
          }

    const buttonDefault = hover
        ? {
              ...buttonStyles,
              ...buttonHoverStyles,
          }
        : buttonStyles

    const style = props.primary ? buttonPrimary : buttonDefault

    return (
        <button
            style={style}
            onClick={(e) => (props.onClick ? props.onClick(e) : null)}
            onMouseEnter={() => isHover(true)}
            onMouseOut={() => isHover(false)}
        >
            <div style={{ pointerEvents: 'none' }}>{props.children}</div>
        </button>
    )
}
