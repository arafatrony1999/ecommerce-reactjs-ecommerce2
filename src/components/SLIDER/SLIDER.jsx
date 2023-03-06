import React from 'react';
import debounce from 'lodash/debounce'
import { useFilterContext } from '../../context/FilterContext';

const SLIDER = () => {
    const { setPriceRange } = useFilterContext();

    const debounceFunc = debounce((val) => handleChange(val), 500)

    const handleChange = val => {
        setPriceRange(val)
    }

    return (
        <>
            <input onChange={e => { debounceFunc(e.target.value) }} type="range" min={0} max={100000} />
        </>
    );
}

export default SLIDER;
