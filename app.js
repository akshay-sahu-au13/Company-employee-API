require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9999;
const app = express();
const MongoInit = require('./DB connection/MongoInit');

MongoInit();

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('<center><h2 style={color:#2B2A33}> Welcome to Company-Employee information system</h2></center>');
});


app.listen(PORT, () => {
    console.log(`Server is runing on http://localhost:${PORT}`);
});