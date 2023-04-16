import React from 'react'
import ADD_NEW_ADDRESS from '../ADD_NEW_ADDRESS/ADD_NEW_ADDRESS'
import { useUserContext } from '../../context/UserContext'

const ADDRESSES = () => {
    const { user, setSelectedAddress, selectedAddress } = useUserContext();

    console.log(user)
    return (
        <div className='addresses'>
            Select Address...

            <div className="address-all">
                {
                    user[0].addresses.map((address) => {
                        return(
                            <div onClick={() => setSelectedAddress(address)} key={address.id} className="single-address">
                                <div className="single-address-btns">
                                    <div className="single-address-btn-left">
                                        {
                                            selectedAddress.id === address.id && <div className="single-address-inner"></div>
                                        }
                                        
                                    </div>
                                    <div className="single-address-btn-right"></div>
                                </div>
                                <div className="single-address-container">
                                    <div className="single-address-line">
                                        <div className="single-address-left">Division</div>
                                        <div className="single-address-middle">:</div>
                                        <div className="single-address-right">{address.division}</div>
                                    </div>
                                    <div className="single-address-line">
                                        <div className="single-address-left">District</div>
                                        <div className="single-address-middle">:</div>
                                        <div className="single-address-right">{address.district}</div>
                                    </div>
                                    <div className="single-address-line">
                                        <div className="single-address-left">Upazila / Thana</div>
                                        <div className="single-address-middle">:</div>
                                        <div className="single-address-right">{address.thana}</div>
                                    </div>
                                    <div className="single-address-line">
                                        <div className="single-address-left">Address</div>
                                        <div className="single-address-middle">:</div>
                                        <div className="single-address-right">{address.address}</div>
                                    </div>
                                    <div className="single-address-line">
                                        <div className="single-address-left">Phone No.</div>
                                        <div className="single-address-middle">:</div>
                                        <div className="single-address-right">{address.phone}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <ADD_NEW_ADDRESS />
        </div>
    )
}

export default ADDRESSES