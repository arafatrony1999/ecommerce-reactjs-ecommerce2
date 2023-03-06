import React from 'react';

const ERRORMESSAGE = (props) => {
    return (
        <div className='error-message'>
            {props.errorMessage}
        </div>
    );
}

export default ERRORMESSAGE;
