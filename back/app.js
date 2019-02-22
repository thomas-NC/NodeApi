const express = require('express');
const parser = require('body-parser');
const db = require('mongoose');
const app = express();
app.use(parser.urlencoded({extended: true}));
app.use(express.json());

const port = 3333;

const projetController = require('./controllers/projet.controller.js');
const clientController = require('./controllers/client.controller.js');
const salarieController = require('./controllers/salarie.controller.js');

//connexion à la bdd mlab
db.connect('mongodb://saitamzer:Passw0rd@ds147225.mlab.com:47225/api1', (err) =>
{
    if(err)
    {
        console.log(err);
    }
    console.log("connecté à la bdd");
});

app.get('/', (req, res) =>
{
    res.send('hello')
})

//partie projets
app.get('/projets', projetController.getProjets);
app.post('/projet', projetController.createProjet);
app.put('/projet:id', projetController.updateProjet);
app.delete('/projet:id', projetController.deleteProjet);

app.listen(3333, (err) =>
{
    if(err)
    {
        console.log(err);
    }
    console.log('serveur lancé ...');
});