const express = require(`express`);
const env = require('dotenv')
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const fs = require('fs');
let stringData;

app.use(express.static('static'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.set('view engine', 'ejs');

const renderEnquete = (res, route) => {
    if (route !== 'manifest.json') {
        fs.readFile(`static/json/${route}.json`, 'utf8', (err, data) => {
            let dataFromJSON
            if (data) {
                dataFromJSON = JSON.parse(data);
            }
            
            if (route === 'student') {
                res.render('index', {
                    student: dataFromJSON
                });
            }
            if (route === 'wafs') {
                res.render('wafs', {
                    wafs: dataFromJSON
                });
            }

            if (err) console.log(err);
        });
    }
}

const dataEnquete = (req) => {
    return {
        "teacher":`teacher-${req.body.teacher}`,
        "week":`week-${req.body.week}`,
        "grade":`grade-${req.body.grade}`,
        "difficult":`difficult-${req.body.difficult}`,
        "clarity":`clarity-${req.body.clarity}`,
        "understanding":`understanding-${req.body.understanding}`,
    }
}

app.get('/', (req, res) => {
    renderEnquete(res, 'student')
});

app.get('/:id', (req, res) => {
    const route = req.params.id;
    renderEnquete(res, route)
});

app.post('/wafs', (req, res) => {
    const student = {
        "naam": req.body.naam,
        "studentnummer": req.body.studentnummer
    }
    stringData = JSON.stringify(student);

    fs.writeFile('static/json/student.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    renderEnquete(res, 'wafs')
});


app.post('/end', (req, res) => {
    const wafs = dataEnquete(req);
    stringData = JSON.stringify(wafs);

    fs.writeFile('static/json/wafs.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    res.render('send');
});

app.use((req, res) => {
    res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});