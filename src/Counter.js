import React, { Fragment, useEffect, useState } from 'react';
import InteractiveView from './InteractiveView';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [internalCount, setInternalCount] = useState(0);

    useEffect(() => {
        document.title = `counter set to ${counter} |Ultimate Counter`
        console.log('title was set')
    }, [counter])
    function onIncrementHandler() {
        setCounter(c => ++c);
    }

    function onInternalCountClickHandler() {
        setInternalCount(c => c + 1);
    }
    console.log('main render')
    return (
        <Fragment>
            <InteractiveView value={counter} onAction={onIncrementHandler}>
                Increment
            </InteractiveView>
            <button type="button" onClick={onInternalCountClickHandler}>
                Increment Internal Count
            </button>
        </Fragment>
    );
}

export default Counter;