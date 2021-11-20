const express = require('express');
const app = express();
const redirectRoute = require('./routes/redirect');
const urlRoute = require('./routes/url');
const connection = require('./config/db');

connection.once('open', () => console.log('DB Connected'));
connection.on('error', () => console.log('Error'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', redirectRoute);
app.use('/api/url', urlRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`));
