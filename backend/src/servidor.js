require("dotenv").config();

const express = require("express");

const { connectDB } = require("./config/db");

const app = express();

app.get("/", (req, res) => {
  return res.json({ status: "ok" });
});

connectDB().then(() => {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
