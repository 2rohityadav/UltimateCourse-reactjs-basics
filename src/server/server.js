const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 5000;

app.use(bodyParser.json())
let recordsData = [
    {
        id: 1,
        recordName: 'React Rave',
        artistName: 'The Developers',
        description: 'A rocking good rave bopping to the tune of JavaScript.'
    },
    {
        id: 2,
        recordName: 'Building an App',
        artistName: 'The Components',
        description: 'Sounds of the future.'
    }
],
    weatherData = [
        { city: 'Amsterdam', temp: 299.15 },
        { city: 'Berlin', temp: 295.15 },
        { city: 'Delhi', temp: 307.15 },
        { city: 'Johannesburg', temp: 288.15 },
        { city: 'London', temp: 294.15 },
        { city: 'New York', temp: 301.15 },
    ]

app.get('/api/records', (_, res) => res.send(recordsData));
app.get('/api/weatherData', (_, res) => res.send(weatherData))

app.post('/api/records', (req, res) => {
    const newRecord = {
        ...req.body,
        id: recordsData.reduce((acc, item) => {
            return item.id > acc ? item.id : acc
        }, 0) + 1
    }
    recordsData.push(newRecord);
    res.send(newRecord);
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})