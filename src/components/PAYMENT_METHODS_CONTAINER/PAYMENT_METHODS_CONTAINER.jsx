import React from 'react'
import cod from '../../assets/images/cod.png'
import bKash from '../../assets/images/bkash.png'
import nagad from '../../assets/images/nagad.png'
import { useUserContext } from '../../context/UserContext'

const PAYMENT_METHODS_CONTAINER = () => {
    const { selectPaymentMethod, paymentMethod } = useUserContext()

    const paymentMethods = [
        {
            id: 'cod',
            title: 'Cash On Delivery',
            img: cod
        },
        {
            id: 'bkash',
            title: 'bKash',
            img: bKash
        },
        {
            id: 'nagad',
            title: 'Nagad',
            img: nagad
        }
    ]
    return (
        <div className='addresses'>
            <div className="payment-methods">
                {
                    paymentMethods.map((method) => {
                        return(
                            <div onClick={() => selectPaymentMethod(method)} key={method.id} className={paymentMethod.id === method.id ? "single-payment-method active" : "single-payment-method"}>
                                <div className="single-payment-logo">
                                    <img src={method.img} alt={method.title} />
                                </div>
                                <div className="single-payment-title py-2">{method.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PAYMENT_METHODS_CONTAINER