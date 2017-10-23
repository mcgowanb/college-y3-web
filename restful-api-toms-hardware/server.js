var express = require('express');
app = express();
port = process.env.PORT || 3000;

mongoose = require('mongoose');

Product = require('./api/models/productListModel');

bodyParser = require('body-parser');

const cors = require('cors');
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Productdb');

app.use(bodyParser.urlencoded({ exteded: true }));
app.use(bodyParser.json());

//import routes
var routes = require('./api/routes/productListRoutes');
//register the route
routes(app);

app.use((req, res) => {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});


app.listen(port);

console.log("Server started and listening on port: " + port);