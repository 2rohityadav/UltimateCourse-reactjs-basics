import React, { useState } from 'react';
import './form.scss';
const initialState = {
        firstName: '',
        lastName: '',
        biography: '',
        transport: '',
        agree: false,
        breakfast: false,
        lunch: false,
        dinner: false,
        shirtSize: ''
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
            <fieldset>
                <legend>Select your meals</legend>
                <input type="checkbox" id="breakfast" name="breakfast" onChange={onChangeHandler} checked={formState.breakfast}/>
                <label htmlFor="breakfast">Breakfast</label>
                <input type="checkbox" id="lunch" name="lunch" onChange={onChangeHandler} checked={formState.lunch}/>
                <label htmlFor="lunch">Lunch</label>
                <input type="checkbox" id="dinner" name="dinner" onChange={onChangeHandler} checked={formState.dinner}/>
                <label htmlFor="dinner">Dinner</label>
            </fieldset>
            <fieldset>
                <legend>T-shirt size</legend>
                <input type="radio" name="shirtSize" id="sizeS" value="s" onChange={onChangeHandler} checked={formState.shirtSize === 's'}/>
                <label htmlFor="sizeS">Small</label>
                <input type="radio" name="shirtSize" id="sizeM" value="m" onChange={onChangeHandler} checked={formState.shirtSize === 'm'}/>
                <label htmlFor="sizeM">Medium</label>
                <input type="radio" name="shirtSize" id="sizeL" value="l" onChange={onChangeHandler} checked={formState.shirtSize === 'l'}/>
                <label htmlFor="sizeL">Large</label>
            </fieldset>
            <label htmlFor="agree">I agree to the Term of Services</label>
            <input type="checkbox" id="agree" name="agree" onChange={onChangeHandler} checked={formState.agree}/>
            <button type='submit'>Save</button>
            <button type="button" onClick={onClickHandler}>Clear values</button>
        </form>
    );
};

export default Form;