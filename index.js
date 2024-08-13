const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;

//Conection DB
const db = require('./database/db'); // Conexão com o Knex

//Data conection
db.raw('SELECT 1')
    .then(()=>{
        console.log("Conectado ao banco")
    }).catch((err) =>{
        console.log(err)
    })

//View Engine
app.set('view engine', 'ejs')

//Statics
app.use(express.static('public'))

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("index")
})



app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});