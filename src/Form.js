import React, { useState } from 'react';

import './form.scss'

const Form = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: ''
    })
    const onChangeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    },
    onSubmitHandler = e => {
        console.log(formState, e);
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <span>Your name is {formState.firstName} {formState.lastName}</span>
            <label htmlFor="firstName">First Name</label>
            <input required id="firstName" name='firstName' onChange={onChangeHandler} value={formState.firstName} />
            <label htmlFor="lastName">Last Name</label>
            <input required id="lastName" name='lastName' onChange={onChangeHandler} value={formState.lastName} />
            <button type='submit'>Save</button>
        </form>
    )
};

export default Form;