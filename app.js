const express = require('express')
const app = express()
//const dotenv = require("dotenv").config();
const {
  MongoClient
} = require("mongodb");
const bodyParser = require('body-parser')
const port = process.env.port || 3003;

app.use(express.static('static'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Enquete minor',
  })
})

/*
app.get('/getData/:id', function (request, response) {
  const fs = require('fs');
  fs.readFile('./enqueteData.json', 'utf8', (err, data) => {

    if (err) {
      console.log(`Error reading file ${err}`);
    } else {

      // parse JSON string to JSON object
      const databases = JSON.parse(data);

      // print all databases
      databases.forEach(db => {
        console.log(`${db.name}: ${db.type}`);
      });
    }
  });

  try {

    const data = fs.readFileSync('./enqueteData.json', 'utf8');

    // parse JSON string to JSON object
    const databases = JSON.parse(data);

    // print all databases
    databases.forEach(db => {
      console.log(`${db.name}: ${db.type}`);
    });

  } catch (err) {
    console.log(`Error reading file: ${err}`);
  }
});*/

let userInput
app.post("/", (req, res) => {
  console.log(userInput)
  userInput = JSON.stringify(req.body.name)

  fs.writeFile("enqueteData.json", userInput, "utf8", cb => {
    console.log("het werkt")

    res.render("index", {
      title: 'Enquete minor',
    })
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})