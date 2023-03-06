import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useUserContext } from '../../context/UserContext';
import ERRORMESSAGE from '../ERROR_MESSAGE/ERROR_MESSAGE';
import { useNavigate } from 'react-router-dom';

const RESETPASSWORDCONTAINER = () => {
    const { updatePassword, incorrect, correct } = useUserContext();

    
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword1, setNewPassword1] = useState('')
    const [newPassword2, setNewPassword2] = useState('')
    
    const [passOneWrong, setPassOneWrong] = useState(false)
    const [passTwoWrong, setPassTwoWrong] = useState(false)


    const navigate = useNavigate();


    const onSubmit = (e) => {
        e.preventDefault();

        if(newPassword1.length < 8) {
            setPassOneWrong(true);
        }else{
            setPassOneWrong(false)

            if(newPassword1 !== newPassword2){
                setPassTwoWrong(true)
            }else{
                setPassTwoWrong(false)
                updatePassword(oldPassword, newPassword1)
            }
        }

    }

    useEffect(() => {
        if(correct){
            setOldPassword('')
            setNewPassword1('')
            setNewPassword2('')
            navigate('/user/profile', {state:"password success"})
        }
    }, [correct, navigate]);


    return (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} type="password" placeholder="Enter your old password" />
                
                    { incorrect && <ERRORMESSAGE errorMessage="Your password is incorrect" /> }
                </Form.Group>
                
                
                <Form.Group className="mb-3">
                    <Form.Label>Enter New Password</Form.Label>
                    <Form.Control value={newPassword1} onChange={(e) => setNewPassword1(e.target.value)} type="password" placeholder="Enter your new password" />
                
                    {
                        passOneWrong && <ERRORMESSAGE errorMessage="New password should contain at least 8 character" />
                    }
                </Form.Group>

                
                <Form.Group className="mb-3">
                    <Form.Label>Re-Enter new Password</Form.Label>
                    <Form.Control value={newPassword2} onChange={(e) => setNewPassword2(e.target.value)} type="password" placeholder="Re-Enter your new password" />
                
                    {
                        passTwoWrong && <ERRORMESSAGE errorMessage="New passwords must be same" />
                    }
                    
                </Form.Group>

                <Button varient='primary' type='submit'> Update Password</Button>
            </Form>
        </>
    );
}

export default RESETPASSWORDCONTAINER;
