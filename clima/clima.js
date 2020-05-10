const axios = require('axios');

const getClima = async( lat,lng ) =>{

   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ccf09df7014d10cb7257f01d6ec43f3b&units=metric`);

    return resp.data.main.temp;
}


module.exports = {

    getClima
}
