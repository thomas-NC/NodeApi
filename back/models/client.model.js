const db = require('mongoose');
const Schema = db.Schema();

let ClientSchema = new Schema(
    {
        name: String,
        adress: String,
        refcontact: String,
        activity: String
    }
)

module.exports = db.model('Client', ClientSchema);