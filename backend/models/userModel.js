const {Schema, model } = require('../connection');

const mySchema = new Schema({
    name : String,
    email : String,
    password : String,
    city : String
})

module.exports = model('users', mySchema);