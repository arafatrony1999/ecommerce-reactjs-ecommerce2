import React from 'react'
import ADDRESS_ADD_MODAL from '../ADDRESS_ADD_MODAL/ADDRESS_ADD_MODAL';
import { toast } from 'react-toastify'
import { useUserContext } from '../../context/UserContext';

const ADD_NEW_ADDRESS = () => {
    const [modalShow, setModalShow] = React.useState(false);

    const { getUser } = useUserContext()

    const addSuccess = () => {
        setModalShow(false)
        toast.success('Address add successfull', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
        getUser("http://127.0.0.1:8000/api/getUser")
    }
    return (
        <>
            <div onClick={() => setModalShow(true)} className="add-new-address">
                Add New Address...
            </div>

            <ADDRESS_ADD_MODAL
                show={modalShow}
                onHide={() => setModalShow(false)}
                addSuccess={addSuccess}
            />
        </>
    )
}

export default ADD_NEW_ADDRESS