import React, { useEffect, useState } from 'react';

import Alert from 'react-bootstrap/Alert';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

const LOGINPAGE = () => {
    const [loading, setLoading] = useState(true)
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const [notVerified, setNotVerified] = useState(false)

    const [name, setName] = useState("arafat.rony1999@gmail.com");
    const [password, setPassword] = useState("123456789");

    const location = useLocation();
    const navigate = useNavigate();

    const { user } = useUserContext();

    useEffect(() => {
        if(user.length === 1){
            if(user[0].user === 0){
                setLoading(false)
            }else{
                navigate('/user/dashboard')
            }
        }
    }, [navigate, user]);

    useEffect(() => {
        if(location.state === "Regestration Success"){
            setSuccess(true)
        }
    }, [location]);
    
    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData();

        formData.append('name',name)
        formData.append('password',password)
        
        await fetch('http://127.0.0.1:8000/api/login',{
            method: "POST",
            body: formData
        })
        .then((res)=>{
            if(!res.ok){
                throw Error("Something went wrong");
            }
            else{
                return res.json();
            }
        })
        .then((data) => {
            if(data === 0){
                setFailed(true)
            }else{
                if(data.verified === 0){
                    setNotVerified(true)
                }else{
                    localStorage.setItem('auth',JSON.stringify(data));
                    window.location.replace('/user/dashboard');
                }
            }
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div className='login-page'>
            <h4>Login to your account</h4>
            <form onSubmit={onSubmit}>
                {
                    success && <Alert variant="success">Successfully Registered! Now login using your Email/Password</Alert>
                }
                <div className="input-field-login">
                    <input style={{paddingLeft: "10px"}} value={name} className='login-input' onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Email' />
                </div>

                <div className="input-field-login">
                    <input style={{paddingLeft: "10px"}} value={password} onChange={(e)=>{setPassword(e.target.value)}} className='login-input' type="password" placeholder='Password' />
                    <div className="login-other">
                        <div className="forget-pass">
                            <input type="checkbox" label="Check me out" />
                            <span>Check me out</span>
                        </div>
                        <div className="forget-pass a-cen">
                            <a href="/">Forget Password</a>
                        </div>
                    </div>
                </div>

                <button className='login-btn' type='submit'>LOGIN</button>
                
                {
                    failed && <Alert variant="danger">Email / Password is incorrect</Alert>
                }
                {
                    notVerified && <Alert variant="danger">
                        Your account is not verified!
                        <Link style={{textDecoration: 'underline'}} to='/'> Verify Now? </Link>
                    </Alert>
                }

                <div className="no-acc">
                    <span>Don't have an account?</span>
                    <span>
                        <Link to="/regestration">Register Now</Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default LOGINPAGE;
