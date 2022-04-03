const express = require('express')
const app = express()
//const dotenv = require("dotenv").config();
const bodyParser = require('body-parser')
const port = process.env.port || 3003;

app.use(express.static('static'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
            res.render('index', {
                title: 'overzicht iets',
            })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})