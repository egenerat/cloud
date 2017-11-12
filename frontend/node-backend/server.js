const express = require('express');

const PORT = 3000;
const HOSTNAME = '0.0.0.0';

const app = express();
app.get('/', (req, res) => res.send('Hello world'));

app.listen(PORT, HOSTNAME, () => console.log(`Running on http://${HOSTNAME}:${PORT}`));
