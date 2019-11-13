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
]

app.get('/api/records', (req, res) => {
    res.send(recordsData);
});

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