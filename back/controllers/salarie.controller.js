const Salarie = require('../models/salarie.model.js');

exports.createSalarie = function(req, res)
{
    let salarie = new Salarie (
        {
            name: req.body.name,
            firstname: req.body.firstname,
            username: req.body.username,
            birthday: req.body.birthday,
            address: req.body.adress,
            tel: req.body.tel,
            mail: req.body.mail,
            job: req.body.job
        }
    );

    salarie.save((err) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log("salarié crée");
        res.send(salarie);
    })
}

exports.getSalaries = function(req, res)
{
    Salarie.find({}, (err, salarie) =>
    {
        if(err)
        {
            console.log(err);
        }
        res.send(salarie);
    })
}

exports.getSalarie = function(req, res)
{
    Salarie.findById(req.params.id, (err, salarie) =>
    {
        if(err)
        {
            console.log(err);
        }
        res.send(salarie);
    })
}

exports.updateSalarie = function(req, res)
{
    Salarie.findByIdAndUpdate(req.params.id, req.body, (err) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log("salarié modifié");
        res.send("salarié modifié");
    })
}

exports.deleteSalarie = function(req, res)
{
    Salarie.findByIdAndDelete(req.params.id, (err) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log("salarié supprimé");
        res.send('salarié supprimé');
    })
}