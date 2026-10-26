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
app.get("/", async (req, res) => {
  try {
    const resultado = await pool.query("SELECT NOW()");
    res.json({
      mensagem: "Conexão bem-sucedida",
      horario: resultado.rows[0].now,
    });
  } catch (erro) {
    console.error("Erro ao conectar ao banco", erro);
    res.status(500).json({ erro: "Erro ao conectar ao banco de dados" });
  }
});

app.get("/services", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM services");
    res.json(result.rows);
  } catch (error) {
    console.log("error while getting information", error);
    res
      .status(500)
      .json({ error: "error while getting information of services" });
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
});
