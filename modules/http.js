const express = require("express");
const UserModel = require("../src/models/user.model");
const app = express();
app.use(express.json());

// rotas de GET
app.get("/home", (req, res) => {
  res.status(200).contentType("text/html").send("<h1>home page</h1>");
});

app.get("/user", (req, res) => {
  const users = [
    { name: "eduardo", email: "eduardo@email.com" },
    { name: "Joohn Doe", email: "jimi@email.com" },
  ];
  res.status(200).json(users);
});

// rota de POST para criar usuário
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;
app.listen(port, () => console.log(`🚀 rodando na porta ${port}`));
