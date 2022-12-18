import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';

import { Link, useNavigate } from 'react-router-dom';

const REGESTRATIONPAGE = () => {
    const [userType, setUserType] = useState("Phone");
    const [type, setType] = useState(false);
    const [currentType, setCurrentType] = useState(false);
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [same, setSame] = useState(false);
    const [errorMessege, setErrorMessege] = useState("");

    const navigate = useNavigate();

    const handleEP = () => {
        setUser("");
        setType(!type);
        setCurrentType(!currentType);
    }


    async function handleSubmit(e){
        e.preventDefault();

        if(type){
            setUserType("Phone");
        }else{
            setUserType("Email");
        }

        if(password===cpassword){
            if(password.length>=8){
                const formData = new FormData();
    
                formData.append('name',name)
                formData.append('type',userType)
                formData.append('user',user)
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


    return (
        <div className='login-page'>
            <h4>Create an account</h4>
            <form onSubmit={handleSubmit}>
                <div className="input-field-login2">
                    <input style={{paddingLeft: "10px"}} onChange={(e)=>{setName(e.target.value)}} className='login-input' type="text" placeholder='Full Name' />
                </div>
                <div className="input-field-login">
                    {
                        type ?
                        <input style={{paddingLeft: "10px"}} onChange={(e)=>{setUser(e.target.value)}} className='login-input' type="text" placeholder='Email' />
                            :
                        <InputGroup className="login-input" style={{border:"none"}}>
                            <DropdownButton title="(BD) +880">
                                <Dropdown.Item href="#">Bangladesh (+880)</Dropdown.Item>
                                <Dropdown.Item href="#">India (+97)</Dropdown.Item>
                                <Dropdown.Item href="#">Bangladesh (+880)</Dropdown.Item>
                                <Dropdown.Item href="#">India (+97)</Dropdown.Item>
                            </DropdownButton>
                            <Form.Control placeholder='018******' onChange={(e)=>{setUser(e.target.value)}} />
                        </InputGroup>
                    }
                    <span onClick={handleEP}>USE {currentType ? "PHONE" : "EMAIL"} INSTEAD</span>
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
