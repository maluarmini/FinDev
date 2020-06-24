const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//importando as rotas './routes'
const routes = require('./routes');

const app = express();
// conexao com o banco 
mongoose.connect('mongodb+srv://maluarmini:maluarmini@cluster0-78z0t.mongodb.net/findev?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//necessário para a aplicação entender o json
app.use(cors()); //liberando o acesso externo para toda aplicação
app.use(express.json());
app.use(routes);

app.listen(3333);
