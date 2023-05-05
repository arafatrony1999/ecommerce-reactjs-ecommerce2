import Form from 'react-bootstrap/Form';
import { useUserContext } from '../../context/UserContext';
import { useCartContext } from '../../context/CartContext';
import PriceFormat from '../../helper/PriceFormat'

const PAYMENT_INPUT_CONTAINER = () => {
    const { paymentMethod, selectedAddress } = useUserContext()
    const { sub_total } = useCartContext()
    return (
        <div className='payment-input-container my-2'>
            <div className="payment-details-line">
                <div className="payment-line-left">Payment Method</div>
                <div className="payment-line-middle">:</div>
                <div className="payment-line-right">
                    <span>{paymentMethod.title}</span>
                </div>
            </div>
            <div className="payment-details-line">
                <div className="payment-line-left">Account Number</div>
                <div className="payment-line-middle">:</div>
                <div className="payment-line-right">
                    <a href="tel:+8801879923111">+8801879923111</a>
                    <span>(bKash/ Nagad)</span>
                </div>
            </div>
            <div className="payment-details-line">
                <div className="payment-line-left">Total Ammount</div>
                <div className="payment-line-middle">:</div>
                <div style={{color: 'green', fontWeight: 'bold'}} className="payment-line-right">
                    {
                        paymentMethod.id === 'cod' ?
                        <PriceFormat price={selectedAddress.district === 'Dhaka' ? 50 : 100} /> :
                        <PriceFormat price={sub_total + (selectedAddress.district === 'Dhaka' ? 50 : 100)} />
                    }
                </div>
            </div>

            
            <div className="payment-details-line">
                <div className="payment-line-left">TxnID</div>
                <div className="payment-line-middle">:</div>
                <div className="payment-line-right">
                    <Form.Control type="text" placeholder="Enter TxnID..." />
                </div>
            </div>
            
            <div className="payment-details-line my-2">
                <div className="payment-line-left">Sender Mobile Number</div>
                <div className="payment-line-middle">:</div>
                <div className="payment-line-right">
                    <Form.Control type="text" placeholder="Sender Mobile Number" />
                </div>
            </div>
        </div>
    )
}

export default PAYMENT_INPUT_CONTAINER