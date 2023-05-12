import React from 'react'
import { useSearchParams } from 'react-router-dom'
import PROFILEBREAD from '../../components/PROFILE_BREAD/PROFILE_BREAD'
import ORDER_SUMMERY_CONTAINER from '../../components/ORDER_SUMMERY_CONTAINER/ORDER_SUMMERY_CONTAINER'

const ORDER_DETAILS_PAGE = () => {
    const [searchParams] = useSearchParams()

    return (
        <div className='profile-right'>
            <PROFILEBREAD pageTitle={`Order ID : ${searchParams.get('order_id')}`} />

            <ORDER_SUMMERY_CONTAINER orderID={searchParams.get('order_id')} />


            {/* {
                orders.length !==0 && orders.filter((currentElem) => {
                    return currentElem.order_id === searchParams.get('order_id')
                })[0].order_items.map((currentElem) => {
                    return <h1>{currentElem.id}</h1>
                })
            } */}


        </div>
    )
}

export default ORDER_DETAILS_PAGE