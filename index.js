const express = require('express');

const port = 8080;
let app = express();

app.use(express.static(__dirname));

app.listen(port);