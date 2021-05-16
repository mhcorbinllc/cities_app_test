import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import './FancyInput.scss'

interface FancyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: IconProp
    iconColor?: string
}

const FancyInput = (props: FancyInputProps) => {
    const { icon, iconColor, ...rest } = props

    return (
        <div className="fancy-input-container">
            <input {...rest} />
            { icon && <FontAwesomeIcon icon={icon} color={iconColor} /> }
        </div>
    )
}

export default FancyInput