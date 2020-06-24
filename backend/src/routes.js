// importando o módulo especifico de roteamento do express;
const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//rota para deletar devs do banco de dados
routes.delete('/devs/:id', DevController.delete);
//rota para listar devs
routes.get('/devs', DevController.index);
//rota para cadastro de devs
routes.post('/devs', DevController.store);

//rota para encontrar e listar devs por localidade e tecnologia
routes.get('/search', SearchController.index);


module.exports = routes;
// exportando para poder usa-lo na aplicação