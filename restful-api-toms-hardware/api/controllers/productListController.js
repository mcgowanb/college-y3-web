var mongoose = require('mongoose');

Product = mongoose.model('Products');

exports.list_all_products = (req, res) => {
    Product.find({}, (err, product) => {
        if (err)
            res.send(err);
        res.json(product)
    });
}

exports.create_a_product = (req, res) => {
    Product.save({}, (err, res) => {
        if (err)
            res.send(err)
        res.send("ok");
    })
}