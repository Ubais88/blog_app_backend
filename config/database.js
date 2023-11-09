const mongoose = require('mongoose');
require('dotenv').config({ path: 'ENV_FILENAME' });

const dbConnect = () => {
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) =>{
        console.log("Eror in connection", error);
        process.exit(1);
    })
}


module.exports = dbConnect;