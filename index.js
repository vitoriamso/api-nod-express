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