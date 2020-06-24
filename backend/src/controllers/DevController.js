const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {
    async delete(request,response){
        const id = request.params.id;
        console.log(id);
        try {
            await Dev.deleteOne({ "_id" : id});
        }catch(err){
            return response.json({err: 'não foi possivel deletar esse usuário'});
        }
        return response.json({message: 'Usuário deletado com sucesso'});
    },

    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request,response) {
        const { github_username, techs, latitude, longitude} = request.body;
        
        let dev = await Dev.findOne({github_username});

        if(!dev){
            // usando o axios para fazer uma chamada externa a api do github
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            // pegando os dados da chamda api
            const { name = login, avatar_url, bio} = apiResponse.data;
            // colocando as tecnologias em um array
            const techsArray = parseStringAsArray(techs);
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            // cadastrando no banco de dados, usando o models e o schema criado
                dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs : techsArray,
                location,
            })
        }
        return response.json(dev)
    }
};
