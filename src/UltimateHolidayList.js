import React, { useState, Fragment } from 'react';
const list1 = [
    { id: 1, topDestination: true, name: 'The beach' },
    { id: 2, topDestination: false, name: 'The mountains' },
    { id: 3, topDestination: true, name: 'Vibrant cities' },
    { id: 4, topDestination: false, name: 'Roughing it' },
    { id: 5, topDestination: false, name: 'Ultimate survival' },
], list2 = [
    { id: 6, topDestination: true, name: 'The beach 2' },
    { id: 7, topDestination: true, name: 'The mountains 2' },
    { id: 8, topDestination: false, name: 'Vibrant cities 2' },
    { id: 9, topDestination: false, name: 'Roughing it 2' },
    { id: 10, topDestination: true, name: 'Ultimate survival 2' },
],
    UltimateHolidayList = () => {
        const [list, setList] = useState(list1);
        const [showAll, setShowAll] = useState(true);


        const onClickHandler = () => setList(list === list1 ? list2 : list1);
        const displayList = list.filter(item => showAll || item.topDestination).map((item, index) =>
            <Fragment key={item.id}>
                <li>
                    <label htmlFor={`item${index}`}>{item.name}</label>
                    {/* <input id={`item${index}`} /> */}
                </li>
            </Fragment>
        )

        return (
            <section>
                <h1>Ultimate Holiday Destinations</h1>
                <ul>{displayList}</ul>
                <button type="button" onClick={onClickHandler}>
                    Change list!
                </button>
                <button type="button" onClick={() => setShowAll(true)}>
                    Show all!
                </button>
                <button type="button" onClick={() => setShowAll(false)}>
                    Show only top destinations.
                </button>
            </section>
        )
    };

export default UltimateHolidayList;  