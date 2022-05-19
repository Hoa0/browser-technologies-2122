require("dotenv").config();
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000;

const fs = require('fs')

app.use(express.static('static'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs', {
    title: 'Enquete minor',
  })
})

app.post('/', (req, res) => {
 userInput = JSON.stringify(req.body)

  fs.writeFile('studentData.json', userInput, 'utf8', cb => {

  });

  res.redirect('/send')
})

app.get('/send', (req, res) => {
  fs.readFile('studentData.json',(err, data) => {
    let infoData = JSON.parse(data)
    console.log(infoData)

    res.render('send.ejs', {title: 'etq minor', data: infoData})
  })
  // fs.readFile('studentData.json', userInput, 'utf8', (err,data) => {
  //   let infoData = JSON.parse(data);
 
  //   console.log(data)
  
  // });
  // res.render('send.ejs', {
  //    title: 'Enquete minor',
  //   data: {name: 'tetete'}
  // })
})





// page not found
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

//Code here
