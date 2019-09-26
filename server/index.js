// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers

app.get("/", (req, res) => {
  res.send("Hi");
});

app.post("/converter", async (req, res) => {
  const transacao = req.body.transacao;

  const transacaoFormatada = {
    nroSequencialTransacao: transacao.substring(0, 6),
    codTransacao: transacao.substring(6, 9),
    codModalidadeProcessamento: transacao.substring(9, 10),
    codIdCliente: transacao.substring(10, 21),
    UfOrigemTransacao: transacao.substring(21, 23),
    ufOrigemTrasmissao: transacao.substring(23, 25),
    ufDestinoTrasmissao: transacao.substring(25, 27),
    tpCondicionalidadeTransacao: transacao.substring(27, 28),
    tamanhoTransacao: transacao.substring(28, 32),
    codRetornoTransacao: transacao.substring(32, 34),
    diaJuliano: transacao.substring(34, 37),
    corpo : transacao.substring(37)
  };

  res.send(transacaoFormatada);
});

app.listen(5000, err => {
  console.log("Listening");
});
