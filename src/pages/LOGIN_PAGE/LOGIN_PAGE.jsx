import React, { useEffect, useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';

import { Link, useLocation, useNavigate } from 'react-router-dom';

const LOGINPAGE = () => {
    const [type, setType] = useState(false);
    const [currentType, setCurrentType] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(location.state==="Regestration Success"){
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
        .then((data)=>{
            if(data===0){
                setFailed(true)
            }else{
                localStorage.setItem('auth',JSON.stringify(data));
                navigate('/profile');
            }
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    const handleEP = () => {
        setType(!type);
        setCurrentType(!currentType);
        setName("");
    }

    return (
        <div className='login-page'>
            <h4>Login to your account</h4>
            <form onSubmit={onSubmit}>
                {
                    success && <Alert variant="success">Successfully Registered! Now login using your Email/Password</Alert>
                }
                <div className="input-field-login">
                    {
                        type ?
                        <input style={{paddingLeft: "10px"}} className='login-input' onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Email' />
                            :
                        <InputGroup className="login-input" style={{border:"none"}}>
                            <DropdownButton title="(BD) +880">
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                            <Form.Control placeholder='018******' onChange={(e)=>{setName(e.target.value)}} />
                        </InputGroup>
                    }
                    <span onClick={handleEP}>USE {currentType ? "PHONE" : "EMAIL"} INSTEAD</span>
                </div>

                <div className="input-field-login">
                    <input style={{paddingLeft: "10px"}} onChange={(e)=>{setPassword(e.target.value)}} className='login-input' type="password" placeholder='Password' />
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
