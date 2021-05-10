const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");

dotenv.config();
const { DB_NAME, DB_PORT, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;

const db = new Sequelize(
  DB_NAME,
  POSTGRES_USER || "postgres",
  POSTGRES_PASSWORD,
  {
    port: Number(DB_PORT),
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
