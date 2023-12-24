const {Schema, model} = require('../connection');

const myschema = new Schema({
    username : String,
    email : String,
    message : String
});

module.exports = model('contact', myschema);