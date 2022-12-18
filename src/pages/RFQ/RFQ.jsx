import React from 'react';
import FORM from './FORM/FORM';
import Form from 'react-bootstrap/Form';

const RFQ = () => {
    return (
        <div className='rfq'>
            <div className="rfq-title">
                <div className="rfq-title-left">Global RFQ</div>
                <div className="rfq-title-right">To submit the RFQ you have to login first.</div>
            </div>

            <div className="rfq-form">
                <div className="single-input">
                    <div className="rfq-input-label">Looking For</div>
                    <div className="rfq-input-field">
                        <input className='rfq-input' type="text" name="" placeholder='Looking For' id="" />
                    </div>
                </div>
                <div className="single-input">
                    <div className="rfq-input-label">Quantity</div>
                    <div className="rfq-input-field">
                        <input className='rfq-input' type="text" name="" placeholder='Required Quantity' id="" />
                    </div>
                </div>
                <div className="single-input">
                    <div className="rfq-input-label">Unit Name</div>
                    <div className="rfq-input-field">
                        <input className='rfq-input' type="text" name="" placeholder='Unit Name' id="" />
                    </div>
                </div>

                <div className="single-input">
                    <div className="rfq-input-label">Catagory</div>
                    <div className="rfq-input-field">
                        <FORM />
                    </div>
                </div>
                
                <div className="single-input single-textarea">
                    <div className="rfq-input-label">Product Description</div>
                    <div className="rfq-input-field rfq-textarea">
                        <textarea className='rfq-input' type="text" name="" id="" />
                    </div>
                </div>
                
                <div className="single-input">
                    <div className="rfq-input-label">Phone</div>
                    <div className="rfq-input-field">
                        <input className='rfq-input' type="text" name="" placeholder='Phone' id="" />
                    </div>
                </div>
                <div className="single-input">
                    <div className="rfq-input-label">Email</div>
                    <div className="rfq-input-field">
                        <input className='rfq-input' type="text" name="" placeholder='Email' id="" />
                    </div>
                </div>
                <div className="single-input">
                    <div className="rfq-input-label">Email</div>
                    <div className="rfq-input-field">
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Control type="file" multiple />
                        </Form.Group>
                    </div>
                </div>
            </div>

            <div className="rfq-title">
                <div className="rfq-title-left">Global RFQ</div>
                <div className="rfq-title-right">To submit the RFQ you have to login first.</div>
            </div>
        </div>
    );
}

export default RFQ;
