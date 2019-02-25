const express = require('express');
const parser = require('body-parser');
const db = require('mongoose');
const app = express();

//paramétrage du server express
app.use(parser.urlencoded({extended: true}));
app.use(express.json());
app.use(function(req, res, next) {
	res.setHeader('Content-type', 'application/json');
	res.setHeader('Accept', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-type, Authorization, Access-Control-Allow-Origin');
	next();
})

const port = 3333;

const projetController = require('./controllers/projet.controller.js');
const clientController = require('./controllers/client.controller.js');
const salarieController = require('./controllers/salarie.controller.js');
const HomeData = require('./methods/HomeData.js');



//connexion à la bdd mlab
db.connect('mongodb://saitamzer:Passw0rd@ds147225.mlab.com:47225/api1', (err) =>
{
    if(err)
    {
        console.log(err);
    }
    console.log("connecté à la bdd");
});

app.get('/', HomeData.getData);


////// Endpoints //////
//partie projets
app.get('/projets', projetController.getProjets);
app.get('/projet:id', projetController.getProjet);
app.post('/projet', projetController.createProjet);
app.put('/projet:id', projetController.updateProjet);
app.delete('/projet:id', projetController.deleteProjet);

//partie salariés
app.get('/salaries', salarieController.getSalaries);
app.get('/salarie:id', salarieController.getSalarie);
app.post('/salarie', salarieController.createSalarie);
app.put('/salarie:id', salarieController.updateSalarie);
app.delete('/salarie:id', salarieController.deleteSalarie);

//partie clients
app.get('/clients', clientController.getClients);
app.get('/client:id', clientController.getClient);
app.post('/client', clientController.createClient);
app.put('/client:id', clientController.updateClient);
app.delete('/client:id', clientController.deleteClient);
///////////////////////

//lancement du serveur
app.listen(port, (err) =>
{
    if(err)
    {
        console.log(err);
    }
    console.log(`serveur lancé sur le port ${port} ...`);
});