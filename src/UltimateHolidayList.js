import React from 'react';
const list = [
    { name: 'The beach' },
    { name: 'The mountains' },
    { name: 'Vibrant cities' },
    { name: 'Roughing it' },
    { name: 'Ultimate survival' },
],
    UltimateHolidayList = () => <section>
        <h1>Ultimate Holiday Destinations</h1>
        <ul>{list.map((item, index) => <li key={index}>{item.name}</li>)}</ul>
    </section>;

export default UltimateHolidayList; 