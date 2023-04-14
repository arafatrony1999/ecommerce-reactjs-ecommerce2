import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const VERIFICATION_PAGE = () => {
    const [code, setCode] = useState('')

    const location = useLocation();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('code', code)
        formData.append('user', location.state)

        axios.post('http://127.0.0.1:8000/api/verify_user', formData)
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className='login-page'>
            <h1>Please verify your account</h1>
            <p>We have sent you a six digit code in your given email address. Please enter the code below...</p>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={(e) => setCode(e.target.value)} placeholder='Enter your 6 digit code...' />
                <button type='submit'>Verify</button>
            </form>
            <p>Didn't recieve a code?
                <Link to='/'>Send code again</Link>
            </p>
        </div>
    )
}

export default VERIFICATION_PAGE