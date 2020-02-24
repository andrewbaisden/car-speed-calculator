const express = require('express');
const ejs = require('ejs');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.engine('ejs', require('ejs').__express);

app.set('views', 'views');

const router = express.Router();

router.get('/', (req, res) => res.render('index'));

router.use(express.static('public'));

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
