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
        <ul>{list}</ul>
    </section>;

export default UltimateHolidayList;