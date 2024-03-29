import React from 'react'
import { useCartContext } from '../../context/CartContext'
import PriceFormat from '../../helper/PriceFormat'
import { useUserContext } from '../../context/UserContext'

const PAYMENT_PAGE_ITEMS = () => {
    const { cart, sub_total } = useCartContext()
    const { selectedAddress, coupon } = useUserContext()

    return (
        <>
            <div className='addresses'>
                <div className="payment-items">
                    <div className="payment-item-line title">
                        <div className="payment-item-left">
                            PRODUCT
                        </div>
                        <div className="payment-item-right">
                            TOTAL
                        </div>
                    </div>
                    {
                        cart.map((cart) => {
                            return(
                                <div key={cart.id} className="payment-item-line">
                                    <div className="payment-item-left">
                                        {cart.products.name} <b> × {cart.quantity}</b>
                                    </div>
                                    <div className="payment-item-right">
                                        <b>
                                            {
                                                cart.product_details.offers ?
                                                <PriceFormat price={(cart.products.price - cart.products.price * cart.product_details.discount.discount_percent/100) * cart.quantity} /> :
                                                <PriceFormat price={cart.products.price * cart.quantity} />
                                            }
                                        </b>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="payment-items-all-details">
                    {
                        Object.keys(coupon).length === 0 ?
                        <div className="payment-item-line">
                            <div className="payment-item-left">
                                Subtotal
                            </div>
                            <div className="payment-item-right">
                                <PriceFormat price={sub_total} />
                            </div>
                        </div> :
                        <>
                            <div className="payment-item-line">
                                <div className="payment-item-left">
                                    Subtotal
                                </div>
                                <div className="payment-item-right">
                                    <del>
                                        <PriceFormat price={sub_total} />
                                    </del>
                                </div>
                            </div>
                            
                            <div className="payment-item-line">
                                <div className="payment-item-left"></div>
                                <div className="payment-item-right">
                                    <PriceFormat price={sub_total - coupon.discount} />
                                </div>
                            </div>
                        </>
                    }
                    <div className="payment-item-line">
                        <div className="payment-item-left">
                            Tax
                        </div>
                        <div className="payment-item-right">
                            BDT 0.00
                        </div>
                    </div>
                    <div className="payment-item-line">
                        <div className="payment-item-left">
                            Shipping Charge
                        </div>
                        <div className="payment-item-right">
                            <PriceFormat price={selectedAddress.district === 'Dhaka' ? 50 : 100} />
                        </div>
                    </div>
                    {
                        Object.keys(coupon).length === 0 ?
                        <div className="payment-item-line">
                            <div className="payment-item-left">
                                TOTAL
                            </div>
                            <div className="payment-item-right">
                                <PriceFormat price={sub_total + (selectedAddress.district === 'Dhaka' ? 50 : 100)} />
                            </div>
                        </div> :
                        <div className="payment-item-line">
                            <div className="payment-item-left">
                                TOTAL
                            </div>
                            <div className="payment-item-right">
                                <PriceFormat price={sub_total - coupon.discount + (selectedAddress.district === 'Dhaka' ? 50 : 100)} />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default PAYMENT_PAGE_ITEMS