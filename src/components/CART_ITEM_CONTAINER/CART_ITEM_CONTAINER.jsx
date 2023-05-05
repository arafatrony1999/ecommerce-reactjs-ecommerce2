import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import PriceFormat from '../../helper/PriceFormat';
import { BsTrash } from "react-icons/bs";
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import NOITEMMESSAGE from '../NO_ITEM_MESSAGE/NO_ITEM_MESSAGE';


const CARTITEMCONTAINER = () => {
    const { cart, addToCart, removeFromCart } = useCartContext();


    return (
        <div className='cart-item-container'>
            <Table className="cart-tablex">
                <Thead>
                    <Tr>
                        <Th className='cart-product-details-left'>Product</Th>
                        <Th>Main Price</Th>
                        <Th>Today's Deal</Th>
                        <Th style={{paddingRight: "10px"}}>Tax</Th>
                        <Th>Quantity</Th>
                        <Th>Total</Th>
                        <Th>Remove</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        cart.length === 0 ? <NOITEMMESSAGE totalCol={6} noItemMessage="Your Cart is empty! 😓" /> :
                        cart.map((cart) => {
                            return(
                                <Tr key={cart.id}>
                                    <Td>
                                        <span className='cart-img'>
                                            <img src={cart.products.image} alt="" />
                                        </span>
                                        <span className='cart-name'>
                                            <Link to={`/product/product_id=${cart.products.id}`} >
                                                {cart.products.name}
                                            </Link>
                                        </span>
                                    </Td>
                                    <Td>
                                        <PriceFormat price={cart.products.price} />
                                    </Td>
                                    <Td>
                                        {
                                            cart.product_details.discount_id ?
                                            <PriceFormat price={cart.products.price - cart.products.price * (cart.product_details.discount.discount_percent)/100} /> :
                                            <PriceFormat price={cart.products.price} />
                                        }
                                    </Td>
                                    <Td>0</Td>
                                    <Td>
                                        <div className="cart-amount-update">
                                            <button onClick={(e) => removeFromCart(e, 1, cart.products)} className="cart-indecrease-btn">-</button>
                                            <div className="cart-total-item-input-field">{cart.quantity}</div>
                                            <button onClick={(e) => addToCart(e, 1, cart.products)} className="cart-indecrease-btn">+</button>
                                        </div>
                                    </Td>
                                    <Td>
                                        {
                                            cart.product_details.discount_id ?
                                            <PriceFormat price={(cart.products.price - cart.products.price * (cart.product_details.discount.discount_percent)/100) * cart.quantity} /> :
                                            <PriceFormat price={cart.products.price * cart.quantity} />
                                        }
                                    </Td>
                                    <Td>
                                        <button onClick={(e) => removeFromCart(e, cart.quantity, cart.products)} className='btn btn-danger cart-remove-btn'>
                                            <BsTrash />
                                        </button>
                                    </Td>
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </div>
    );
}

export default CARTITEMCONTAINER;
