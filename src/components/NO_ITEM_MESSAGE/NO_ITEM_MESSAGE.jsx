import React from 'react';
import { Tr, Td } from 'react-super-responsive-table';

const NOITEMMESSAGE = (props) => {
    return (
        <Tr className='no-item-container'>
            <Td style={{textAlign: "center"}} colSpan={props.totalCol}>{props.noItemMessage}</Td>
        </Tr>
    );
}

export default NOITEMMESSAGE;
