import React, { Fragment, useState } from 'react';

const CounterView = ({counterValue, nameValue, onIncrement}) =>
    <Fragment>
        <p>{nameValue}</p>
        <p>{counterValue}</p>
        <button type="button" onClick={onIncrement}>Increment</button>
    </Fragment>

const Counter = () => {
    const [counter, setCounter] = useState({
        count: 0,
        name: 'djdj'
    });

    function onIncrementHandler(event){
        console.log('Button was pressed.', event, counter);
        setCounter({...counter, count: counter.count+1});
    }

    return (
        <CounterView counterValue={counter.count} nameValue={counter.name} onIncrement={onIncrementHandler} />
    );
}

export default Counter;