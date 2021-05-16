import React from 'react'

import './FormContainer.scss'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    sticky?: boolean
}

const Form = (props: FormProps) => {
    return (
        <div className={`form-container ${props.sticky ? "sticky" : ""}`}>
            <form className="form-primary">
                {props.children}
            </form>
        </div>
    )
}

export default Form