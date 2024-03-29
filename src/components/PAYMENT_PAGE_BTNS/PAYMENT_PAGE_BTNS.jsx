import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext'
import { useCartContext } from '../../context/CartContext'

const PAYMENT_PAGE_BTNS = () => {
    const { agreeCheck, selectedAddress } = useUserContext()
    const { txn, senderNumber } = useCartContext()

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
                <Link to='/user/confirm-order' className={agreeCheck ? "btn btn-success" : "btn btn-success disabled"}>Complete Order</Link>
            </div>
        )
    }
}

export default PAYMENT_PAGE_BTNS