
import { selectUsuarios, selectUsuario } from "./bd.js";
import { selectUsuarios } from "./bd.js";
import dotenv from "dotenv";
import express from "express";      // Requisição do pacote do express
const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta
// endpoint ou porta
app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "Maria Vitória Oliveira Santos",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});


dotenv.config();
app.get("/usuarios", async (req, res) => {
  console.log("Rota GET/usuarios solicitada");
  try {
    const usuarios = await selectUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

app.get("/usuario/:id", async (req, res) => {
  console.log("Rota GET /usuario solicitada");
  try {
    const usuario = await selectUsuario(req.params.id);
    if (usuario.length > 0) res.json(usuario);
    else res.status(404).json({ message: "Usuário não encontrado!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});