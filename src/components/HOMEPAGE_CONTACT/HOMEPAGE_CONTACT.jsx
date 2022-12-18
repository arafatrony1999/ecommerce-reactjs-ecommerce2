import React from 'react';
import contactBanner from './../../assets/images/contact-banner.jpg';

const HOMEPAGECONTACT = () => {
    return (
        <div className='homepage-contact'>
            <div className="contact-form">
                <form>
                    <div className="col-md-12 flex-form1">
                        <label htmlFor="looking-for">What are you looking for?</label>
                        <input type="text" name='looking-for' placeholder='Looking For' />
                    </div>
                    <div className="flex-form2">
                        <div className="col-md-6">
                            <label htmlFor="Phone">Phone</label>
                            <input type="text" placeholder='Phone' />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="Email">Email</label>
                            <input type="text" placeholder='Email' />
                        </div>
                    </div>
                    <div className="col-md-12 flex-form1">
                        <label htmlFor="Product Description">Product Description</label>
                        <textarea name="desc" cols="30" rows="10"></textarea>
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className="contact-banner">
                <img src={contactBanner} alt="" />
            </div>
        </div>
    );
}

export default HOMEPAGECONTACT;
