import axios from 'axios';
let loadedData = false,
    weatherRecords;
export const weatherData = async scale => {
    if (!loadedData) { //Loads the data once
        let { data } = await axios.get('/api/weatherdata');
        weatherRecords = data;
    }
    switch (scale) {
        case 'celsius':
            return weatherRecords
                .map(({ city, temp }) => ({ city, temp: (temp - 273.15).toFixed(2) }))
        case 'fahrenheit':
            return weatherRecords
                .map(({ city, temp }) => ({ city, temp: ((temp - 273.15) * 1.8 + 32).toFixed(2) }))
        case 'kelvin':
        default:
            return weatherRecords;
    }
}