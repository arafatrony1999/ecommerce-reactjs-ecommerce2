import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext'

const PAYMENT_PAGE_BTNS = () => {
    const { agreeCheck } = useUserContext()
    return (
        <div className='cart-last-btns'>
            <Link to='/marketplace' className="btn btn-danger">Return to Shop</Link>
            <Link to='/user/confirm-order' className={agreeCheck ? "btn btn-success" : "btn btn-success disabled"}>Complete Order</Link>
        </div>
    )
}

export default PAYMENT_PAGE_BTNS