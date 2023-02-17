import React, { useEffect, useState } from 'react';
import MAINCATAGORIESALL from './MAIN_CATAGORIES_ALL/MAIN_CATAGORIES_ALL';

const MAINCATAGORIES = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/getCatagories")
        .then((res) => {
            if (!res.ok) {
                throw Error("Something went wrong!")
            }
            else {
                return res.json();
            }
        })
        .then((data) => {
            setData(data)
        })
        .catch((error) => {
            console.log(error.message);
        })
    }, []);

    return (
        <div className='main-catagory'>
            { data && <MAINCATAGORIESALL catagories={data} /> }
        </div>
    );
}

export default MAINCATAGORIES;
