const {Schema, model } = require('../connection');

const mySchema = new Schema({
    FurnitureType : String,
    FurnitureMaterial : String,
    Price : Number,
    YearsOld : Number
})

module.exports = model('users', mySchema);