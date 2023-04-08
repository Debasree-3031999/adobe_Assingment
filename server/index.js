const express=require('express');
const connect=require('./Database/db');
require('dotenv').config();
const port=process.env.PORT||5000;


const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.listen(port,async()=>{
    try {
        await connect();
        console.log('connected to DB')
    } catch (error) {
        console.error(error.message)
    }
    console.log(  `listening on port ${port}`)
})