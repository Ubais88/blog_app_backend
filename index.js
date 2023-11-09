const express = require('express');
const dbConnect = require('./config/database');
const app = express();

// load config from env file
require('dotenv').config();
 
// middleware to parse json req body
app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(3000,() => {
    console.log('listening on port',PORT);
})

const blogRoutes = require('./routes/blog')
app.use("/api/v1", blogRoutes); 


dbConnect()
// default route
app.get('/', (req, res) => {
    res.send(`<h1>Apna Home Page</h1>`);
})  
  

app.get('/ubais', (req, res) => {
    res.send(`<h1>Apna 2nd Page</h1>`);
}) 