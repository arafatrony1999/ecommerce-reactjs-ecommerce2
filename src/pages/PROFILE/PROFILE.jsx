import React, { useEffect } from 'react';
import PROFILELEFT from '../../components/PROFILE_LEFT/PROFILE_LEFT';
import PROFILERIGHT from '../../components/PROFILE_RIGHT/PROFILE_RIGHT';

const PROFILE = () => {

    useEffect(()=>{
        const localAuth = localStorage.getItem("auth");
        const userAuth = JSON.parse(localAuth);


        const formData = new FormData();
        formData.append('auth', userAuth.auth)


        fetch("http://127.0.0.1:8000/api/getUser",{
            method: "POST",
            body: formData
        })
        .then((res) => {
            if (!res.ok) {
                throw Error("Something went wrong!")
            }
            else {
                return res.json();
            }
        })
        .then((data) => {
            console.log(data[0])
        })
        .catch((error) => {
            console.log(error.message);
        });

    },[]);

    return (
        <div className='profile-page'>
            <PROFILELEFT />
            <PROFILERIGHT />
        </div>
    );
}

export default PROFILE;
