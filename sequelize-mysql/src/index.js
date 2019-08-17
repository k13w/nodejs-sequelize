const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(require('./routes'));


app.listen(5000, () => { console.log("listening on port 5000")})