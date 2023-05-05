import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useUserContext } from '../../context/UserContext'

const COUPON_CONTAINER = () => {
    const [coupon, setCoupon] = useState('')

    const { onSubmitCoupon } = useUserContext()

    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitCoupon(coupon)
    }
    return (
        <div className='payment-input-container my-2'>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Have any coupon code? Enter here...</Form.Label>
                    <div className="d-flex">
                        <Form.Control onChange={(e) => setCoupon(e.target.value)} style={{width: '75%'}} type="text" placeholder="Enter Coupon Code" />
                        <button className='btn btn-success' type='submit'>Apply Coupon</button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    )
}

export default COUPON_CONTAINER