const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo3'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extend: true}));


app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM client"
    db.query(sqlSelect, (err, result) => {
        console.log(result);
    });
});

app.post('/api/insert', (req, res) => {
    const nom = req.body.nom;
    const tel = req.body.tel;
    const sqlInsert = "INSERT INTO client(nom, tel) VALUES(?,?)"
    db.query(sqlInsert, [nom, tel], (err, result) => {
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});