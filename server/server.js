const express = require( "express" );
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const menuRouter = require('./routes/menu');

const app = express();
const port = process.env.port || 5000;

//Mongo db connection
const uri = process.env.CONNECTION_STRING;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("DB connection established successfully!");
});

//Middleware
app.use(cors());
app.use(express.json());
app.use('/menu', menuRouter);

//Listenting
app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
});
