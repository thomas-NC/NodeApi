const db = require('mongoose');
const Schema = db.Schema;

let ProjetSchema = new Schema(
{
    name: String,
    desc: String,
    datestart: Date,
    dateend: Date,
    cost: Number,
    status: String
});

module.exports = db.model('Projet', ProjetSchema);