import React, { useState } from 'react';
import InteractiveView from './InteractiveView';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function onIncrementHandler(){
        setCounter(c => ++c);
    }

    return (
        <InteractiveView value={counter} onAction={onIncrementHandler}>
            Increment
        </InteractiveView>
    );
}

export default Counter;