const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');


module.exports = {
    async index(request, response){
        // Buscar todos os devs num raio de 10km
        // filtar por tecnologia

        const { latitude, longitude, techs } = request.query;

        techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            //quais ssao as informações que queremos filtrar
            techs: {
                $in: techsArray,
            },
            location: {
                $near:{
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 100000000,
                },
            },
        });

        return response.json({ devs })
    }
};
