module.exports = function (app) {
    var productsList = require('../controllers/productListController');

    app.route('/products')
        .get(productsList.listAll)
        .post(productsList.create);

    app.route('/products/:productId')
        .get(productsList.read)
        .put(productsList.update)
        .delete(productsList.delete);

        app.route('/products/name/like/:query')
        .get(productsList.search)
}