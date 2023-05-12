import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import ORDER_TITLE from '../ORDER_TITLE/ORDER_TITLE'
import PriceFormat from '../../helper/PriceFormat'
import { useOrderContext } from '../../context/OrderContext';
import { Link } from 'react-router-dom';
import { BsDownload, BsFillEyeFill } from 'react-icons/bs';

const ORDER_SUMMERY_CONTAINER = (props) => {
    const { orders } = useOrderContext()
    console.log(orders.filter((currElem) => {
        return(
            currElem.order_id === props.orderID
        )
    }))
    return (
        <>
            <ORDER_TITLE orderTitle='Order Summery' />
            <div className='order-lists w-100 p-3 d-flex bg-white' style={{fontSize: '14px'}}>
                <div className="w-50">
                    {
                        orders && orders.filter((currElem) => {
                            return(
                                currElem.order_id === props.orderID
                            )
                        }).map((currElem) => {
                            return(
                                <>
                                    <div className="d-flex py-2 text-truncate">
                                        <div className="w-25">Order Code</div>
                                        <div>:</div>
                                        <div style={{paddingLeft: '15px'}}>{currElem.order_id}</div>
                                    </div>
                                    <div className="d-flex py-2">
                                        <div className="w-25">Customer</div>
                                        <div>:</div>
                                        <div style={{paddingLeft: '15px'}}>{currElem.user.name}</div>
                                    </div>
                                    <div className="d-flex py-2">
                                        <div className="w-25">Email</div>
                                        <div>:</div>
                                        <div style={{paddingLeft: '15px'}}>{currElem.user.user}</div>
                                    </div>
                                    <div className="d-flex py-2">
                                        <div className="w-25">Shipping Address</div>
                                        <div>:</div>
                                        <div style={{paddingLeft: '15px'}} className='text-truncate'>
                                            {currElem.order_address.address}, {currElem.order_address.thana}, {currElem.order_address.district}, {currElem.order_address.division}
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="order-summery-right w-50">
                    <div className="d-flex py-2">
                        <div className="w-25">Order Date</div>
                        <div>:</div>
                        <div style={{paddingLeft: '15px'}}>2023-05-07</div>
                    </div>
                    <div className="d-flex py-2">
                        <div className="w-25">Order Status</div>
                        <div>:</div>
                        <div style={{paddingLeft: '15px'}}>Verifying</div>
                    </div>
                    <div className="d-flex py-2">
                        <div className="w-25">Total Amount</div>
                        <div>:</div>
                        <div style={{paddingLeft: '15px'}}>
                            <PriceFormat price={15000} />
                        </div>
                    </div>
                    <div className="d-flex py-2">
                        <div className="w-25">Shipping Method</div>
                        <div>:</div>
                        <div style={{paddingLeft: '15px'}}>Flat shipping rate</div>
                    </div>
                    <div className="d-flex py-2">
                        <div className="w-25">Payment method</div>
                        <div>:</div>
                        <div style={{paddingLeft: '15px'}}>Cash On Delivery</div>
                    </div>
                </div>
            </div>

            <div className="d-flex w-100 justify-content-between">

                <div className='order-lists w-75 d-flex flex-wrap bg-white my-3' style={{fontSize: '14px'}}>
                    <ORDER_TITLE orderTitle='Order Details' />

                    
                    <div className="order-lists w-100 p-3">
                        <Table className="cart-tablex">
                            <Thead style={{background: '#eceff7'}} className='px-2'>
                                <Tr>
                                    <Th className='px-3'>#</Th>
                                    <Th className='cart-product-details-left'>Product</Th>
                                    <Th style={{paddingRight: "10px"}}>Quantity</Th>
                                    <Th>Delivery Type</Th>
                                    <Th>Price</Th>
                                    <Th>Review</Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                                {
                                    orders.map((order, index) => {
                                        return(
                                            <Tr key={order.id}>
                                                <Td className='px-3'>{index+1}</Td>
                                                <Td>{order.created_at.slice(0,10)}</Td>
                                                <Td>
                                                    <PriceFormat price={order.total} />
                                                </Td>
                                                <Td>{order.stage}</Td>
                                                <Td>
                                                    <span className="order-table-status">
                                                        {order.stage === 'Verifying' ? 'Un-Paid' : 'Paid'}
                                                    </span>
                                                </Td>
                                                <Td className='order-options'>
                                                    <Link>
                                                        <BsFillEyeFill />
                                                    </Link>
                                                    <Link className='mx-2'>
                                                        <BsDownload />
                                                    </Link>
                                                </Td>
                                            </Tr>
                                        )
                                    })
                                }
                            </Tbody>
                        </Table>
                    </div>
                </div>

                <div className="order-amount bg-white my-3">
                    <ORDER_TITLE orderTitle='Order Amount' />
                    <div className="d-flex w-100 px-3 my-3">
                        <div className="w-50">Subtotal</div>
                        <div className="w-50">
                            <PriceFormat price={15000} />
                        </div>
                    </div>
                    <div className="d-flex w-100 px-3 my-3">
                        <div className="w-50">Shipping</div>
                        <div className="w-50">
                            <PriceFormat price={0} />
                        </div>
                    </div>
                    <div className="d-flex w-100 px-3 my-3">
                        <div className="w-50">Tax</div>
                        <div className="w-50">
                            <PriceFormat price={0} />
                        </div>
                    </div>
                    <div className="d-flex w-100 px-3 my-3">
                        <div className="w-50">Coupon</div>
                        <div className="w-50">
                            <PriceFormat price={0} />
                        </div>
                    </div>
                    <div className="d-flex w-100 px-3 my-3">
                        <div className="w-50">Total</div>
                        <div className="w-50">
                            <PriceFormat price={15000} />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ORDER_SUMMERY_CONTAINER