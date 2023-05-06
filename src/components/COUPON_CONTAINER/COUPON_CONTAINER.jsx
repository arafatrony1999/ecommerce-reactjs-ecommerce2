import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useUserContext } from '../../context/UserContext'
import ERRORMESSAGE from '../ERROR_MESSAGE/ERROR_MESSAGE'
import SUCCESS_MESSAGE from '../SUCCESS_MESSAGE/SUCCESS_MESSAGE'

const COUPON_CONTAINER = () => {
    const [code, setCode] = useState('')

    const { onSubmitCoupon, noCoupon, coupon } = useUserContext()

    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitCoupon(code)
    }
    return (
        <div className='payment-input-container my-2'>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Have any coupon code? Enter here...</Form.Label>
                    <div className="d-flex">
                        <Form.Control value={code} onChange={(e) => setCode(e.target.value)} style={{width: '75%'}} type="text" placeholder="Enter Coupon Code" />
                        <button disabled={code.length === 0 ? true : false} className='btn btn-success' type='submit'>Apply Coupon</button>
                    </div>
                </Form.Group>
            </Form>
            {
                noCoupon && <ERRORMESSAGE errorMessage='Invalid Coupon code. Make sure your spelling and case are correct' />
            }

            {
                Object.keys(coupon).length !== 0 && <SUCCESS_MESSAGE successMessage={"Congratulation! You've got "+coupon.discount+"% discount."} />
            }
        </div>
    )
}

export default COUPON_CONTAINER