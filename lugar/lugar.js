const axios = require('axios');

const getLugarLatLng = async( dir ) =>{

    const encodeUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key': '937c1f4e6emsh541b7d9f68cce8dp14d8c0jsn9dee17e68436'}
    });


    const resp = await instance.get();

    if (resp.data.Results.lenth === 0){
        throw new Error(`No hay resultados para${direccion}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
            
    return{
        direccion,
        lat,
        lng
    }

}


module.exports = {

    getLugarLatLng
}
