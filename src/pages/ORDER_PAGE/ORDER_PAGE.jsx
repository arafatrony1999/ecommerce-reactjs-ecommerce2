import ORDER_ITEMS_CONTAINER from '../../components/ORDER_ITEMS_CONTAINER/ORDER_ITEMS_CONTAINER';
import PROFILEBREAD from '../../components/PROFILE_BREAD/PROFILE_BREAD';

const ORDER_PAGE = () => {
    return (
        <div className='profile-right'>
            <PROFILEBREAD pageTitle="Orders History" />
            <ORDER_ITEMS_CONTAINER />
        </div>
    )
}

export default ORDER_PAGE