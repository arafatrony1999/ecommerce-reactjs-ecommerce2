import Form from 'react-bootstrap/Form';
import { useUserContext } from '../../context/UserContext';
import { useCartContext } from '../../context/CartContext';
import PriceFormat from '../../helper/PriceFormat'
import { useState } from 'react';
import { toast } from 'react-toastify';

const PAYMENT_INPUT_CONTAINER = () => {
    const [txnID, setTxnID] = useState('')
    const [senderNum, setSenderNum] = useState('')
    
    const { paymentMethod, selectedAddress, coupon } = useUserContext()
    const { sub_total, sendMoneyInfo, txn, senderNumber } = useCartContext()

    const onSubmit = (e) => {
        e.preventDefault()
        sendMoneyInfo(txnID, senderNum)
        toast.success('Your record has been recorder! We will verify those information and inform you.', {
            toastId: 'success1',
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    }

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
                <div className="payment-line-left">Total Amount</div>
                <div className="payment-line-middle">:</div>
                <div style={{color: 'green', fontWeight: 'bold'}} className="payment-line-right">
                    {
                        paymentMethod.id === 'cod' ?
                        <PriceFormat price={selectedAddress.district === 'Dhaka' ? 50 : 100} /> :
                        <>
                            {
                                Object.keys(coupon).length === 0 ?
                                <PriceFormat price={sub_total + (selectedAddress.district === 'Dhaka' ? 50 : 100)} /> :
                                <>
                                    <del><PriceFormat price={sub_total + (selectedAddress.district === 'Dhaka' ? 50 : 100)} /></del> <br />
                                    <PriceFormat price={sub_total - (sub_total * coupon.discount/100) + (selectedAddress.district === 'Dhaka' ? 50 : 100)} />
                                </>
                            }
                        </>
                    }
                </div>
            </div>

            <Form onSubmit={onSubmit}>
                <div className="payment-details-line">
                    <div className="payment-line-left">TxnID</div>
                    <div className="payment-line-middle">:</div>
                    <div className="payment-line-right">
                        <Form.Control defaultValue={txn} type="text" onChange={(e) => setTxnID(e.target.value)} placeholder="Enter TxnID..." required />
                    </div>
                </div>
                
                <div className="payment-details-line my-2">
                    <div className="payment-line-left">Sender Mobile Number</div>
                    <div className="payment-line-middle">:</div>
                    <div className="payment-line-right">
                        <Form.Control defaultValue={senderNumber} type="text" onChange={(e) => setSenderNum(e.target.value)} placeholder="Sender Mobile Number" required />
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <button type='submit' className='btn btn-info my-2'>Submit</button>
                </div>
            </Form>
        </div>
    )
}

export default PAYMENT_INPUT_CONTAINER