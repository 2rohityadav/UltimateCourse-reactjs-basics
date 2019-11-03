import React, { Fragment, useEffect, useState } from 'react';
import InteractiveView from './InteractiveView';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [internalCount, setInternalCount] = useState(0);

    useEffect(() => {
        document.title = `counter set to ${counter} |Ultimate Counter`
        console.log('title was set')
    }, [counter])

    useEffect(() => {
        const savedCounterValue = localStorage.getItem('ultimateCounter')
        if (savedCounterValue != null) {
            setCounter(parseInt(savedCounterValue, 10))
        }
    }, []);

    function onIncrementHandler() {
        setCounter(c => ++c);
    }

    function onInternalCountClickHandler() {
        setInternalCount(c => c + 1);
    }

    function onSaveClickHandler() {
        localStorage.setItem('ultimateCounter', counter);
    }

    return (
        <Fragment>
            <InteractiveView value={counter} onAction={onIncrementHandler}>
                Increment
            </InteractiveView>
            <button type="button" onClick={onInternalCountClickHandler}>
                Increment Internal Count
            </button>
            <button type="button" onClick={onSaveClickHandler}>
                Save Count value
            </button>
        </Fragment>
    );
}

export default Counter;