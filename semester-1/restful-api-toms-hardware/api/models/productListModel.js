var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    createdDate: {
        type: Date,
        default: Date.now
    },
    productId: {
        type: Number,
        required: "Enter the ID of the product"
    },
    productName: {
        type: String,
        default: 'name'
    },
    productCode: {
        type: String,
        default: 'code'
    },
    releaseDate: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        default: 'description'
    },
    price: {
        type: Number,
        default: 0
    },
    starRating: {
        type: Number,
        default: 0
    },
    imageUrl: {
        type: String,
        default: 'URL'
    }
})

module.exports = mongoose.model('Products', ProductSchema)