import React, { Fragment, useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState({
        count: 0,
        name: 'djdj'
    });

    function onClickHandler(event){
        console.log('Button was pressed.', event, counter);
        setCounter({...counter, count: counter.count+1});
    }
    return (
        <Fragment>
            <p>{counter.name}</p>
            <p>{counter.count}</p>
            <button type="button" onClick={onClickHandler}>Increment</button>
        </Fragment>
    );
}

export default Counter;