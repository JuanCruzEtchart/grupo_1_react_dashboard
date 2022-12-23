const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Product = db.Product;

const productsApiController = {
  list: (req, res) => {
    Product.findAll().then((products) => {
      let response = {
        meta: {
          status: 200,
          total: products.length,
          url: "api/product/list",
        },
        data: products,
      };
      res.json(response);
    });
  },

  detail: (req, res) => {
    const id = req.params.id;
    Product.findByPk(id, {
      include: [
        "director",
        "screenwriter",
        "genre1",
        "genre2",
        "actors",
        "characters",
      ],
    }).then((product) => {
      let response = {
        meta: {
          status: 200,
          url: "/api/product/detail/",
        },
        data: product,
      };
      res.json(response);
    });
  },

  movies: (req, res) => {
    Product.findAll({ where: { type: "Película" } }).then((movies) => {
      let response = {
        meta: {
          status: 200,
          total: movies.length,
          url: "api/product/movies",
        },
        data: movies,
      };
      res.json(response);
    });
  },

  series: (req, res) => {
    Product.findAll({ where: { type: "Serie de TV" } }).then((series) => {
      let response = {
        meta: {
          status: 200,
          total: series.length,
          url: "api/product/movies",
        },
        data: series,
      };
      res.json(response);
    });
  },
};

module.exports = productsApiController;
