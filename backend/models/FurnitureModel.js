const {Schema, model } = require('../connection');

const mySchema = new Schema({
    category : String,
    TypeOfWood : String,
    price : String,
    YearsOld : String
})

module.exports = model('users', mySchema);