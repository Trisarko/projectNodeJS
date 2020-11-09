const mongoose = require('mongoose')
const Shema = mongoose.Schema

/**
 * model shema
 */

 const productShema = Shema({
     name: String,
     price: {type: Number, default: 0},
     category: {type: String, enum: ['foods', 'technology', 'home']},
     image: String
 })



 module.exports = mongoose.model('product', productShema)