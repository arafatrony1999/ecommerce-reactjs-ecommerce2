import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useUserContext } from '../../context/UserContext';
import { Link, useLocation } from 'react-router-dom';
import ERRORMESSAGE from '../../components/ERROR_MESSAGE/ERROR_MESSAGE'

const EDITPROFILECONTAINER = () => {
    const { user, updateUser, incorrect, userUpdateSuccessful } = useUserContext();

    const [name, setName] = useState(user[0].name)
    const [phone, setPhone] = useState(user[0].phone)
    const [email, setEmail] = useState(user[0].user)
    const [password, setPassword] = useState('')

    const [passSuccess, setPassSuccess] = useState(false)

    const location = useLocation();


    const onSubmit = (e) => {
        e.preventDefault();
        updateUser(name, phone, email, password)
    }
    
    useEffect(() => {
        if(location.state === "password success"){
            setPassSuccess(true)
        }
    }, [location]);


    return (
        <div className='edit-profile-container'>
            {
                passSuccess && <Alert variant='primary'>Password updated successfully!</Alert>
            }

            {
                userUpdateSuccessful && <Alert variant='primary'>User Updated successfully!</Alert>
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
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => setPassword(e.target.value)} type="password" name='phone' placeholder='Enter your password' />
                </Form.Group>

                
                { incorrect && <ERRORMESSAGE errorMessage="Your password is incorrect" /> }

                <div className="profile-btns">
                    <Link className='btn btn-danger' to='/user/profile/reset-password'> Reset Password</Link>
                    <Button type='submit' variant="primary">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default EDITPROFILECONTAINER;
