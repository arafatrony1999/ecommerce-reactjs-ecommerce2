import React, { useEffect, useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import { useCompareContext } from '../../context/CompareContext';
import { useProductContext } from '../../context/productContext';
import PriceFormat from '../../helper/PriceFormat';
import NOITEMMESSAGE from '../NO_ITEM_MESSAGE/NO_ITEM_MESSAGE';

const COMPAREITEMCONTAINER = () => {
    const [a, b] = useState([])
    const { compare, removeFromCompare } = useCompareContext();
    const { products } = useProductContext();

    useEffect(() => {
        if(compare.length !== 0 && products.length !== 0){
            let compareList = [];
            compareList = products.filter(e1 => {
                return compare.find(element => {
                    return e1.id === element.products.id
                })
            })
            b(compareList)
        }
    }, [compare,products]);


    return (
        <div className='cart-item-container'>
            
            <Table className="cart-tablex">
                <Thead>
                    <Tr>
                        <Th>Image</Th>
                        <Th>Product Name</Th>
                        <Th>Price</Th>
                        <Th>Catagory</Th>
                        <Th>Sub Catagory</Th>
                        <Th>Remove</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {   compare.length === 0 ? <NOITEMMESSAGE totalCol={6} noItemMessage="Your Compare list is empty! 😓" /> :
                        a.map((compare) => {
                            return(
                                <Tr key={compare.id}>
                                    <Td>
                                        <img style={{width: "80px"}} src={compare.image} alt="" />
                                    </Td>
                                    <Td>
                                        <Link to={`/product/product_id=${compare.id}`}>{compare.name.slice(0,30)}...</Link>
                                    </Td>
                                    <Td>
                                        <PriceFormat price={compare.price} />
                                    </Td>
                                    <Td>
                                        {compare.catagory.cat_name}
                                    </Td>
                                    <Td>
                                        {compare.subcatagory.name}
                                    </Td>
                                    <Td>
                                        <button onClick={(e) => removeFromCompare(e, compare)} className='btn btn-danger cart-remove-btn'>
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

export default COMPAREITEMCONTAINER;
