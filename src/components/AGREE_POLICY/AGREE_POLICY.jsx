import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext'

const AGREE_POLICY = () => {
    const { agreeChange, agreeCheck } = useUserContext()
    return (
        <div className="mt-3">
            <input onChange={agreeChange} type='checkbox' checked={agreeCheck ? true : false} />
            <label className='px-2' htmlFor="agree">
                I agree to the 
                <Link className='text-decoration-underline' to="/"> terms and conditions </Link>, 
                <Link className='text-decoration-underline' to="/">  return policy & privacy policy </Link>
            </label>
        </div>
    )
}

export default AGREE_POLICY