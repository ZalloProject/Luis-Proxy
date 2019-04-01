const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const port = 8080;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/', (req, res) => {

});

app.listen(port);