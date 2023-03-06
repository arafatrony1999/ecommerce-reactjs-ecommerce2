import React from 'react';
import Form from 'react-bootstrap/Form';
import { useFilterContext } from '../../../context/FilterContext';

const FORM = () => {
    const {setSortItem, set_sort} = useFilterContext();
    return (
        <div className='marketplace-form'>
            <Form.Label>Sort By : </Form.Label>

            <Form.Select value={set_sort} id='sort' aria-label="Default select example" onChange={setSortItem}>
                <option value="all">All Products</option>
                <option value="new">Newest</option>
                <option value="old">Oldest</option>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
            </Form.Select>
        </div>
    );
}

export default FORM;