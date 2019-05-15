const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => res.sendFile(path.join(`${__dirname}/views/index.html`)));

app.use('/static', express.static(path.join(`${__dirname}/public`)));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));
