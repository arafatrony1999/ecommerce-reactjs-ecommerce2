import React from 'react'
import PriceFormat from '../../helper/PriceFormat'

const SUCCESS_MESSAGE = (props) => {
    return (
        <div className='success-message'>
            Congratulation! You've got <PriceFormat price={props.successMessage} /> Taka discount.
        </div>
    )
}

export default SUCCESS_MESSAGE