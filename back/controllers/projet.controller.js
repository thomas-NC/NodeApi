const Projet = require('../models/projet.model.js');

exports.createProjet = function(req, res)
{
    let projet = new Projet (
    {
        name: req.body.name,
        desc: req.body.desc,
        datestart: req.body.datestart,
        dateend: req.body.dateend,
        cost: req.body.cost,
        status: req.body.status
    });

    console.log(req.body);
    console.log(req.body.name);
    console.log(projet);

    projet.save((err) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log("projet ajouté");
        res.send(projet);
    })
}

exports.getProjets = function (req, res)
{
    Projet.find({}, (err, projet) =>
    {
        if(err)
        {
            console.log(err);
        }
        res.send(projet);
    })
}

exports.updateProjet = function (req, res)
{
    console.log(req.params);
    Projet.findByIdAndUpdate( req.params.id, req.body, (err, client) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log("client modifié");
        res.send(client);
    })
}

exports.deleteProjet = function (req, res)
{
    Projet.findByIdAndDelete( req.params.id, (err) =>
    {
        if(err)
        {
            console.log(err);
        }
        res.send("projet supprimé")
    })
}