require("dotenv").config();

const app = require("./app");
const { connectDB } = require("./config/db");

connectDB().then(() => {
  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
