import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext'
import { useCartContext } from '../../context/CartContext'
import Swal from 'sweetalert2';

const CONFIRM_PAGE_BTNS = () => {
    const { selectedAddress } = useUserContext()
    const { txn, senderNumber, confirmOrder, orderPlaceSuccess, orderProcess } = useCartContext()

    const [btnText, setBtnText] = useState('Confirm Order')

    const handleClick = () => {
        confirmOrder(selectedAddress.id, txn, senderNumber)
    }

    useEffect(() => {
        if(orderPlaceSuccess){
            Swal.fire(
                'Good job!',
                'Order Placed Successfully!',
                'success'
            );

            setBtnText('Confirm Order')
        }
    
        if(orderProcess){
            setBtnText('Loading...')
        }
    }, [orderPlaceSuccess, orderProcess])

    if(Object.keys(selectedAddress).length === 0){
        return(
            <p style={{color: 'red'}} className='py-3'>Your didn't select any address. <Link className='text-decoration-underline' to='/user/checkout'>Tap here</Link> to select delivery address.</p>
        )
    }else if(txn.length === 0){
        return(
            <p style={{color: 'red'}} className='py-3'>Please enter your transactions ID</p>
        )
    }else if(senderNumber.length === 0){
        return(
            <p style={{color: 'red'}} className='py-3'>Please enter your payment phone number</p>
        )
    }else{
        return (
            <div className='cart-last-btns'>
                <Link to='/marketplace' className="btn btn-danger">Return to Shop</Link>
                <button onClick={handleClick} className={btnText === 'Loading...' ? "btn btn-success disabled" : "btn btn-success"}>
                    {btnText}
                </button>
            </div>
        )
    }
}

export default CONFIRM_PAGE_BTNS