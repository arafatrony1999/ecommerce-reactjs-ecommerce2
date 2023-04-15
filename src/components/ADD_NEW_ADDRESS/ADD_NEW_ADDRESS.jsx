import React from 'react'
import ADDRESS_ADD_MODAL from '../ADDRESS_ADD_MODAL/ADDRESS_ADD_MODAL';

const ADD_NEW_ADDRESS = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div onClick={() => setModalShow(true)} className="add-new-address">
                Add New Address...
            </div>

            <ADDRESS_ADD_MODAL
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default ADD_NEW_ADDRESS