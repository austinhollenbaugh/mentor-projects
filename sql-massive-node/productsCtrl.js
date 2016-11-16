var app = require('./index');
var db = app.get('db');

module.exports = {
  create: function(req, res, next) {
    console.log(req.body);
    var product = req.body;
    db.create_product(product.name, product.description, product.price, product.imageurl, function(err, response) {
      if(err) {
        res.json(err);
      }
      res.json(response);
    });
  },
  getAll: function(req, res, next) {
    db.read_products(function(err, response) {
      if(err) {
        res.json(err);
      }
      res.json(response);
    });
  },
  getOne: function(req, res, next) {
    db.read_product(req.params.productId, function(err, response) {
      if(err) {
        res.json(err);
      }
      res.json(response);
    });
  },
  update: function(req, res, next) {
    var product = req.body;
    db.update_product(product.id, product.description, function(err, response) {
      if(err) {
        res.json(err);
      }
      res.json(response);
    });
  },
  delete: function(req, res, next) {
    db.delete_product(req.params.productId, function(err, response) {
      if(err) {
        res.json(err);
      }
      res.json(response);
    });
  }
};
