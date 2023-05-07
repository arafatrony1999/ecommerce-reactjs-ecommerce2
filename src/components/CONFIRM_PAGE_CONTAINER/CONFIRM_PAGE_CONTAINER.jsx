import React from 'react'
import PAYMENT_PAGE_ITEMS from '../../components/PAYMENT_PAGE_ITEMS/PAYMENT_PAGE_ITEMS'
import PAYMENT_INPUT_CONTAINER from '../../components/PAYMENT_INPUT_CONTAINER/PAYMENT_INPUT_CONTAINER'

const CONFIRM_PAGE_CONTAINER = () => {
    return (
        <div className='addresses'>
            Order Summery...
            <PAYMENT_PAGE_ITEMS />
            <PAYMENT_INPUT_CONTAINER />
        </div>
    )
}

export default CONFIRM_PAGE_CONTAINER