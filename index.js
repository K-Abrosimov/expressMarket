require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json());

app.use('/api',require('./Routes/auth.router'))



function start(){
    try {
        mongoose.connect(process.env.MONGO_CONNECTION_STR, console.log('MONGO CONNECTED'));
        app.listen(PORT,console.log('Server started on port: ' + PORT))
    } catch (error) {
        console.log(error);
    }
}


start();