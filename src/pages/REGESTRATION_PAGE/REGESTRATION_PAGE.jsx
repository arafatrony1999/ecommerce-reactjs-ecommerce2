import React, { useEffect, useState } from 'react';

import Alert from 'react-bootstrap/Alert';

import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

const REGESTRATIONPAGE = () => {
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [same, setSame] = useState(false);
    const [errorMessege, setErrorMessege] = useState("");

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

    async function handleSubmit(e){
        e.preventDefault();

        if(password===cpassword){
            if(password.length>=8){
                const formData = new FormData();
    
                formData.append('name',name)
                formData.append('user',email)
                formData.append('password',password)
                
                await fetch('http://127.0.0.1:8000/api/regestration',{
                    method: "POST",
                    body: formData
                })
                .then((res)=>{
                    if(!res.ok){
                        throw Error("Something went wrong");
                    }
                    else{
                        navigate('/login',{state:"Regestration Success"});
                    }
                })
                .catch((error)=>{
                    console.log(error.message);
                })
            }
            else{
                setSame(true);
                setErrorMessege("Password must be at least 8 character!");
            }
        }
        else{
            setSame(true);
            setErrorMessege("Passwords must be same!");
        }

    };

    if(loading){
        return <h1>Loading...</h1>
    }


    return (
        <div className='login-page'>
            <h4>Create an account</h4>
            <form onSubmit={handleSubmit}>
                <div className="input-field-login2">
                    <input style={{paddingLeft: "10px"}} onChange={(e)=>{setName(e.target.value)}} className='login-input' type="text" placeholder='Full Name' />
                </div>
                <div className="input-field-login2">
                    <input style={{paddingLeft: "10px"}} onChange={(e)=>{setEmail(e.target.value)}} className='login-input' type="text" placeholder='Email' />
                </div>
                <div className="input-field-login2">
                    <input style={{paddingLeft: "10px"}} onChange={(e)=>{setPassword(e.target.value)}} className='login-input' type="password" placeholder='Password' />
                </div>
                <div className="input-field-login2">
                    <input style={{paddingLeft: "10px"}} onChange={(e)=>{setCpassword(e.target.value)}} className='login-input' type="password" placeholder='Confirm Password' />
                </div>

                {
                    same && <Alert variant="danger">{errorMessege}</Alert>
                }
                
                <div>
                    <input type="checkbox" label="Check me out" />
                    <span style={{paddingLeft:"10px"}}>By signing up you agree to our terms and conditions.</span>
                </div>

                <button className='login-btn' type='submit'>CREATE ACCOUNT</button>

                <div className="no-acc">
                    <span>Already have an account?</span>
                    <span>
                        <Link to="/login">Login Now</Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default REGESTRATIONPAGE;
