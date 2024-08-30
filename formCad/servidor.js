const http = require("http");

const express = require("express");
const app = express();
app.get("/test", function(req, res) {
    res.send("<h1>Agora um teste dentro do Teste</h1>"+"<h3>Desenvolvido por Wilson Nunes Rodrigues<h3>");
});
app.get("/cadadastro", function(req, res) {
    res.send("<h1>Cadastro</h1>"+"<h3>Params: <h3>"+ req.fields);
});
app.get("/", function(req, res) {
    res.send("<h1>Servidor rodando com ExpressJS</h1>"+"<h3>Desenvolvido por Wilson Nunes Rodrigues<h3>");
});
http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));
