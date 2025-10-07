// Importe o express
import express from "express";

const app = express();
const PORT = 3000;

//Middleware para definir o cabeçalho da resposta
app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8 ");
    next();
});

//Roteamento básico
app.get("/", (req, res) => {
    res.status(200).send("<h1>Página inicial!</h1>");
});

app.get("/sobre", (req, res) => {
    res.status(200).send("<h1>Página sobre </h1>");
});

app.get("/contato", (req, res) => {
    res.status(200).send("<h1>Fale Conosco</h1>"); 
});

app.get("/fotos", (req, res) => {
    res.status(200).send("<h1>Fotos</h1>"); 
});

//Rota para lidar com páginas não encontradas
app.use((req, res) => {
    res.status(404).send("<h1>Página não encontrada</h1>");
}); 

//Inicia o servidor para ouvir na porta definida
app.listen(PORT, () => {
    console.log("Servidor rodando em http://localhost:${PORT}");
});
