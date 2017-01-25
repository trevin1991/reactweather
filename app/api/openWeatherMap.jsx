let axios = require("axios");

const APP_ID = "abd667d8aa40a05ec735260a88db3c6b",
      OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${APP_ID}&units=imperial`;

module.exports = {
    getTemp: (location) => {
        let encodedLocation = encodeURIComponent(location),
            requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then((res) => {
            if(res.data.cod && res.data.message)
                throw new Error(res.data.message);
            else
                return res.data.main.temp;
        }, (res) => {
            throw new Error(res.data.message);
        });
    }
};