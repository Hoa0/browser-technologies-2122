const express = require('express')
const app = express()
const dotenv = require("dotenv").config();
const {
  MongoClient
} = require("mongodb");
const bodyParser = require('body-parser')
const port = process.env.port || 3003;

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Enquete minor',
  })
})

app.post('/', async (req, res) => {

  /* add*/
  db.collection('enqueteAnswer')
    .insertOne({
      studentName: req.body.student_name,
      studentNumber: req.body.student_number,
      teacher: req.body.teacher_name,
      week: req.body.week,
      grade: req.body.wafs_grade,
      subjectDifficult: req.body.wafs_difficult_level,
      subjectClarity: req.body.wafs_clarity_level,
      subjectfRating: req.body.wafs_rating
    });
  console.log(req.body)
  res.render('index', {
    title: 'Enquete minor',
  })
})

// page not found
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})