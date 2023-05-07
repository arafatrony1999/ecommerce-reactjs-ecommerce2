import PROFILEBREAD from '../../components/PROFILE_BREAD/PROFILE_BREAD'
import CARTNAV from '../../components/CART_NAV/CART_NAV'
import CONFIRM_PAGE_CONTAINER from '../../components/CONFIRM_PAGE_CONTAINER/CONFIRM_PAGE_CONTAINER'
import CONFIRM_PAGE_BTNS from '../../components/CONFIRM_PAGE_BTNS/CONFIRM_PAGE_BTNS'

const CONFIRM_PAGE = () => {
    return (
        <div className='profile-right'>
            <PROFILEBREAD pageTitle='Confirm your order' />
            <CARTNAV stage={5} />
            <CONFIRM_PAGE_CONTAINER />
            <CONFIRM_PAGE_BTNS />
        </div>
    )
}

export default CONFIRM_PAGE