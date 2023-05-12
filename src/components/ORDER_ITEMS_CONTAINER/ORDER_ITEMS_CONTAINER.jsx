import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import ORDER_TITLE from '../ORDER_TITLE/ORDER_TITLE'
import { BsDownload, BsFillEyeFill } from "react-icons/bs";
import { useOrderContext } from '../../context/OrderContext';
import { Link } from 'react-router-dom'
import PriceFormat from '../../helper/PriceFormat'

const ORDER_ITEMS_CONTAINER = () => {
    const { orders } = useOrderContext()
    console.log(orders)
    return (
        <div className='order-item-container my-2 bg-white'>

            <ORDER_TITLE orderTitle='Purchase History' />

            <div className="order-lists w-100 p-3">
                <Table className="cart-tablex">
                    <Thead style={{background: '#eceff7'}} className='px-2'>
                        <Tr>
                            <Th className='cart-product-details-left px-3'>Order ID</Th>
                            <Th>Date</Th>
                            <Th style={{paddingRight: "10px"}}>Amount</Th>
                            <Th>Delivery Status</Th>
                            <Th>Payment Status</Th>
                            <Th>Options</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {
                            orders.map((order) => {
                                return(
                                    <Tr key={order.id}>
                                        <Td>
                                            <Link to={`/user/order?order_id=${order.order_id}`}>{order.order_id}</Link>
                                        </Td>
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
                                            <Link to={`/user/order?order_id=${order.order_id}`}>
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
    )
}

export default ORDER_ITEMS_CONTAINER