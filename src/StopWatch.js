import React, { useEffect, useState } from 'react';
import './stopwatch.scss';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [counterActive, setCounterActive] = useState(true);
    useEffect(() => {
        if (counterActive) {
            const interval = setInterval(() => {
                setTime(t => t + 1);
            }, 1000)

            return () => {
                console.log('clearing');
                clearInterval(interval)
            };
        }
    }, [counterActive])

    function onClickHandler() {
        setCounterActive(c => !c);
    }

    const formattedTime = new Date(time * 1000)
        .toISOString()
        .substr(11, 8);
    return (
        <section className="stopwatch-frame">
            <h1>Ultimate Stopwatch</h1>
            <span>{formattedTime}</span>
            <button type="button" aria-pressed={!counterActive} onClick={onClickHandler}>
                {counterActive ? 'Stop' : 'Start'} Watch
            </button>
        </section>
    )
}

export default Stopwatch;