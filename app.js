const express = require('express')
const app = express()
const dotenv = require("dotenv").config();
const {
  MongoClient
} = require("mongodb");
const bodyParser = require('body-parser')
const port = process.env.port || 3003;

// test db
console.log(process.env.TESTVAR);

let db = null;
// function connectDB
async function connectDB() {
  // get URL from .env file
  const uri = process.env.DB_URI;
  // make connection to database
  const options = {
    useUnifiedTopology: true
  };
  const client = new MongoClient(uri, options);
  await client.connect();
  db = await client.db(process.env.DB_NAME);
}
connectDB()
  .then(() => {
    // if succesfull connections is made, show a message
    console.log("We have a connection to Mongo!");
  })
  .catch((error) => {
    // if connnection is unsuccesful, show errors
    console.log(error);
  });

app.use(express.static('static'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  /*let studentProfile = {};
  studentProfile = await db
    .collection('enqueteAnswer')*/

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
});

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
*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})