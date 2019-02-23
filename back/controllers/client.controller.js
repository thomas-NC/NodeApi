const Client = require('../models/client.model.js');

exports.createClient = function(req, res)
{
    let client = new Client (
        {
            name: req.body.name,
            adress: req.body.adress,
            refcontact: req.body.refcontact,
            activity: req.body.activity
        }
    );

    client.save((err) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log("Client crée");
        res.send(client);
    })
}

exports.getClients = function(req, res)
{
    Client.find({}, (err, client) =>
    {
        if(err)
        {
            console.log(err);
        }
        res.send(client);
    })
}

exports.getClient = function(req, res)
{
    Client.findById(req.params.id, (err, client) =>
    {
        if(err)
        {
            console.log(err);
        }
        res.send(client);
    })
}

exports.updateClient = function(req, res)
{
    Client.findByIdAndUpdate(req.params.id, req.body, (err) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log("Client modifié");
        res.send("Client modifié");
    })
}

exports.deleteClient = function(req, res)
{
    Client.findByIdAndDelete(req.params.id, (err) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log("Client supprimé");
        res.send('Client supprimé');
    })
}