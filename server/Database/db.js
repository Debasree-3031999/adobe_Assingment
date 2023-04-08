const mongoose = require('mongoose');
 require('dotenv').config();


const connect=()=>{
    return mongoose.connect(
        `mongodb+srv://${process.env.ADMIN_NAME}:${process.env.ADMIN_PWD}@cluster0.1iwdzcf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    )
}

module.exports=(connect);