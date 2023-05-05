import React from 'react'
import Form from 'react-bootstrap/Form';
import CARTITEMCONTAINER from '../CART_ITEM_CONTAINER/CART_ITEM_CONTAINER';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import DELIVERY_INFO_BTNS from '../DELIVERY_INFO_BTNS/DELIVERY_INFO_BTNS';

const DELIVERY_INFO_CONTAINER = () => {
    return (
        <>
            <CARTITEMCONTAINER />
            <Row className='delivery-info-container'>
                <Col>
                    <Form.Label>Select Delivery Info...</Form.Label>
                </Col>
                <Col>
                    <Form.Select required>
                        <option>Home Delivery</option>
                    </Form.Select>
                </Col>
            </Row>
            <DELIVERY_INFO_BTNS />
        </>
    )
}

export default DELIVERY_INFO_CONTAINER