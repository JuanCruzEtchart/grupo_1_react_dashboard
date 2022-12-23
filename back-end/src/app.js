const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();

const apiProductsRouter = require("./routes/api/apiProductsRouter");
const apiGenresRouter = require("./routes/api/apiGenresRouter");
const apiUsersRouter = require("./routes/api/apiUsersRouter");
const apiActorsRouter = require("./routes/api/apiActorsRouter");

app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use("/api/products", apiProductsRouter);
app.use("/api/genres", apiGenresRouter);
app.use("/api/users", apiUsersRouter);
app.use("/api/actors", apiActorsRouter);

app.listen("3005", () => {
  console.log("Servidor corriendo en el puerto 3005");
  console.log("http://localhost:3005");
});
