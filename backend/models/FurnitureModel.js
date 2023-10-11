const {Schema, model } = require('../connection');

const mySchema = new Schema({
    brand : String,
    material : String,
    price : Number,
    yearsold : Number,
    image: String
})

module.exports = model('furniture', mySchema);