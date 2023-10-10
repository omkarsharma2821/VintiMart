const {Schema, model } = require('../connection');

const mySchema = new Schema({
    brand : String,
    material : String,
    Price : Number,
    yearsOld : Number
})

module.exports = model('furniture', mySchema);