const db = require('mongoose');
const Schema = db.Schema();

let SalarieSchema = new Schema(
    {
        name: String,
        firsname: String,
        username: String,
        birthday: Date,
        address: String,
        tel: String,
        mail: String,
        job: String
    }
)

module.exports = db.model('Salarie', SalarieSchema);