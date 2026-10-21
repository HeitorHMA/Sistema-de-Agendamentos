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
app.get("/testar-conexao", async (req, res) => {
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
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
});
