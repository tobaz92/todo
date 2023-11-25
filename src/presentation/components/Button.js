import React, { useState } from 'react'

import { colors, boxShadow } from 'presentation/styles/variables'

export const Button = (props) => {
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
            <div style={alignStyle}>{props.children}</div>
        </button>
    )
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
const alignStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    PointerEvent: 'none',
}
