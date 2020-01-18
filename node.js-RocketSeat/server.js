const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//inciando o app
const app = express();

//permite enviar requisição no  formato de json
app.use(express.json());

//conexao mongo db
mongoose.connect('mongodb://localhost:27017/nodeAPI',
 {useNewUrlParser:true,useUnifiedTopology: true  })

requireDir('./src/models');

//rotas
app.use('/api',require("./src/routes"))

app.listen(3001);
