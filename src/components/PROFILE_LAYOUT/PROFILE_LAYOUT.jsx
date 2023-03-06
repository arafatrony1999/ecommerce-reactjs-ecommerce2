import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import PROFILELEFT from '../PROFILE_LEFT/PROFILE_LEFT';

const PROFILELAYOUT = () => {
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate();
    const { user } = useUserContext();

    useEffect(() => {
        if(user.length === 1){
            if(user[0].user === 0){
                navigate('/login')
            }else{
                setLoading(false)
            }
        }
    }, [navigate, user]);

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div className='profile-page'>
            <PROFILELEFT user={user[0]} />
            <Outlet />
        </div>
    );
}

export default PROFILELAYOUT;
