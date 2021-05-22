const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    cloth_Id: {type: Number},
    cloth_name: {type: String},
    cloth_desc: {type: String},
    cloth_price: {type: Number},
    cloth_quantity: {type: Number, default: 1},
    cloth_image: {type: String},
})

module.exports = Product