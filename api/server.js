const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");
const dotenv = require("dotenv");
const db = require("./db");
const { error } = require("./helpers/responses");

// Create the express aplication
const app = express();

// Access to environment variables
dotenv.config();

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", routes);

// Custom error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json(
    error({
      err: err.name,
      message: err.message,
    })
  );
});

const port = process.env.API_PORT || 3001;

db.sync({ force: false })
  .then(({ config }) => {
    app.listen(port, () => {
      console.log(
        `Listenning on port "${port}" and connected with database "${config.database}"`
      );
    });
  })
  .catch((err) => {
    console.log("Hubo un error con la conexión a la base de dato", err);
  });
