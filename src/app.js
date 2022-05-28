const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.engine('ejs', require('ejs').__express);

app.set('views', './views');

app.use('/static', express.static('public'));

app.get('/', (req, res) => res.render('index'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));
