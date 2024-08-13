const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;


app.get("/", (req, res) => {
    res.send("Rodando Servidor");
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});