module.exports = function (app) {
    var productsList = require('../controllers/productListController');

    app.route('/products')
        .get(productsList.list_all_products)
        .post(productsList.create_a_product);

    app.route('/products/:productID')
        .get(productsList.read_a_product)
        .put(productsList.update_a_product)
        .delete(productsList / delete_a_product);
}