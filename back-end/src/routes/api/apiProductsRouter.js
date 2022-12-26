const express = require("express");
const router = express.Router();
const productsApiController = require("../../controllers/api/productsApiController");

//Rutas
//Listado de todos los productos
router.get("/", productsApiController.list);
//Detalle de producto
router.get("/detail/:id", productsApiController.detail);
//Detalle de producto
router.get("/lastItem", productsApiController.lastItem);
//Listado de películas
router.get("/movies", productsApiController.movies);
//Listado de series
router.get("/series", productsApiController.series);

module.exports = router;
