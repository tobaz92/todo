import React, { useState } from 'react'

import { colors } from 'presentation/styles/variables'

export const Button = ({ primary, onClick, children }) => {
    const [hover, setHover] = useState(false)

    const buttonStyle = {
        ...buttonStyles,
        ...(primary ? buttonPrimaryStyles : {}),
        ...(hover && (primary ? buttonPrimaryHoverStyles : buttonHoverStyles)),
    }

    return (
        <button
            style={buttonStyle}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div style={alignStyle}>{children}</div>
        </button>
    )
}

const buttonStyles = {
    border: '1px solid',
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
const alignStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    pointerEvents: 'none',
}
