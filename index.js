const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000

//Import router
const routes = require('./routes')
app.use(routes)

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
    console.log(`Servidor rodando na porta ${PORT}`)
});