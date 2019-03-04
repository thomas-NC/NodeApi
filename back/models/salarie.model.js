const db = require('mongoose');
const Schema = db.Schema;

let SalarieSchema = new Schema(
    {
        name: String,
        firstname: String,
        username: String,
        birthday: Date,
        address: {
            street: String,
            city: String,
            cp: Number
        },
        tel: String,
        mail: String,
        job: String
    }
)

module.exports = db.model('Salarie', SalarieSchema);