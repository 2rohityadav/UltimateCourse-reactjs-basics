import React, { Fragment, useRef } from 'react';
import uniqid from 'uniqid';

const RecordInput = ({type, labelText, ...props}) => {
    const id = useRef(props.id || uniqid());
    return (
        <Fragment>
            <label htmlFor={id.current}>{labelText}</label>
            {
                type === 'textarea' 
                ? <textarea id={id.current} {...props}/> 
                : <input id={id.current} {...props}/>
            }
            
        </Fragment>
    );
}

export default RecordInput;