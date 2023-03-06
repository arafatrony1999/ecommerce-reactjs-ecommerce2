import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useUserContext } from '../../context/UserContext';
import { Link, useLocation } from 'react-router-dom';

const EDITPROFILECONTAINER = () => {
    const { user, updateUser } = useUserContext();

    
    const [name, setName] = useState(user[0].name)
    const [phone, setPhone] = useState(user[0].phone)
    const [address, setAddress] = useState(user[0].address)

    const [passSuccess, setPassSuccess] = useState(false)

    
    const location = useLocation();


    const onSubmit = (e) => {
        e.preventDefault();

        updateUser(name, phone, address)
    }

    
    useEffect(() => {
        if(location.state === "password success"){
            setPassSuccess(true)
        }
    }, [location]);


    return (
        <div className='edit-profile-container'>
            {
                passSuccess && <Alert variant='primary'> Password updated successfully! </Alert>
            }
            
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control defaultValue={user[0].name} name='name' onChange={(e) => setName(e.target.value)} type="text" placeholder="User Name" />
                </Form.Group>
            
                <Form.Group className="mb-3">
                    <Form.Label>User Email</Form.Label>
                    <Form.Control defaultValue={user[0].user} type="text" placeholder="User Email" disabled />
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>Phone No.</Form.Label>
                    <Form.Control defaultValue={user[0].phone} onChange={e => setPhone(e.target.value)} type="text" name='phone' placeholder='Enter your phone no.' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Your Address</Form.Label>
                    <Form.Control defaultValue={user[0].address} onChange={e => setAddress(e.target.value)} as="textarea" name='address' placeholder='Your address...' rows={3} />
                </Form.Group>

                <div className="profile-btns">
                    <Button type='submit' variant="primary">
                        Submit
                    </Button>
                    <Link className='btn btn-danger' to='/user/profile/reset-password'> Reset Password</Link>
                </div>
            </Form>
        </div>
    );
}

export default EDITPROFILECONTAINER;
