const express = require('express');

const PORT = 3000;
const HOSTNAME = '0.0.0.0';

const app = express();
const serverName = process.env.SERVER_NAME;

app.use(express.static('public'))

app.listen(PORT, HOSTNAME, () => console.log(`Running on http://${HOSTNAME}:${PORT}`));
