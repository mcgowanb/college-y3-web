var mongoose = require('mongoose');

Product = mongoose.model('Products');


exports.listAll = (req, res) => {
    Product.find((err, products) => {
        if (err)
            res.send(err);
        res.json(products)
    });
}

exports.create = (req, res) => {
    const product = new Product(req.body);
    product.save((err) => {
        if (err)
            res.send(err)
        else res.send("ok");
    });
}

exports.read = (req, res) => {
    Product.findOne({ productId: req.params.productId }, (err, result) => {
        if (err) {
            res.send(err)
        }
        else res.send(result);
    });
}

exports.search = (req, res) => {
    // req.params.query
    Product.find({ productName: { $regex: '.*' + req.params.query + '.*', "$options": "i" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        else res.send(result);
    });
}
exports.update = (req, res) => {
    Product.update({ productId: req.params.productId }, req.body, (err, result) => {
        if (err) {
            res.send(err)
        } 
        else res.send(result);
    })
}

exports.delete = (req, res) => {
    Product.remove({ _id: req.params.id }, (err, _) => {
        if (err) return res.send(err)
        res.json({
            message: `deleted ${req.params.id}`
        })
    })
}