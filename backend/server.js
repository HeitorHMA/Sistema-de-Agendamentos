const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world ");
});
app.listen(port, () => {
  console.log("Testing .Listen()");
});
