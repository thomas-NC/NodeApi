const Client = require('../models/client.model.js');
const Salarie = require('../models/salarie.model.js');
const Projet = require('../models/projet.model.js');

//stockage de la fonction pour recupérer les données a afficher sur Home.vue
exports.getData = function (req, res) {

        let data = ({
            clients : 0,
            projets: 0,
            salaries: 0
        });
        
        Client.find({}, (err, clients) =>
        {
            if(err)
            {
                console.log(err);
            }
            data.clients += clients.length;
            Projet.find({}, (err, projets) =>
            {
                if(err)
                {
                    console.log(err);
                }
                data.projets = projets.length;
                Salarie.find({}, (err, salaries) =>
                {
                    if(err)
                    {
                        console.log(err);
                    }
                    data.salaries = salaries.length;
                    res.send(data); 
                }) 
            })
        
        })
         
    }