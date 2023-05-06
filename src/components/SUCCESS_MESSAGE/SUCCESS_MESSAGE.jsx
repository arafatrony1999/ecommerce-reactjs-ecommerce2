import React from 'react'

const SUCCESS_MESSAGE = (props) => {
    return (
        <div className='success-message'>
            {props.successMessage}
        </div>
    )
}

export default SUCCESS_MESSAGE