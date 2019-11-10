import React, { useState } from 'react';
import './form.scss';
const initialState = {
        firstName: '',
        lastName: '',
        biography: '',
        transport: ''
    };

const Form = () => {
    const [formState, setFormState] = useState(initialState)
    const onChangeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    },
    onSubmitHandler = e => {
        console.log(formState, e);
        e.preventDefault();
    },
    onClickHandler = e => {
        setFormState(initialState);
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <span>Your name is {formState.firstName} {formState.lastName}</span>
            <div>Biography: {formState.biography}</div>
            <div>Transport selected is {formState.transport}</div>
            <label htmlFor="firstName">First Name</label>
            <input required id="firstName" name='firstName' onChange={onChangeHandler} value={formState.firstName} />
            <label htmlFor="lastName">Last Name</label>
            <input required id="lastName" name='lastName' onChange={onChangeHandler} value={formState.lastName} />
            <label htmlFor="biography">Biography</label>
            <textarea required rows='10' id="biography" name='biography' onChange={onChangeHandler} value={formState.biography} />
            <label htmlFor="transport">Transport Mode</label>
            <select id="transport" name="transport" value={formState.transport} onChange={onChangeHandler}>
                <option>None selected</option>
                <option value="planes">Planes</option>
                <option value="trains">Trains</option>
                <option value="cars">Cars</option>
                <option value="boats">Boats</option>
            </select>
            <button type='submit'>Save</button>
            <button type="button" onClick={onClickHandler}>Clear values</button>
        </form>
    );
};

export default Form;