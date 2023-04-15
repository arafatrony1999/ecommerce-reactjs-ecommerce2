import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'

import division from '../../data/division.json'
import district from '../../data/district.json'
import thana from '../../data/thana.json'

const ADDRESS_ADD_MODAL = (props) => {
    const [validated, setValidated] = useState(false);

    const [userDivision, setUserDivision] = useState(null);
    const [userDistrict, setUserDistrict] = useState(null)
    const [userThana, setUserThana] = useState(null)
    const [userAddress, setUserAddress] = useState('')
    const [userPhone, setUserPhone] = useState('')

    const setSelectedDivision = (div) => {
        setUserDivision(div)
    }

    const setSelectedDistrict = (dis) => {
        setUserDistrict(dis)
    }

    const setSelectedThana = (than) => {
        setUserThana(than)
    }


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    
        setValidated(true);
    };


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ADD NEW ADDRESS
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Select Division</Form.Label>
                                <Select
                                    value={userDivision}
                                    onChange={setSelectedDivision}
                                    options={division.divisions}
                                    getOptionLabel={(options) => options.name}
                                    getOptionValue={(options) => options.name}
                                    isSearchable
                                    noOptionsMessage={() => 'No Division found'}
                                    placeholder='Select Division...'
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Select District</Form.Label>
                                <Select
                                    isDisabled={userDivision ? false : true}
                                    value={userDistrict}
                                    onChange={setSelectedDistrict}
                                    options={userDivision && district.districts.filter((currentElement) => {
                                        return userDivision.id === currentElement.division_id
                                    })}
                                    getOptionLabel={(options) => options.name}
                                    getOptionValue={(options) => options.name}
                                    isSearchable
                                    noOptionsMessage={() => 'No District found'}
                                    placeholder='Select District...'
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Select Thana</Form.Label>
                                <Select
                                    isDisabled={userDistrict ? false : true}
                                    value={userThana}
                                    onChange={setSelectedThana}
                                    options={userDistrict && thana.upazilas.filter((currentElement) => {
                                        return userDistrict.id === currentElement.district_id
                                    })}
                                    getOptionLabel={(options) => options.name}
                                    getOptionValue={(options) => options.name}
                                    isSearchable
                                    noOptionsMessage={() => 'No Thana found'}
                                    placeholder='Select Thana...'
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control value={userAddress} onChange={(e) => setUserAddress(e.target.value)} as="textarea" rows={3} required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control value={userPhone} onChange={(e) => setUserPhone(e.target.value)} required type="text" placeholder="Enter reciever phone number..." />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button className='btn btn-success'>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ADDRESS_ADD_MODAL