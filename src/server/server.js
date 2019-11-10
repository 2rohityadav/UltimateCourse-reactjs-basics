const express = require('express'),
bodyParser = require('body-parser'),
app = express(),
port = 5000;

app.use(bodyParser.json())
let recordsData = [
    {
        recordName: 'React Rave',
        artistName: 'The Developers',
        description: 'A rocking good rave bopping to the tune of JavaScript.'
    },
    {
        recordName: 'Building an App',
        artistName: 'The Components',
        description: 'Sounds of the future.'
    }
]

app.get('/api/records', (req, res) => {
    res.send(recordsData);
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})