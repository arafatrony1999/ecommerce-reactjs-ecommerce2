import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';

const VERIFICATION_PAGE = () => {
    const [code, setCode] = useState('')
    const [alreadyVerified, setAlreadyVerified] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('code', code)
        formData.append('user', location.state)

        axios.post('http://127.0.0.1:8000/api/verify_user', formData)
        .then((res) => {
            if(res.data.verify === 1){
                navigate('/login',{state:"Regestration Success"});
            }else if(res.data.verified === 1){
                setAlreadyVerified(true)
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className='login-page' style={{textAlign:'center'}}>
            <h1>Please verify your account</h1>
            <p>We have sent you a six digit code in your given email address 
                <b> {(location.state)}</b>. Please enter the code below...</p>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={(e) => setCode(e.target.value)} placeholder='Enter your 6 digit code...' />
                <button type='submit'>Verify</button>
            </form>
            {
                alreadyVerified && <Alert className='my-2 py-1' variant='danger'>This account is already verified!
                    <Link style={{textDecoration: 'underline'}} className='pl-1' to='/login'>Login Now</Link>
                </Alert>
            }
            <p>Didn't recieve a code?
                <Link style={{textDecoration: 'underline'}} to='/'>Send code again</Link>
            </p>
        </div>
    )
}

export default VERIFICATION_PAGE