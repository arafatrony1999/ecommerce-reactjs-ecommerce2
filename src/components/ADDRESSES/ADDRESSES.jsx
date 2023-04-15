import React from 'react'
import ADD_NEW_ADDRESS from '../ADD_NEW_ADDRESS/ADD_NEW_ADDRESS'

const ADDRESSES = () => {
    return (
        <div className='addresses'>
            Select Address...

            <div className="address-all">
                <div className="single-address">
                    <div className="single-address-line">
                        <div className="single-address-left">Division</div>
                        <div className="single-address-middle">:</div>
                        <div className="single-address-right">Dhaka</div>
                    </div>
                    <div className="single-address-line">
                        <div className="single-address-left">Division</div>
                        <div className="single-address-middle">:</div>
                        <div className="single-address-right">Dhaka</div>
                    </div>
                </div>
                
                <div className="single-address">
                    <div className="single-address-line">
                        <div className="single-address-left">Division</div>
                        <div className="single-address-middle">:</div>
                        <div className="single-address-right">Dhaka</div>
                    </div>
                    <div className="single-address-line">
                        <div className="single-address-left">Division</div>
                        <div className="single-address-middle">:</div>
                        <div className="single-address-right">Dhaka</div>
                    </div>
                </div>
                
                <div className="single-address">
                    <div className="single-address-line">
                        <div className="single-address-left">Division</div>
                        <div className="single-address-middle">:</div>
                        <div className="single-address-right">Dhaka</div>
                    </div>
                    <div className="single-address-line">
                        <div className="single-address-left">Division</div>
                        <div className="single-address-middle">:</div>
                        <div className="single-address-right">Dhaka</div>
                    </div>
                </div>
            </div>
            <ADD_NEW_ADDRESS />
        </div>
    )
}

export default ADDRESSES