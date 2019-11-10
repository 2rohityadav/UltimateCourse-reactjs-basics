import React, { useState } from 'react';
import './form.scss';
const initialState = {
        firstName: '',
        lastName: '',
        biography: '',
        transport: '',
        agree: false
    };

const Form = () => {
    const [formState, setFormState] = useState(initialState)
    const onChangeHandler = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked: e.target.value;
        setFormState({
            ...formState,
            [e.target.name]: value
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
            <input id="firstName" name='firstName' onChange={onChangeHandler} value={formState.firstName} />
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name='lastName' onChange={onChangeHandler} value={formState.lastName} />
            <label htmlFor="biography">Biography</label>
            <textarea rows='10' id="biography" name='biography' onChange={onChangeHandler} value={formState.biography} />
            <label htmlFor="transport">Transport Mode</label>
            <select id="transport" name="transport" value={formState.transport} onChange={onChangeHandler}>
                <option>None selected</option>
                <option value="planes">Planes</option>
                <option value="trains">Trains</option>
                <option value="cars">Cars</option>
                <option value="boats">Boats</option>
            </select>
            <label htmlFor="agree">I agree to the Term of Services</label>
            <input type="checkbox" id="agree" name="agree" onChange={onChangeHandler} checked={formState.agree}/>
            <button type='submit'>Save</button>
            <button type="button" onClick={onClickHandler}>Clear values</button>
        </form>
    );
};

export default Form;