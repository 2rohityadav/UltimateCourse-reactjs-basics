import React, {Fragment} from 'react';

const Counter = () => {
    function onClickHandler(event){
        console.log('Button was pressed.', event);
    }
    return (
        <Fragment>
            <p></p>
            <button type="button" onClick={onClickHandler}>Increment</button>
        </Fragment>
    );
}


export default Counter;