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

const renderPages = (res, route) => {
    if (route !== 'manifest.json') {
        fs.readFile(`json/${route}.json`, 'utf8', (err, data) => {
            if (err) throw err;
            let infoFromEnquete
            if (data) {
                infoFromEnquete = JSON.parse(data);
            }

            if (route === 'student') {
                res.render('index', {
                    student: infoFromEnquete
                });
            }
            if (route === 'wafs') {
                res.render('wafs', {
                    wafs: infoFromEnquete
                });
            }
        });
    }
}

const infoFromEnquete = (req) => {
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
    renderPages(res, 'student')
});

app.get('/:id', (req, res) => {
    const route = req.params.id;
    renderPages(res, route)
});

app.post('/wafs', (req, res) => {
    const student = {
        "naam": req.body.naam,
        "studentnummer": req.body.studentnummer
    }
    stringData = JSON.stringify(student);

    fs.writeFile('json/student.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    renderPages(res, 'wafs')
});


app.post('/end', (req, res) => {
    const wafs = infoFromEnquete(req);
    stringData = JSON.stringify(wafs);

    fs.writeFile('json/wafs.json', stringData, (err) => {
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