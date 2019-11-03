import React, { useState, Fragment } from 'react';
const list1 = [
    { name: 'The beach' },
    { name: 'The mountains' },
    { name: 'Vibrant cities' },
    { name: 'Roughing it' },
    { name: 'Ultimate survival' },
], list2 = [
    { name: 'The beach 2' },
    { name: 'The mountains 2' },
    { name: 'Vibrant cities 2' },
    { name: 'Roughing it 2' },
    { name: 'Ultimate survival 2' },
],
    UltimateHolidayList = () => {
        const [list, setList] = useState(list1);

        const onClickHandler = () => setList(list === list1 ? list2 : list1);

        const displayList = list.map((item, index) =>
            <Fragment key={item.name}>
                <li>
                    <label htmlFor={`item${index}`}>{item.name}</label>
                    <input id={`item${index}`} />
                </li>
            </Fragment>
        )

        return (
            <section>
                <h1>Ultimate Holiday Destinations</h1>
                <ul>{displayList}</ul>
                <button type="button" onClick={onClickHandler}>
                    Change list
                </button>
            </section>
        )
    };

export default UltimateHolidayList;  