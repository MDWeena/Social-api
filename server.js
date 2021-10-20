const http = require('http');
const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config();

const server = http.createServer(app);

const port = process.env.PORT || 5000;

mongoose.connect(process.env.mongoDB_URL)
    .then(() => console.log('Database up and running:::'))
    .catch(err => console.log(`Database no gree start, this na why: ${err.message}`))


server.listen(port, () => {
    console.log(`Server running on ::: ${port}`);
})