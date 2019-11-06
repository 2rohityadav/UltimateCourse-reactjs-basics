import React, { useState } from 'react';

import './form.scss'

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const onChangeHandler = e => {
        setFirstName(e.target.value);
        console.log(e.target.value);
    }
    return (
        <form>
            <label htmlFor="fname">First Name</label>
            <input id="fname" onChange={onChangeHandler} value={firstName} />
            <span>{firstName}</span>
        </form>
    )
};

export default Form;