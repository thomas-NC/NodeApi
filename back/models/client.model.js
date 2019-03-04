const db = require('mongoose');
const Schema = db.Schema;

let ClientSchema = new Schema(
    {
        name: String,
        adress: {
            street: String,
            city: String,
            cp: Number
        },
        refcontact: {
            name: String,
            tel: String,
            mail: String
        },
        activity: String
    }
)

module.exports = db.model('Client', ClientSchema);