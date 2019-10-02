const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-bmsjy.mongodb.net/omnistack9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//req.query = Acessar query params (filtros)
//req.params = Acessar route params (edição, delete)
//req.body = Acessar corpo da requisição (criação, edição)

app.use(express.json());
app.use(routes);


app.listen(3333);