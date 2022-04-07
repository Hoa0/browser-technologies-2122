require("dotenv").config();
const express = require('express')
const app = express()
const {
  MongoClient
} = require("mongodb");
const bodyParser = require('body-parser')
const port = process.env.port || 3003;

const client = new MongoClient(process.env.DB_URI, {
  retryWrites: true,
})

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

/**
 * get data from input
 */
app.post('/', async (req, res) => {
  console.log(req.body);

  try {
    await client.connect();
    const database = client.db('minorEnquete');
    const listAnswer = database.collection('enqueteAnswer');
    const addAnswer = {
      studentName: req.body.student_name,
      studentNumber: req.body.student_number,
      wafs: {
        teacher: req.body.teacher_names,
        week: req.body.week,
        grade: req.body.wafs_grade,
        subjectDifficult: req.body.wafs_difficult_level,
        subjectClarity: req.body.wafs_clarity_level,
        subjectfRating: req.body.wafs_rating,
      }
    };
    await listAnswer.insertOne(addAnswer)
      .then(`inserted ${addAnswer.name}`);
  } catch (error) {
    console.warn(error);
  } finally {
    await client.close();
    res.render('send', {
      title: 'verzonden',
    });
  }
})

// page not found
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})